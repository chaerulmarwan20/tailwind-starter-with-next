import React, { useEffect } from "react";

const Mode = () => {
  const selectTheme = (theme) => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
    theme === "dark"
      ? html.classList.remove("light")
      : html.classList.remove("dark");
  };

  useEffect(() => {
    // document.querySelector("html").classList.add(localStorage.getItem("theme"));

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.removeItem("theme");
  }, []);

  return (
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-800 dark:text-white">
            Switcher
          </div>
          <div>
            <button
              type="button"
              onClick={() => selectTheme("light")}
              className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"
            ></button>
            <button
              type="button"
              onClick={() => selectTheme("dark")}
              className="focus:outline-none w-4 h-4 bg-black rounded-full"
            ></button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="leading-relaxed text-gray-500 dark:text-gray-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolorem beatae debitis odio veritatis quibusdam enim labore sit,
              nemo nam neque magnam excepturi sunt nihil consequuntur hic quo
              numquam harum.
            </div>
          </div>
          <div className="px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 dark:text-gray-200">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
