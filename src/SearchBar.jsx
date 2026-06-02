import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleFormSubmit = function (e) {
    e.preventDefault();
    onSubmit(input);
  };

  const handleChange = function (e) {
    // remove the characters which are forbidden, ^0-9:. means NOT number 0 to 9, '.', and ':'
    // g - global, to make sure it checks the whole string
    // i - insensitive, to make sure it doesn't bother about the case of the string
    setInput(e.target.value.replace(/[^0-9:.]/gi, ""));
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
