import { NavLink , useNavigate } from "react-router-dom";
import ArrowBtn from "../../components/buttons/arrowBtn";
import { useDispatch} from "react-redux";
import { SignUpUser } from "../../features/auth/authSlice";
import { useState  } from "react";
import NotFound from "../404";
import { useSelector } from "react-redux";

function SignUp() {
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'oussama',
    username: 'oussama11',
    email: 'oussama11@gmail.com',
    password: '12345678',
    confirmePassword: '12345678',
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

    // Check if all fields are filled
    if (!formData.name.toLocaleLowerCase() || !formData.username.toLocaleLowerCase() || !formData.email || !formData.password || !formData.confirmePassword) {
      validationErrors.push('All fields are required');
    }

    // Check password length
    if (formData.password.length < 8) {
      validationErrors.push('Password should contain at least 8 characters');
    }

    // Check if passwords match
    if (formData.password !== formData.confirmePassword) {
      validationErrors.push('Passwords do not match');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }

    return true;
  };

  const resetForm = ()=>{
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmePassword: '',
    });
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = handleFormValidation();
    if (isValid) {
      dispatch(SignUpUser(formData));
      resetForm()
      navigate('/login')
    }
  };
  


  return (
   !isAuthenticated ? (
    <main className="px-5 md:px-10  relative pt-5 pb-10 top-20 ">
     
      <fieldset className="w-full md:w-1/2 m-auto ">
        <div className="flex flex-col">
          <ArrowBtn path={-1} />
          <legend className="text-2xl mb-5 font-bold drop-shadow text-primary-color">
            Sign Up
          </legend>
        </div>
        <form action="" className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
          {errors.length > 0 && (
            <ul className="list-none p-2 bg-red-300 text-white text-center font-bold">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
            value={formData.email}
          />
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
          <input
            type="password"
            name="confirmePassword"
            placeholder="Confirm your password"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            onChange={handleChange}
            value={formData.confirmePassword}
          />

          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
          >
            Sign up
          </button>
          <div className="text-gray-700">
            Already have an account?{' '}
            <small className="font-semibold ">
              <NavLink to="/login">Login</NavLink>
            </small>
          </div>
        </form>
      </fieldset>
    </main>
     ):(
      <NotFound/>
    )
  );
}

export default SignUp;
