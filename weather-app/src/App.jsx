import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
const App = () => {
  const [searchData, setSearchData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "7b31983d2df2922a6ef62811372fa5bf";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setSearchData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center p-4 items-center">
        <input
          type="text"
          className="py-3 px-3 w-[500px] text-lg rounded-3xl border border-gray-200 text-gray-600
          placeholder-gray-400 focus:outline-none bg-white shadow-md "
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>

      <Weather weatherData={searchData} />
    </div>
  );
};

export default App;
