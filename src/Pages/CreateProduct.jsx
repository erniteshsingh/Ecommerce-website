import React from "react";
import { useForm } from "react-hook-form";

const CreateProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    reset(); // clear form after submit
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Product
        </h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              {...register("name")}
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
              {...register("desc")}
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
              {...register("price")}
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Image URL
            </label>
            <input
              {...register("image")}
              type="text"
              placeholder="Enter image URL (e.g. https://...)"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
