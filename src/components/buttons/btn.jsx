
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
function Button({label , path }) {
  return (
   <button className="text-sm md:text-xl text-white bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded py-3 px-8"
   
   
   >
        <NavLink to={path}>
            {label}
        </NavLink>
   </button>
  )
}

Button.propTypes = {

        label : PropTypes.string.isRequired,
        path : PropTypes.string.isRequired,
        func : PropTypes.func

}

export default Button