import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Footer = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <footer className="p-5 cursor-pointer border-t mt-20 bg-white bottom-0 border-black grid grid-cols-1 gap-5 w-full font-semibold text-center">
      {/* Main Navigation */}
      <nav
        className={`text-gray-700 top-full transition-all lg:static w-full lg:w-fit bg-white`}
      >
        <ul className="flex items-center gap-5 font-semibold">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              className={({ isActive }) => (isActive ? 'text-primary-color' : '')}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              aria-label="Products"
              className={({ isActive }) => (isActive ? 'text-primary-color' : '')}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              aria-label="Contact Us"
              className={({ isActive }) => (isActive ? 'text-primary-color' : '')}
            >
              Contact
            </NavLink>
          </li>
          {!isAuthenticated  && (
            <li>
              <NavLink
                to="/login"
                aria-label="Login"
                className={({ isActive }) => (isActive ? 'text-primary-color' : '')}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      {/* Footer Bottom */}
      <div className="border-t">
        <p className="font-semibold my-5 text-gray-800">
          &copy; 2024 Pets All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
