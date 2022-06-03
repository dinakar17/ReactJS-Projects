import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import TempCard from "./components/TempCard";
import BackgroundImg from "./images/pexels-lisa-fotios-1107717.jpg";

var sectionStyle = {
  backgroundImage: `url(${BackgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const App = () => {
  const [data, setData] = useState("");
  const [loc, setLoc] = useState("");
  // const history = useNavigate();
  const URL = "https://get-current-weather-data.herokuapp.com/";

  let axiosConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(loc);
    axios
      .post(URL, qs.stringify({ location: loc }), axiosConfig)
      .then(function (response) {
        if (response.data !== 404) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        // console.log(error);
        alert("Enter a valid location name");
      });
  };

  return (
    <section className="h-screen min-h-screen" style={sectionStyle}>
      <div className="flex flex-col gap-10 justify-center items-center h-full w-[90%] lg:w-[50%] mx-auto">
        <form
          className="flex gap-4 items-center w-full"
          id="my-form"
          onSubmit={handleSubmit}
        >
          <div className="flex py-2 w-full h-20 grow ">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700 rounded-l-lg bg-white">
              <i className="fa-solid fa-location-dot text-3xl text-purple-800"></i>
            </span>
            <input
              className="w-full border border-gray-400 p-2 focus:outline-none rounded-r-lg lg:text-2xl"
              type="text"
              name="location"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              placeholder="Enter you location here..."
            />
          </div>
          <button
            type="submit"
            className="basis-14 lg:basis-40 text-white w-full h-16 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
          >
            Go
          </button>
        </form>
        <div className="w-full">{data && <TempCard data={data} />}</div>
      </div>
    </section>
  );
};

export default App;
