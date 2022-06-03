import React from "react";

const TempCard = ({ data }) => {
  return (
    <div className="h-96 w-full bg-gray-500/50 rounded-lg text-white">
      <div className="flex items-center justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <span className="text-lg uppercase">{data.weather[0].description}</span>
      </div>
      <div className="flex flex-col gap-5 items-center p-5">
        <h1 className="text-3xl">
          The temperature in {data.name} is {data.main.temp}{" "}
          <sup className="text-xl">&#8451;</sup>
        </h1>
        <p className="text-xl mx-auto">
          Feels like - {data.main.feels_like}{" "}
          <sup className="">&#8451;</sup>
        </p>
      </div>
    </div>
  );
};

export default TempCard;
