import { HeaderButton, HeaderButtonContainer, HearderContainer } from "./styles";
import logo from "../../assets/lg.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";
import { UseCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = UseCart();

  return (
    <HearderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} />
        </NavLink>


        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Lagarto, SE
          </HeaderButton>

          <NavLink to="/CompleteOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HearderContainer>
  )
}