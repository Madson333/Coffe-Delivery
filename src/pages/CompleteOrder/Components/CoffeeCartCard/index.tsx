import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../Contexts/CartContext";
import { UseCart } from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../Utils/FormatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface coffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: coffeeCartCardProps) {
  const { ChangeCartItemQuantity, removeCartItem } = UseCart();

  function handleIncrease() {
    ChangeCartItemQuantity(coffee.id, "increase")
  }
  function handleDecrease() {
    ChangeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = FormatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />

        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>

          <ActionsContainer>
            <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} />

            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>


        </div>

      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}