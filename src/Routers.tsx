import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/CompleteOrder" element={<CompleteOrderPage />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}