import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { UseCart } from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../Utils/FormatMoney";
import { AddCartWrapper, CardFooter, CoffeCardContainer, Drescription, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
};

interface CoffeeProps {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state: number) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state: number) => state - 1)
  }

  const { AddCoffeToCart } = UseCart();

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      quantity,
    }
    AddCoffeToCart(coffeToAdd)
  }

  const formarttedPrice = FormatMoney(coffee.price);
  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map(tag =>
          <span key={`${tag}`}>{tag}</span>
        )}
      </Tags>

      <Name>{coffee.name}</Name>

      <Drescription>{coffee.description}</Drescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formarttedPrice}</TitleText>
        </div>

        <AddCartWrapper>

          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />


          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>

        </AddCartWrapper>

      </CardFooter>

    </CoffeCardContainer>
  )
}