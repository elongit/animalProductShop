function Contact() {
  return (
    <main className="pt-20 pb-10  px-5">
      <fieldset className="w-full lg:w-1/2 m-auto ">
        <legend className="text-2xl mb-5 font-bold drop-shadow text-primary-color">
          Contact us
        </legend>
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Entre your full name"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="email"
            placeholder="Entre your email"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />

          <input
            type="tel"
            placeholder="Entre your phone number"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />

          <textarea
            name=""
            id=""
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Write your message here"
          ></textarea>
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
          >
            Send
          </button>
        </form>
      </fieldset>
    </main>
  );
}

export default Contact;
