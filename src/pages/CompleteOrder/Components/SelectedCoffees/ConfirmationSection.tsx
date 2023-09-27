import { string } from "zod";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { UseCart } from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../Utils/FormatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = UseCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItensTotal = FormatMoney(cartItemsTotal);
  const formattedCartTotal = FormatMoney(cartTotal);
  const formattedDeliveryPrice = FormatMoney(DELIVERY_PRICE);


  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItensTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">TOTAL</RegularText>
        <RegularText weight='700' color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
      </div>
      <Button text="confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
    </ConfirmationSectionContainer>
  )
}