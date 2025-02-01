import { useState } from "react";

function EditProduct() {
  const [name, setName] = useState("GPS Pet Tracker");
  const [image, setImage] = useState("https://doglo.eu/wp-content/uploads/2020/06/doglo_e-pood-18-1-scaled.jpg");
  const [category, setCategory] = useState("Grooming & Health");
  const [description, setDescription] = useState("Never lose track of your pet again with our GPS pet tracker. Monitor your pet’s location in real-time through a mobile app.");
  const [price, setPrice] = useState("120.00");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !image || !category || !description || !price) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(Number(price))) {
      setError("Price must be a number.");
      return;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Edit Product</h2>

      {error && <div className="text-red-500 text-lg mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-700"
          >
            Product Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            placeholder="Enter price"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 py-2 text-white font-bold  rounded-md hover:bg-green-600"
        >
          Edit Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
