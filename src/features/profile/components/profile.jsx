import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatedUser } from "../../auth/authSlice";

export default function ProfileForm() {
  const isAuth = useSelector((state) => state.auth);
  const users = isAuth.users;
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const user = users.find((user) => user.id === id);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    confirmedEmail: '',
    password: '',
    confirmedPassword: '',
  });

  useEffect(() => {
    if (user) {
      // If user is found, set the formData
      setFormData({
        id : user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        confirmedEmail: user.email,
        password: user.password,
        confirmedPassword: user.password,
      });
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormValidation = () => {
    let validationErrors = [];

    if (
      !formData.name.toLocaleLowerCase() ||
      !formData.username.toLocaleLowerCase() ||
      !formData.email ||
      !formData.confirmedEmail ||
      !formData.password ||
      !formData.confirmedPassword
    ) {
      validationErrors.push("All fields are required");
    }

    if (formData.password.length < 8) {
      validationErrors.push("Password should contain at least 8 characters");
    }

    if (formData.password !== formData.confirmedPassword) {
      validationErrors.push("Passwords do not match");
    }

    if (formData.email !== formData.confirmedEmail) {
      validationErrors.push("Emails do not match");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = handleFormValidation();
    if (isValid) {
   
      setErrors([]);
      dispatch(UpdatedUser(formData))

      // Send update request to the backend (e.g., API call)
      // Example: updateUserProfile(formData);

      // After successful submission, you can redirect or show success message
      // navigate("/profile"); // For example, navigate to profile page
    }
  };

  return (
    <fieldset className="w-full p-0 md:p-5">
      <legend className="text-xl md:text-2xl mb-5 font-bold text-primary-color">
        Edit Your Profile
      </legend>

      <form
        action=""
        className="flex flex-col md:grid md:grid-cols-2 gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="col-span-2">
          {errors.length > 0 && (
            <ul className="list-none p-1.5 rounded bg-red-300 text-white text-center font-bold">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          name="name"
          placeholder="Enter your Full Name"
          value={formData.name}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmedPassword"
          placeholder="Confirm your password"
          value={formData.confirmedPassword}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color "
          onChange={handleChange}
        />
        <input
          type="email"
          name="confirmedEmail"
          placeholder="Confirm your email"
          value={formData.confirmedEmail}
          className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          onChange={handleChange}
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
