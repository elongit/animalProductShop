import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/buttons/btn";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem, selectCartItems } from "../../features/cart/cartSlice"
import { NavLink} from "react-router-dom";

function ShoppingCart() {



  const items = useSelector(selectCartItems);
  const dispatch = useDispatch()

  
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <main className="p-5 pb-48 grid grid-cols-1 lg:grid-cols-4 gap-5">
      <section className="p-2 lg:col-span-3 overflow-x-auto">
        {items.length > 0 ? (
          <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-800 cursor-pointer">
            <thead>
              <tr className="px-6 text-gray-700 py-3 md:text-lg rounded-s-lg text-center">
                <th className="md:px-6 py-4">Product</th>
                <th className="md:px-6 py-4">Name</th>
                <th className="md:px-6 py-4">Quantity</th>
                <th className="md:px-6 py-4">Unit Price</th>
                <th className="md:px-6 py-4">Total Price</th>
                <th className="md:px-6 py-4 text-primary-color">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="bg-white  md:text-lg border-b text-center">
                  <td>
                    <figure className="h-fit p-2 w-full flex justify-center">
                    <NavLink to={`/product/${item.id}`} className="hover:underline">
                      <img
                        src={item.coverImg}
                        alt={`Image of ${item.name}`}
                        className="h-20  object-cover rounded-md w-20"
                        loading="lazy"
                      />
                      </NavLink>
                    </figure>
                  </td>
                  <td className="md:text-lg ">{item.name}</td>
                  <td className="px-6 py-4">
                    <div className="p-1.5  ring-2 ring-primary-color rounded-full flex justify-between items-center">
                      <button
                        className="rounded-full hover:bg-slate-100 py-1 px-3"
                        onClick={() => handleDecreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="rounded-full hover:bg-slate-100 py-1 px-3"
                        onClick={() => handleIncreaseQuantity(item.id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      type="button"
                      className="bg-primary-color hover:bg-secondary-color px-2 py-1 rounded text-white font-bold"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-0">
            <div>
              <h1 className="font-bold text-gray-700 text-lg mb-3">
                Your Cart is Empty 🙂
              </h1>
              
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--bucket-shopping-basket-cuterr-illustrations-pack-people-3020773.png"
              alt="Empty cart illustration"
              className="w-full md:w-1/2 lg:w-full h-full"
            />
          </div>
        )}
      </section>

      <aside className="p-5 h-fit sticky top-5 bg-slate-50 text-lg font-semibold text-gray-600">
        <h1 className="font-bold">Your Cart Summary</h1>
        <h3 className="text-xl font-medium text-gray-700">
          Total: ${calculateTotalPrice().toFixed(2)}
        </h3>

        <div className="mt-3">
         {items.length > 0 ? (
           <Button label="Proceed to Checkout" path="/checkout"  />
     
         ):(
          <Button label="Add something" path="/menu" />
         )}
        </div>
      </aside>
    </main>
  );
}

export default ShoppingCart;
