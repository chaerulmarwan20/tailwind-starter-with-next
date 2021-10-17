import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Tailwind CSS";
  }, []);

  return (
    <div className="p-24 flex">
      <div className="bg-blue-600 w-24 h-24 rounded-lg mr-4"></div>
      <div className="bg-teal-600 w-24 h-24 rounded-lg mr-4"></div>
      <div className="bg-lime-600 w-24 h-24 rounded-lg mr-4"></div>
      <div className="bg-emerald-600 w-24 h-24 rounded-lg mr-4"></div>
      <div className="bg-red-600 w-24 h-24 rounded-lg mr-4"></div>
      <div className="bg-cyan-600 w-24 h-24 rounded-lg"></div>
    </div>
  );
};

export default Home;
