import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";

type paymenthMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymenthMethodInput = forwardRef<HTMLInputElement, paymenthMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymenthMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})