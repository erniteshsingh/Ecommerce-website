import React from "react";

const CreateProducts = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Product
        </h2>

        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Furniture</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Image
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg p-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
