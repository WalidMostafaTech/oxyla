import PaymentList from "./section/PaymentList";
import OrderSummary from "./section/OrderSummary";

const Payment = () => {
  return (
    <article className="container pagePadding grid grid-cols-1 md:grid-cols-3 gap-8">
      <PaymentList />
      <OrderSummary />
    </article>
  );
};

export default Payment;
