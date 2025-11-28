import { useContext } from "react";
import ProductContext from "../context/CreateContext";

export default function NewProduct() {
  const {
    Image,
    setImage,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    Category,
    setCategory,
    handleCreateProduct,
  } = useContext(ProductContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-md bg-base-100 rounded-2xl shadow-2xl border-4 border-blue-600 p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6">
          Create New Product
        </h1>

        <form
          className="flex flex-col gap-4 sm:gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateProduct();
          }}
        >
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text text-white text-base sm:text-lg font-semibold">
                Product Title
              </span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product name"
              className="input input-bordered w-full bg-gray-800 text-white border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text text-white text-base sm:text-lg font-semibold">
                Description
              </span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="textarea textarea-bordered w-full bg-gray-800 text-white border-blue-500 focus:ring-2 focus:ring-blue-400"
              rows="3"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text text-white text-base sm:text-lg font-semibold">
                Price ($)
              </span>
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="input input-bordered w-full bg-gray-800 text-white border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="label">
              <span className="label-text text-white text-base sm:text-lg font-semibold">
                Product Image
              </span>
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="file-input file-input-bordered w-full bg-gray-800 text-white border-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text text-white text-base sm:text-lg font-semibold">
                Category
              </span>
            </label>
            <select
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full bg-gray-800 text-white border-blue-500 focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home">Home</option>
              <option value="Accessories">Accessories</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white text-lg mt-2 sm:mt-4"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
