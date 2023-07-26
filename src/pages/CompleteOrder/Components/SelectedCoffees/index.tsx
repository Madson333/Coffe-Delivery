import { TitleText } from "../../../../components/Typography";
import { UseCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = UseCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cáfes selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map(item => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />

      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}