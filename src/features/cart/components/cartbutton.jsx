import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function CartButton({ item, label = "", onAddToCart }) {
  

  return (
    <button
      onClick={() => onAddToCart(item)} // Only passes the current item
      className="bg-primary-color hover:bg-secondary-color font-semibold text-white p-2 rounded text-center mt-5 flex items-center justify-center space-x-2 cursor-pointer"
    >
      <span>{label}</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

CartButton.propTypes = {
  onAddToCart: PropTypes.func.isRequired, // Required function
  item: PropTypes.object.isRequired, // item prop passed from ProductCard
  label: PropTypes.string,
};

export default CartButton;
