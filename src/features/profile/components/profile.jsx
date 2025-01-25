export default function ProfileForm() {
    return (
      <fieldset className="w-full p-0 md:p-5">
        <legend className="text-xl md:text-2xl mb-5 font-bold text-primary-color">
          Edit Your Profile
        </legend>
        <form
          action=""
          className="flex flex-col md:grid md:grid-cols-2 gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Full Name"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color col-span-2"
          />
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8 col-span-2"
          >
            Update Info
          </button>
        </form>
      </fieldset>
    );
  }
  