import React, { useState } from 'react';
import API_URL from "../../config";


const SearchBar = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/products?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <div className="form relative flex justify-center bg-white antialiased dark:bg-gray-900">
      <form className="form relative" onSubmit={handleSubmit}>
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input rounded-full px-8 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md text-slate-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          required=""
          type="text"
        />
        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;