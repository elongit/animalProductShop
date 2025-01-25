import { useLocation  } from "react-router-dom";
import Button from "../../components/buttons/btn";
const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId } = location.state || {};

  return (
    <div className="confirmation-page p-5 md:text-lg my-20 text-center flex flex-col m-auto gap-3 md:w-1/2 items-center">
        <figure>
            <img src="https://eso.clan-oberon.de/wp-content/uploads/2019/06/green-check-icon.jpg" alt="" className="w-20 h-20 rounded-full object-cover"/>
        </figure>
      <h1 className="font-bold text-green-500 text-xl md:text-2xl">Thank you for your order!</h1>
      <p>Your order has been placed successfully.</p>
      {orderId && <p>Order Number: {orderId}</p>}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
    <Button label="Continue Shopping" path="/menu" />
    <Button label="Order history" path="/orderHistory" />
    </div>

    </div>
  );
};

export default OrderConfirmation;
