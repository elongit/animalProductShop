export default function BillingForm() {
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
            placeholder="Billing Name"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
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
  