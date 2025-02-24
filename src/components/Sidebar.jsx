import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-[250px] h-screen p-5 bg-white border-r border-gray-200 shadow-sm">
      {/* Sidebar Title */}
      <h2 className="text-xl font-bold mb-5 text-gray-800">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Category</h3>
        <div className="space-y-2">
          {['All', 'Sneakers', 'Flats', 'Sandals', 'Heels'].map((category) => (
            <label 
              key={category} 
              className="flex items-center space-x-3 cursor-pointer text-gray-600 transition hover:text-indigo-600"
            >
              <input
                type="radio"
                name="category"
                value={category.toLowerCase()}
                className="hidden peer"
              />
              <div className="h-5 w-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:border-indigo-600 peer-checked:ring-2 peer-checked:ring-indigo-400 transition-all">
                <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
              </div>
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Price</h3>
        <div className="space-y-2">
          {['0-50', '50-100', '100-200', '200+'].map((price) => (
            <label 
              key={price} 
              className="flex items-center space-x-3 cursor-pointer text-gray-600 transition hover:text-indigo-600"
            >
              <input
                type="radio"
                name="price"
                value={price}
                className="hidden peer"
              />
              <div className="h-5 w-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:border-indigo-600 peer-checked:ring-2 peer-checked:ring-indigo-400 transition-all">
                <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
              </div>
              <span>${price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Color</h3>
        <div className="space-y-2">
          {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
            <label 
              key={color} 
              className="flex items-center space-x-3 cursor-pointer text-gray-600 transition hover:text-indigo-600"
            >
              <input
                type="radio"
                name="color"
                value={color.toLowerCase()}
                className="hidden peer"
              />
              <div className="h-5 w-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:border-indigo-600 peer-checked:ring-2 peer-checked:ring-indigo-400 transition-all">
                <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
              </div>
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
