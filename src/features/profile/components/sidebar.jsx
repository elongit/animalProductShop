import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import ArrowBtn from "../../../components/buttons/arrowBtn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth/authSlice";
import { useState } from "react";

export default function Sidebar({ activeSection, setActiveSection }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(true);
  const [uploaded , setIsUploaded] = useState(false)

  const handleLogout = () => {
    const check = confirm("Are you sure you want log out !?");
    if (check) {
      dispatch(logout()); // Clear token and update state
      navigate("/");
    }
  };

  const handleFileChange = (e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
    setIsUploaded(true)
  }
  

  return (
    <aside className="p-2 grid grid-cols-1 gap-5" aria-label="Sidebar">
      <ArrowBtn path={-1} />

      <div className="bg-slate-50 grid grid-cols-1 gap-5 p-2">
        <figure className="overflow-hidden">
          <img
            src={uploaded ? file : "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="}
            className="w-full h-full object-contain hover:scale-110 transition-all"
            alt=""
          />
        </figure>

        <form action="" >
          <label
            htmlFor="file"
            className="bg-primary-color hover:bg-secondary-color hover:cursor-pointer transition-all block text-center text-white p-3 rounded font-bold"
          >
            Upload your photo
          </label>
          <input type="file" name="" id="file" className="hidden" onChange={ handleFileChange}/>
        </form>
      </div>

      <nav className="flex flex-col gap-3 text-gray-700 font-serif bg-slate-50 p-2 cursor-pointer">
        <ul>
          <NavItem
            label="Profile Information"
            icon={faUser}
            isActive={activeSection === "profile"}
            onClick={() => setActiveSection("profile")}
          />
          <NavItem
            label="Billing Information"
            icon={faCreditCard}
            isActive={activeSection === "billing"}
            onClick={() => setActiveSection("billing")}
          />

          <li className="py-2 px-4 hover:bg-white hover:mt-2 transition-all">
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} /> Log Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ label, icon, isActive, onClick }) {
  return (
    <li
      className={`py-2 px-4 rounded ${
        isActive ? "text-primary-color font-bold bg-white" : ""
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} /> {label}
    </li>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};
