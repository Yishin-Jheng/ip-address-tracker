import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleFormSubmit = function (e) {
    e.preventDefault();
    onSubmit(input);
  };

  const handleChange = function (e) {
    setInput(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
        ></input>
        <button type="submit" aria-label="sumbit the ip address">
          <FaAngleRight />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
