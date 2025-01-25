import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// components
import { selectAllProducts } from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/cartSlice";
import ProductCard from "../../features/product/components/productCard";
import SearchInput from "../../components/searchInput";
import ProductFilter from "../../features/product/components/productFilter";


// actions
import { useState  , useMemo, useCallback } from "react";
import { useDebounce } from "use-debounce";



function ProductList() {
  const [load, setload] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // Debounce for search input


  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

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
    
    //console.log("added to cart");
    
  };
  const filtredProducts = useMemo(() => {
    //console.log("Filtered and sorted products recalculated"); // Log when useMemo recalculates
    return products
      .filter((product) => {
        //console.log(`Filtering product: ${product.name}`);
        return product.name
          .toLocaleLowerCase()
          .includes(debouncedSearchTerm.toLocaleLowerCase().trim());
      })
      .sort((a, b) => {
       // console.log(`Sorting products: ${a.name} vs ${b.name}`);
        switch (selectedSort) {
          case "high-price":
            return b.price - a.price;
          case "low-price":
            return a.price - b.price;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [products, debouncedSearchTerm, selectedSort]);
  

  const handleSelectChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  },[]);
  const showloadProducts = () => {
    setload((prevload) => prevload + products.length);
  };
  
  const OptionFilters = [
    {
      id:1 ,
      name : 'High Price',
      value : 'high-price',
    },
    {
      id:2 ,
      name : 'Low Price',
      value : 'low-price',
    },
    {
      id:3 ,
      name : 'Newest Arrivals',
      value : 'new-arrivals',
    },
    {
      id:4 ,
      name : 'Best Sellers',
      value : 'best-sellers',
    },
  ]
  

  return (
    <main className="m-2 md:m-5 pt-10 pb-10 ">
      <div className="flex flex-col items-end gap-2 md:flex-row md:items-center mx-auto px-4">
        {/* Search Section */}
        <SearchInput value={searchTerm} onChange={handleSearch} />
        {/* Sort By Dropdown */}
      
        <section className="">
        <ProductFilter onSortChange={handleSelectChange} sortOptions={OptionFilters}/>

        </section>
      </div>

      {/* Product Cards Section */}
      {filtredProducts.length !== 0 ? (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5 mt-10 place-items-center">
        {filtredProducts.slice(0, load).map((data, index) => (
          <ProductCard
            key={data.id || index}
            item={data}
            onAddToCart={() => handleItemAdded(data)}
          />
        ))}
      </section>
      ):(
        <div>
        <h1 className="font-bold text-gray-700 text-lg text-center mt-20">
         <span className="text-primary-color">{searchTerm}</span> not found 🐶
        </h1>
        
      </div>
      )}
      {filtredProducts.length > load && (
        <button
          className="block m-auto mt-10 font-bold bg-primary-color hover:bg-secondary-color text-white p-3 rounded px-8"
          onClick={showloadProducts}
        >
          Load More
        </button>
      )}
    </main>
  );
}

export default ProductList;
