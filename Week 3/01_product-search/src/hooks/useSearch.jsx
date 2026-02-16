import { useState, useEffect } from "react";

const useSearch = (data, searchKey) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const results = data.filter((item) => {
      const value = item[searchKey];
      if (!value) return false;

      return value
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setFilteredData(results);
  }, [searchTerm, data, searchKey]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
};

export default useSearch;
