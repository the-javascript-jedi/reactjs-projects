import React, { useState } from "react";
import "./SearchFunction.css";

const SearchFunction = () => {
  // Filter Checkboxes Data
  const [filterList, setFilterList] = useState([
    {
      id: 11,
      name: "Part Time",
      value: "PART_TIME",
    },
    {
      id: 12,
      name: "Full Time",
      value: "FULL_TIME",
    },
    {
      id: 13,
      name: "Freelancer",
      value: "FREELANCER",
    },
  ]);
  // Data Collection to filter based on checkboxes selection
  const [SearchClassLists, setSearchClassLists] = useState([
    {
      id: 1,
      type: "PART_TIME",
      name: "Akash",
      location: "bangalore",
      experience: 1,
    },
    {
      id: 2,
      type: "PART_TIME",
      name: "feroz",
      location: "mumbai",
      experience: 3,
    },
    {
      id: 3,
      type: "FULL_TIME",
      name: "Farheen",
      location: "agra",
      experience: 5,
    },
    {
      id: 4,
      type: "FREELANCER",
      name: "Raju",
      location: "chennai",
      experience: 6,
    },
    {
      id: 5,
      type: "FULL_TIME",
      name: "Asif",
      location: "vegas",
      experience: 7,
    },
  ]);
  //checkboxes which are checked
  const [activeFilter, setActiveFilter] = useState([]);
  //filteredList contains the items to be displayed after filter
  let filteredList;
  if (activeFilter.length === 0 || activeFilter.length === filterList.length) {
    filteredList = SearchClassLists;
  } else {
    //filters the data collection based on the clicked checkbox filter value
    //returns the filtered data based on checkboxes clicked
    filteredList = SearchClassLists.filter((item) =>
      activeFilter.includes(item.type)
    );
  }
  const onFilterChange = (filter) => {
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        setActiveFilter([]);
      } else {
        setActiveFilter(filterList.map((filter) => filter.value));
      }
    } else {
      //check if checkbox is already checked
      if (activeFilter.includes(filter)) {
        //if checkbox is already checked remove it from activeFilter  array
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        setActiveFilter(newFilter);
      } else {
        setActiveFilter([...activeFilter, filter]);
      }
    }
  };
  return (
    <div>
      {" "}
      <div className="SearchFunctionContainer">
        {/* Checkboxes for Filtering */}
        <form>
          <label htmlFor="myInput">All</label>
          {/* Select All */}
          <input
            id="myInput"
            type="checkbox"
            onClick={() => onFilterChange("ALL")}
            checked={activeFilter.length === filterList.length}
          />
          {filterList.map((filter) => (
            <>
              <label htmlFor={filter.id}>{filter.name}</label>
              <input
                id={filter.id}
                type="checkbox"
                //checked - if active filter matches the filter value
                checked={activeFilter.includes(filter.value)}
                onClick={() => onFilterChange(filter.value)}
              />
            </>
          ))}
        </form>
        {/* Display Items */}
        <ul style={{ marginLeft: "70px" }}>
          {filteredList.map((item) => (
            <div key={item.id}>
              <li>
                {item.name} -- {item.type}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFunction;
