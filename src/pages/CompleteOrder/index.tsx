import { CompleteOrderForm } from "./Components/CompleteOrderForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../hooks/useCart";

enum paymenthMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymenthMethod: zod.nativeEnum(paymenthMethod, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    }
  })
});

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>;

type CompleteOrderFormData = OrderData;

export function CompleteOrderPage() {

  const confirmOrderForm = useForm<CompleteOrderFormData>({ resolver: zodResolver(confirmOrderValidationSchema) });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = UseCart();

  function handleConfirmOrder(data: CompleteOrderFormData) {
    navigate("/OrderConfirmed", {
      state: data
    });

    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}