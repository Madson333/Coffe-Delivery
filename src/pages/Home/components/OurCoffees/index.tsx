import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../Data/coffee";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeeContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>

    </OurCoffeeContainer>
  )
}