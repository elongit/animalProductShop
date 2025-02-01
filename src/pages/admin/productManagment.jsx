import { selectAllProducts } from "../../features/product/productSlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function ProductManagement() {
  const allProducts = useSelector(selectAllProducts);

  return (
    <div className="relative overflow-x-auto h-[90vh] p-4">
      <button className="bg-blue-400 text-white font-bold p-2 mb-5 rounded float-right">
        <NavLink to="/addProduct">New Product</NavLink>
      </button>

      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 clear-both">
        <thead className="text-xs text-black uppercase bg-gray-100">
          <tr>
            <th className="px-3 md:px-6 py-3">Product Image</th>
            <th className="px-3 md:px-6 py-3">Product Name</th>
            <th className="px-3 md:px-6 py-3">Category</th>
            <th className="px-3 md:px-6 py-3">Description</th>
            <th className="px-3 md:px-6 py-3">Price</th>
            <th className="px-3 md:px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => (
            <tr
              key={index}
              className="text-black border-b border-slate-200 text-sm md:text-lg"
            >
              <td className="px-6 py-4">
                <img
                  src={product.coverImg}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">
                {product.description.slice(0, 10)}...
              </td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <button className="bg-green-400 text-white font-bold p-1 rounded">
                    <NavLink to="/editProduct">Edit</NavLink>
                  </button>
                  <button className="bg-red-400 text-white font-bold p-1 rounded ml-2">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
