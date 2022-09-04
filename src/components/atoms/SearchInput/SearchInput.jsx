import { useState } from "react";
import { useStore } from "../../../store/store";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="search ui small icon input">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
        placeholder="Search Game"
      />
      <i className="search icon"></i>
    </div>
  );
};

export default SearchInput;
