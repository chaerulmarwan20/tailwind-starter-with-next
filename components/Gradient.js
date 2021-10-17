import React from "react";

const Gradient = () => {
  return (
    <div className="bg-gray-200 antialiased min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-3/4">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <div className="bg-gradient-to-br from-blue-700 to-blue-500 px-4 h-12 flex items-center justify-center text-white mb-5">
            Login
          </div>
          <div className="text-8xl bg-gradient-to-r from-red-500 to-yellow-500 inline text-transparent bg-clip-text font-black">
            CHAERUL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
