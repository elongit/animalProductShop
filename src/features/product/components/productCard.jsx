import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CartButton from "../../cart/components/cartbutton";
import React from "react";

const ProductCard = ({ item, onAddToCart }) => {
  const discountedPrice = item.price + 100;
  //console.log('product card rednred');
  

  return (
    <article className="hover:shadow cursor-pointer w-full md:w-64">
      <figure className="h-60 p-2 w-full flex justify-center">
        <NavLink to={`/product/${item.id}`}>
          <img
            src={item.coverImg}
            alt={`Image of ${item.name} - ${item.category || "product"}`}
            className="h-60 object-cover rounded-md w-full hover:scale-105 transition-all"
            loading="lazy"
          />
        </NavLink>
      </figure>

      <div className="flex flex-col p-2">
        <div>
          <h4 className="text-gray-600 text-sm md:text-[17px] mt-2 md:mt-5 font-medium">
            <NavLink to={`/product/${item.id}`} className="hover:underline">
              {item.name}
            </NavLink>
          </h4>
          <h4 className="text-gray-600 text-lg font-medium">
            ${item.price}{" "}
            <sub className="line-through text-gray-400 ml-2">${discountedPrice}</sub>
          </h4>
        </div>

        {/* Passing only the current item to the CartButton */}
        <CartButton label="Add to cart" onAddToCart={onAddToCart} item={item} />
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired, // Required function prop
};

export default React.memo(ProductCard);
