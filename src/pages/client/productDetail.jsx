import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/buttons/btn";
import ProductCard from "../../features/product/components/productCard";
import {
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  selectCartItems,
} from "../../features/cart/cartSlice";
import { selectAllProducts } from "../../features/product/productSlice";

const ProductDetails = () => {
  const [personalization, setPersonalization] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  const items = useSelector(selectCartItems);
  const { id } = useParams();

  

  const product = products.find((p) => p.id === parseInt(id));
  const cartItem = items.find((item) => item.id === parseInt(id));

  const check = cartItem ? "Already in cart" : "Add to cart"
  console.log(check);
  
  

  const filteredData = useMemo(() => {
    if (!product) return [];
    return products.filter((f) => f.category === product.category && f.id !== product.id);
  }, [products, product]);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Handle adding a product to the cart
  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        coverImg: item.coverImg,
        price: item.price,
        category : item.category,
        quantity: 1,
      })
    );
  };

  const handlePersonalizationChange = (e) => {
    setPersonalization(e.target.value);
  };

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Go back to products</button>
      </div>
    );
  }

  return (
    <main className="p-5 py-10 cursor-pointer">
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 md:gap-10">
        <figure className="overflow-hidden">
          <img
            src={product.coverImg}
            alt={product.name}
            className="w-full h-96 object-contain hover:scale-110 transition-all"
          />
        </figure>
        <section className="flex flex-col gap-4 text-lg col-span-2">
          <h4 className="text-white text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full p-1 px-2 w-fit">
            {product.category}
          </h4>
          <h1 className="text-3xl font-bold text-primary-color">{product.name}</h1>
          <p className="text-gray-600 text-[17px]">{product.description}</p>
          <span className="text-primary-color font-bold">
            ${product.price.toFixed(2)}{" "}
            <sub className="line-through text-gray-600">
              ${(product.price + 100).toFixed(2)}
            </sub>
          </span>

          <div>
            <textarea
              value={personalization}
              onChange={handlePersonalizationChange}
              className="p-3 w-full md:w-2/3 bg-slate-100 focus:ring-4 rounded outline-none focus:ring-primary-color"
              placeholder="What would you like to personalize this with? (e.g., name, message)"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {cartItem ? (
              <>
                <div className="p-1 sm:w-full md:w-60 ring-2 ring-primary-color rounded-full flex justify-between items-center">
                  <button
                    className="rounded-full hover:bg-slate-100 py-1 px-3"
                    aria-label="Decrease quantity"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span>{cartItem?.quantity}</span>
                  <button
                    className="rounded-full hover:bg-slate-100 py-1 px-3"
                    aria-label="Increase quantity"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <Button label="Buy now!" path="/checkout" />
              </>
            ) : (
              <button
                className="bg-primary-color hover:bg-secondary-color font-semibold text-white p-2 rounded text-center flex items-center justify-center space-x-2 cursor-grab"
                onClick={() => handleAddToCart(product)}
                disabled={product.quantity <= 0 || cartItem}
                aria-label={`Add ${product.name} to cart`}
              >
                <span>{cartItem ? "Already in cart" : "Add to cart"}</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            )}
          </div>
        </section>
      </section>

      <section className="my-20">
        <h1 className="text-lg font-bold text-black/60">Similar products</h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5 mt-10 place-items-center">
          {filteredData.map((data, index) => (
            <ProductCard
              key={data.id || index}
              item={data}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default ProductDetails;
