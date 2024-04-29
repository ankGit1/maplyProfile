import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterSet } from "../../redux/UserSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    let localUsers = JSON.parse(localStorage.getItem("users"));
    dispatch(filterSet(localUsers));
    setTempData(localUsers);
    console.log(localUsers);
  }, []);

  const searchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const catChange = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    let cat = selectedCategory;
    let search = searchTerm;
    let filter;
    e.preventDefault();
    if (cat === "all") {
      filter = tempData;
    } else {
      filter = tempData.filter(
        (user) => user[cat].toLowerCase() === search.toLowerCase()
      );
    }
    dispatch(filterSet(filter));
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar my-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchChange}
        className="search-input"
      />
      <select
        value={selectedCategory}
        onChange={catChange}
        className="category-select"
      >
        <option value="all">All</option>
        <option value="location">Location</option>
        <option value="interest">Interest</option>
        <option value="name">First Name</option>
        <option value="lname">Last Name</option>
      </select>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
