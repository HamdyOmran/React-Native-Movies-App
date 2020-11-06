import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const searchApi = async (searchTerm, page, newSearch) => {
    try {
      const response = await axios.get(
        `http://api.themoviedb.org/3/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=<${searchTerm}>&page=${page}`
      );
      if (newSearch) {
        setResults(response.data.results);
        setCurrentPage(2);
      } else {
        setResults(results.concat(response.data.results));
      }
    } catch (e) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("the", 1, true);
  }, []);

  return [searchApi, results, currentPage, setCurrentPage];
};
