import "./Search.css";
import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../images/ic_search.svg";
import { ReactComponent as SearchIconSm } from "../../images/ic_search (1).svg";

export default function Search({ filter }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-icon-lg" />
        <input type="search" />
        {filter}
      </div>
      <button>
        {matches ? "Search" : <SearchIconSm className="search-icon-sm" />}
      </button>
    </div>
  );
}
