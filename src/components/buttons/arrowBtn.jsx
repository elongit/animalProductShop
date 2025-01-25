import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
const ArrowBtn = ({path})=>{

    return(
        <button className="text-xl mb-5 text-white bg-primary-color w-fit hover:bg-secondary-color rounded py-2 px-6">
        <NavLink to={path}>
            <FontAwesomeIcon icon={faArrowLeft}/>
        </NavLink>
   </button>
    )
}
ArrowBtn.propTypes = {
    path : PropTypes.node
}

export default ArrowBtn;