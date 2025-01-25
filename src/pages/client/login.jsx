import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ArrowBtn from "../../components/buttons/arrowBtn";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { SignInUser } from "../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authError = useSelector((state) => state.auth.error);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    username: "oussama11",
    password: "12345678",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormValidation = () => {
    let validationErrors = [];
    if (!formData.username || !formData.password) {
      validationErrors.push("All fields are required");
    }
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = handleFormValidation();

    if (isValid) {
      dispatch(SignInUser(formData));
      
    }
    resetForm()
  };

  // React to changes in authentication state
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <main className="px-5 md:px-10 mt-20 gap-10">
      <fieldset className="w-full md:w-1/2 m-auto">
        <div className="flex flex-col">
          <ArrowBtn path={"/"} />
          <legend className="text-2xl mb-5 font-bold drop-shadow text-primary-color">
            Login
          </legend>
        </div>

        <form action="" className="flex flex-col gap-5 w-full" onSubmit={handleFormSubmit}>
          {/* Display error messages */}
          {errors.length > 0 && (
            <ul className="p-2 bg-red-300 text-white rounded-md text-center font-bold">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}

          {/* Display authentication error */}
          {authError && (
            <p className="p-2 bg-red-300 text-white rounded-md text-center font-bold">
              {authError}
            </p>
          )}

          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
            value={formData.password}
          />
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
          >
            Login
          </button>
          <div className="text-gray-700">
            Don’t have an account?{" "}
            <small className="font-semibold">
              <NavLink to="/signup">Sign Up</NavLink>
            </small>
          </div>
        </form>
      </fieldset>
    </main>
  )
}

export default Login;
