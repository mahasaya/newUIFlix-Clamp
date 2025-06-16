// src/components/Core/Home/ShopByCategory.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = [
    { 
      name: "kitchen appliances", 
      path: "/kitchen-appliances",
      img: "/public/shopbycategpry/kitchen.jpeg",
      color: "from-orange-400 to-orange-600"
    },
    { 
      name: "small appliances", 
      path: "/small-appliances",
      img: "/public/shopbycategpry/others.jfif",
      color: "from-purple-400 to-purple-600"
    },
    { 
      name: "tv & entertainment", 
      path: "/tv-&-entertainment",
      img: "/public/shopbycategpry/tv.jfif",
      color: "from-blue-400 to-blue-600"
    },
    { 
      name: "computing", 
      path: "/computing",
      img: "/public/shopbycategpry/laptop.jfif",
      color: "from-indigo-400 to-indigo-600"
    },
    { 
      name: "phones", 
      path: "/phones",
      img: "/public/shopbycategpry/phone.jfif",
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  return (
    <div className="w-full py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Discover our carefully curated collections for every need and lifestyle
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={category.path}
              key={index}
              className={`group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in transform hover:-translate-y-1 ${
                hoveredCategory === index ? 'ring-2 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Image with gradient overlay */}
              <div className="relative pb-[100%]">
                <img 
                  src={category.img} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 mix-blend-multiply`}></div>
                
                {/* Floating circle decoration */}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              
              {/* Category content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold capitalize mb-1 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6">
                  {category.name}
                </h3>
                
                {/* Animated shop button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-150 transform group-hover:translate-y-0 translate-y-6">
                  <button className="mt-3 w-full py-2 px-3 bg-white text-gray-900 font-medium rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center text-sm">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-white border-l-transparent"></div>
            </Link>
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-12 text-center">
          <Link 
            to="/categories" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] text-sm"
          >
            View All Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;