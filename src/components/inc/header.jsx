import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTimes, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { selectCartItems } from "../../features/cart/cartSlice";
import { useSelector , useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const items = useSelector(selectCartItems);
  const itemsOnCart = items.reduce((total, item) => total + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false); 
  const { pathname } = useLocation();
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);  // Toggle mobile menu
  };
  const handleLogout = () => {
    dispatch(logout()); // Clear token and update state
    navigate('/')

  };


  return (
    <header className="shadow p-3 relative md:text-lg flex justify-between items-center">
      <h1 className="text-primary-color font-bold text-4xl flex">
        <NavLink to="/" aria-label="Home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8334/8334173.png"
            alt="Company Logo"
            className="w-14"
          />
        </NavLink>
      </h1>

      {/* Main Navigation */}
      <nav
        className={`text-gray-700 absolute top-full ${isOpen ? 'left-0' : '-left-full'} transition-all lg:static w-full lg:w-fit py-5 lg:py-0 shadow-md z-50 lg:shadow-none bg-white`}
        aria-expanded={isOpen}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-5 font-semibold">
          <li>
            <NavLink to="/" aria-label="Home" className={({ isActive }) => (isActive ? 'text-primary-color' : '')}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" aria-label="Products" className={({ isActive }) => (isActive ? 'text-primary-color' : '')}>
              Product
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" aria-label="Contact Us" className={({ isActive }) => (isActive ? 'text-primary-color' : '')}>
              Contact
            </NavLink>
          </li>

          {isAuthenticated ? (
            <div className="relative">
              {/* Profile Button */}
              <button
                type="button"
                aria-label="Profile"
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleIsOpen}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </button>

              {/* Profile Dropdown Menu */}
              {isOpen && (
                <ul className="absolute text-sm w-36 text-left bg-white shadow-md rounded mt-2 py-2 z-50">
                  <li>
                    <NavLink
                      to="/profile"
                      aria-label="View Profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      View Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/orderHistory"
                      aria-label="Order History"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Orders history
                    </NavLink>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                      onClick={ handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <li>
              <NavLink to="/login" aria-label="Login" className={({ isActive }) => (isActive ? 'text-primary-color' : '')}>
                Login
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/cart" aria-label="Shopping Cart" className={({ isActive }) => (isActive ? 'text-primary-color' : '')}>
              <FontAwesomeIcon icon={faCartShopping} size="2x" className="cursor-pointer" />
            </NavLink>
            <sub className="text-red-500">{itemsOnCart}</sub>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <label
        htmlFor="menu-toggle"
        className="lg:hidden"
        onClick={handleIsOpen}
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" className="text-primary-color cursor-pointer" />
      </label>
    </header>
  );
}

export default Header;
