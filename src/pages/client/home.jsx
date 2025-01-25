import HeroSectionImg from "../../assets/heroSectionIm.png";
import Button from "../../components/buttons/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../features/product/components/productCard";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/productSlice";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

// BrandLogo Component
const BrandLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-28 object-contain h-28 cursor-pointer"
  />
);

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function Home() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch()
  const handleItemAdded = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        coverImg: product.coverImg,
        price: product.price,
        category: product.category,
        quantity: 1,
      })
    );
  }

  return (
    <main className="p-2 grid grid-cols-1 gap-5 md:p-5 pb-5">
      {/* Hero Section */}
      <section className="my-5 md:my-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="h-full p-2 rounded flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-color drop-shadow">
            Premium Animal Products
          </h1>
          <p className="text-[17px] md:text-xl my-4 md:my-7 lg:my-4 text-black/50">
            Explore high-quality products for your pets food, toys, accessories,
            and more, delivered right to your door.
          </p>
          <div className="w-fit">
            <Button label="Explore More" path="/menu" />
          </div>
        </div>

        <figure className="order-first lg:order-last overflow-hidden cursor-zoom-in">
          <img
            src={HeroSectionImg}
            alt="A collection of premium pet products including food, toys, and accessories."
            className="w-full h-full object-cover rounded hover:scale-110 transition-all"
          />
        </figure>
      </section>

      {/* Featured Products Section */}
      <section>
        <h1 className="text-2xl mb-5 md:text-3xl font-bold text-primary-color drop-shadow">
          Featured Products
        </h1>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5">
          {products.slice(0, 10).map((item, index) => (
            <ProductCard key={index} item={item} onAddToCart={()=>handleItemAdded(item)} />
          ))}
        </section>

        <div className="p-2 font-bold text-primary-color text-lg flex items-center gap-1">
          <NavLink to="/menu">Explore more</NavLink>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section>
        <h1 className="text-3xl text-center text-primary-color drop-shadow font-semibold font-Inter">
          Our Brands
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6  place-items-center w-full md:w-2/3 m-auto">
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/LogoStefanplast2016_pos_200x.png?v=1642774661"
            alt="Stefanplast logo"
          />
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/2_1_58283427-9a72-46e8-bc35-d8d1508962fb_200x.jpg?v=1634768990"
            alt="Brand 2"
          />
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/logo_RoyalCanin_1000x700_2ae0f545-4804-4b88-844e-448b1dd86058_200x.jpg?v=1634769022"
            alt="Royal Canin logo"
          />
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/FlamingoPetProducts_250x150px_200x.png?v=1666381694"
            alt="Flamingo Pet Products logo"
          />
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/logo-brit_200x.png?v=1708261700"
            alt="Brit logo"
          />
          <BrandLogo
            src="https://petsplans.com/cdn/shop/files/17438012_205195456631559_3108134701013925888_a_1_200x.jpg?v=1637882980"
            alt="Brand 6"
          />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="p-5 rounded-md">
        <fieldset className="w-full md:w-1/2 m-auto text-sm md:text-lg">
          <legend className="text-xl md:text-3xl text-primary-color drop-shadow font-semibold font-Inter">
            Let`s keep in touch
          </legend>
          <p className="my-2 text-sm font-semibold text-gray-600">
            Subscribe to our newsletter to receive the latest products and gifts
          </p>
          <form
            className="flex flex-col md:flex-row gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              required
            />
            <button
              type="submit"
              className="text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
            >
              <span className="flex items-center gap-3 justify-center">
                Subscribe
                <FontAwesomeIcon icon={faBell} className="text-yellow-500" />
              </span>
            </button>
          </form>
        </fieldset>
      </section>
    </main>
  );
}

export default Home;
