import ArrowBtn from "../../components/buttons/arrowBtn";
import { selectCartItems } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../features/orders/orderSlice";
import { clearCart } from "../../features/cart/cartSlice";
import { saveData } from "../../features/payment/checkoutSlice";
import Cookies from "js-cookie";


const CheckOutForm = () => {
  const dispatch = useDispatch();
  let items = useSelector(selectCartItems);
  const navigate = useNavigate();
    
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = Cookies.get('token')
  const isAuth = useSelector((state) => state.auth);
  const users = isAuth.users;
  const user = users.find((user) => user.token === token);

  // Form state
  const [formData, setFormData] = useState({
    userId : user.id,
    cardName: "oussama douwabi",
    address: "123 Elm Street",
    city: "casa",
    zip: "12345",
    expiryDate: "12/25",
    ccv: "123",
    tel : "0645637608",
    isSaved: true,
  });

  
  // Cart info
  const itemsOnCart = items.reduce((total, item) => total + item.quantity, 0);
  const totalCharges = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 10;
  const estimatedTotal = totalCharges + shippingFee;

  // Form validation
  const handleFormValidation = () => {
    let validationErrors = [];

    if (
      !formData.cardName ||
      !formData.city ||
      !formData.address ||
      !formData.ccv ||
      !formData.expiryDate ||
      !formData.zip ||
      !formData.tel
    ) {
      validationErrors.push("All fields are required.");
    }

 
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }

    return true;
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      cardName: "",
      address: "",
      city: "",
      zip: "",
      expiryDate: "",
      ccv: "",
      tel : "",
      isSaved: false,
    });
    setErrors([]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleFormValidation();
    if (isValid) {
      setIsSubmitting(true);

      try {
        dispatch(addOrder(items, estimatedTotal)); 
        if (formData.isSaved) {
          dispatch(saveData(formData)); // Save payment details
        }

        // Clear cart and navigate to order confirmation
        dispatch(clearCart());
        
        navigate("/orderconfirmed");
        
        resetForm(); // Reset form on success
      } catch (error) {
        console.error("Error during checkout:", error);
        setErrors(["An error occurred while processing your order."]);
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <main className="my-5 py-5 p-5">
      <ArrowBtn path={-1} />
      <section className="grid-cols-1 grid md:grid-cols-2 gap-5">
        <fieldset className="w-full">
          <legend className="text-2xl font-bold drop-shadow text-primary-color">
            Checkout
          </legend>
          <form className="flex flex-col gap-5 text-lg" onSubmit={handleSubmit}>
            {errors.length > 0 && (
              <ul className="list-none p-2 bg-red-300 text-white text-center font-bold">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <label htmlFor="cardName" className="text-gray-600 font-semibold">
              Card name :
            </label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              placeholder="Name on Card"
              value={formData.cardName}
              onChange={handleChange}
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            />
            <label htmlFor="address" className="text-gray-600 font-semibold">
              Address :
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            />

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="city" className="text-gray-600 font-semibold">
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={handleChange}
                  className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
                />
              </div>
              <div>
                <label htmlFor="zip" className="text-gray-600 font-semibold">
                  Zip :
                </label>
                <input
                  type="number"
                  name="zip"
                  id="zip"
                  placeholder="Zip code"
                  value={formData.zip}
                  onChange={handleChange}
                  className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="text-gray-600 font-semibold"
                >
                  Expiry Date:
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  id="expiryDate"
                  placeholder="Expiry date"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
                />
              </div>
              <div>
                <label htmlFor="ccv" className="text-gray-600 font-semibold">
                  CCV :
                </label>
                <input
                  type="number"
                  name="ccv"
                  id="ccv"
                  placeholder="***"
                  value={formData.ccv}
                  onChange={handleChange}
                  min={100}
                  max={999}
                  className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
                />
              </div>
            </div>
            <div >
              <label htmlFor="phone" className="text-gray-600 font-semibold">
                Phone number:
              </label>
              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isSaved"
                id="isSaved"
                value={formData.isSaved}
                checked={formData.isSaved}
                onChange={handleChange}
              />
              <label htmlFor="isSaved" className="text-gray-600">
                Save card details for future purchases
              </label>
            </div>
            <button
              type="submit"
              className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
            >
               {isSubmitting ? "Processing..." : "Save card"}
            </button>
          </form>
        </fieldset>

        {/* Order Summary */}
        <section className="p-5 h-fit -order-last md:-order-first flex flex-col gap-3 bg-slate-50 text-lg font-semibold text-gray-600">
          <h1 className="font-bold">Order Summary</h1>
          <div className="flex justify-between">
            <h3 className="text-xl font-medium text-gray-700">Total items :</h3>
            <span>{itemsOnCart}</span>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-medium text-gray-700">
              Total charges :
            </h3>
            <span>${totalCharges.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-medium text-gray-700">Shipping :</h3>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl font-medium text-gray-700">
              Estimated Total :
            </h3>
            <span>${estimatedTotal.toFixed(2)}</span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default CheckOutForm;
