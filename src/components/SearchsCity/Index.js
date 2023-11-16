import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const API_KEY = "34480b98aa332da53123a0ac63a4ea9d";

      const BASE_URL = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&lang=tr&appid=${API_KEY}`;
      const UNITS = "metric";
      const LANG = "en";

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}?q=${searchTerm}&units=${UNITS}&lang=${LANG}&appid=${API_KEY}`
          );
          setSearchResults([response.data]);
          setError("");
        } catch (error) {
          setSearchResults([]);
          setError("City not found. Please enter a valid city name.");
        }
      };

      fetchData();
    } else {
      setSearchResults([]);
      setError("");
    }
  }, [searchTerm]);

  return (
    <>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search..."
          className="input__search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id}>
              <p>City: {result.name}</p>
              <p>Temperature: {result.main.temp}°C</p>
              {/* Add other relevant information */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBox;
