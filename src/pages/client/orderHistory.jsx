import { selectAllOrders } from "../../features/orders/orderSlice";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const Orders = useSelector(selectAllOrders)

  
    return (
      <div className="relative overflow-x-auto p-2 md:p-5 my-10">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-gray-100 ">
            <tr>
              <th className="px-3 md:px-6 py-3">Order Id</th>
              <th className="px-3 md:px-6 py-3">Order date</th>
              <th className="px-3 md:px-6 py-3">Product name</th>
              <th className="px-3 md:px-6 py-3">Category</th>
              <th className="px-3 md:px-6 py-3">Quantity</th>
              <th className="px-3 md:px-6 py-3">Total price</th>
              <th className="px-3 md:px-6 py-3">Status</th>
              <th className="px-3 md:px-6 py-3">Token</th>
              
            </tr>
          </thead>
          <tbody>
          {Orders.map((order, index) => (
            order.items.map((product, productIndex) => (
              <tr key={`${index}-${productIndex}`} className="text-black border-b border-primary-color text-sm md:text-lg">
                <th className="px-6 py-4">{order.orderNumber}</th>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">${order.orderTotalPrice}</td>
                <td className="px-6 py-4">${order.userId}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full p-2 px-4 text-white ${
                      order.status === "Pending"
                        ? "bg-orange-300"
                        : "bg-green-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))
          ))}
          </tbody>
        </table>
      </div>
    );
    
      };
      
      export default OrderHistory