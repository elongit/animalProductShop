import { useState  , useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPaymentData } from "../../payment/checkoutSlice";
import { useNavigate } from "react-router-dom";
export default function BillingForm() {
  const data = useSelector(selectPaymentData)
  const navigate = useNavigate()
  const { id } = useParams();
  console.log(id);
  
  const billingData = data.find((billing) => billing.userId === id);
  const [formData, setFormData] = useState({
    billingName: "",
    address: '',
    city: '',
    zipCode: '',
    ccv: '',
    phone: '',
    expiryDate: '',
  });
 
  


  useEffect(() => {
    if (billingData ) {
      // If billingData  is found, set the formData
      setFormData({
        id : billingData.id,
        billingName: billingData.cardName,
        address: billingData.address,
        city: billingData.city,
        zipCode: billingData.zip,
        ccv: billingData.ccv,
        phone: billingData.tel,
        expiryDate : billingData.expiryDate,
      });
    }
    
  }, [billingData , navigate]);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value

    });
  }


    return (
      <fieldset className="w-full p-0 md:p-5">
        <legend className="text-xl md:text-2xl mb-5 font-bold text-primary-color">
          Billing Information
        </legend>
        <form
          action=""
          className="flex flex-col md:grid md:grid-cols-2 gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="billingName"
            value={formData.billingName}
            placeholder="Billing Name"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Street Address"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={formData.zipCode}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />
          <input
            type="text"
            name="expiryDate"
            id="expiryDate"
            placeholder="Expiry date"
            value={formData.expiryDate}

            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />

          <input
            type="number"
            name="ccv"
            id="ccv"
            placeholder="ccv"
            value={formData.ccv}
            min={100}
            max={999}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color col-span-2"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8 col-span-2"
          >
            Save Billing Info
          </button>
        </form>
      </fieldset>
    );
  }
  
