import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faHome,
  faSignOut,
  faGear,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

function AdminSideBar({ activeSection, setActiveSection }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = ()=>{
    dispatch(logout()); // Clear token and update state
    navigate("/");
  }
  return (
    <aside
      className="grid grid-cols-1 gap-0 h-[100vh] sticky top-5 "
      aria-label="Sidebar"
    >
      <nav className="flex flex-col gap-3 text-gray-700 font-serif bg-slate-50 p-2 cursor-pointer">
        {/* Logo Section */}
        <figure className="text-primary-color font-bold text-4xl py-2 px-4 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8334/8334173.png"
            alt="Company Logo"
            className="w-14 h-14"
          />
        </figure>

        {/* Navigation Items */}
        <ul>
          <NavItem
            label="Dashboard"
            icon={faHome}
            isActive={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
          />
          <NavItem
            label="Customer Management"
            icon={faUser}
            isActive={activeSection === "customerManagement"}
            onClick={() => setActiveSection("customerManagement")}
          />

          <NavItem
            label="Product Management"
            icon={faPaw}
            isActive={activeSection === "animalManagement"}
            onClick={() => setActiveSection("animalManagement")}
          />
          <NavItem
            label="Settings"
            icon={faGear}
            isActive={activeSection === "settings"}
            onClick={() => setActiveSection("settings")}
          />

          {/* Sign Out */}
          <li className="py-2 px-4 hover:bg-white hover:mt-2 transition-all">
            <button onClick={logOut}>
              <FontAwesomeIcon icon={faSignOut} /> Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ label, icon, isActive = false, onClick = null }) {
  return (
    <li
      className={`py-2 px-4 rounded ${
        isActive ? "text-primary-color font-bold bg-white" : ""
      }`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      <FontAwesomeIcon icon={icon} /> {label}
    </li>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AdminSideBar;
