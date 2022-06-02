import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  const URL = "http://localhost:5000/";
  useEffect(() => {
    axios.get(URL).then((res) => console.log(res));
  }, []);

  return (
    <section className="h-screen min-h-screen">
      <div className="flex justify-center items-center h-full">
        <form action={URL} method="post" className="flex gap-4 items-center">
          <div className="flex py-2 w-96 h-20">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700 rounded-l-lg">
              <i className="fa-solid fa-location-dot text-3xl text-purple-800"></i>
            </span>
            <input
              className="w-full border border-gray-400 p-2 focus:outline-none rounded-r-lg"
              type="text"
              name="location"
              placeholder="Enter you location here..."
            />
          </div>
          <button
            type="submit"
            className="text-white w-24 h-16 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
          >
            Go
          </button>
        </form>
        <div></div>
      </div>
    </section>
  );
};

export default App;
