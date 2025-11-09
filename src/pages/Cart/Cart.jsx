import CartList from "./sections/CartList";
import OrderSummary from "./sections/OrderSummary";

const Cart = () => {
  return (
    <article className="container pagePadding grid grid-cols-1 md:grid-cols-3 gap-8">
      <CartList />
      <OrderSummary />
    </article>
  );
};

export default Cart;
