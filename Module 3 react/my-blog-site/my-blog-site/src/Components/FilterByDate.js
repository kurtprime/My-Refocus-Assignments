import React, { useState, useMemo } from "react";

function FilterByDate({ filterDate, setFilterDate, setActive, SetFiltered }) {
  const [search, setSearch] = useState("");

  return (
    <span className="filter-date">
      <div className="filter-date-2">
        <label htmlFor="inp-1" className="inp">
          <input
            type="month"
            id="inp-1"
            placeholder="&nbsp;"
            value={search}
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
          <span className="label"></span>
          <span className="focus-bg">Search Date</span>
        </label>
        <button
          className="search-date button-79"
          onClick={() => {
            setActive(true);
            setFilterDate(search);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          className="clear-date button-79"
          onClick={() => {
            setActive(false);
            setFilterDate("");
            setSearch("");
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </span>
  );
}

export default FilterByDate;
