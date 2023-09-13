import { ReactComponent as FilterLogo } from "../../images/ic_filter.svg";
import "./ProductFilter.css";
import { ReactComponent as AddIcon } from "../../images/ic_add.svg";
import { useEffect, useState } from "react";

export default function ProductFilter() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className="search-other-filter">
      {!matches && <AddIcon className="add-icon" />}
      <FilterLogo />
      <span>Products Filter</span>
    </div>
  );
}
