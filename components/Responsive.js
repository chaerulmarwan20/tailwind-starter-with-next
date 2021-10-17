import React from "react";

const Responsive = () => {
  return (
    <div className="p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-500 w-full h-32"></div>
        <div className="bg-gray-500 w-full h-32"></div>
        <div className="bg-gray-500 w-full h-32"></div>
        <div className="bg-gray-500 w-full h-32"></div>
        <div className="bg-gray-500 w-full h-32"></div>
        <div className="bg-gray-500 w-full h-32 sm:bg-gray-900"></div>
      </div>
    </div>
  );
};

export default Responsive;
