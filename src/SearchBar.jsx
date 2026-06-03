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
    <div className="flex justify-center items-start">
      <form className="flex items-stretch" onSubmit={handleFormSubmit}>
        <input
          id="ip-address-input"
          className="bg-white p-6 w-160 text-gray-dark text-[1.5rem] leading-none cursor-text rounded-s-[10px] placeholder:text-gray-light max-mobile:p-8 max-phone:text-[2rem] max-mini:w-[calc(70vw-40px)]"
          value={input}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
        ></input>
        <button
          className="p-6 cursor-pointer rounded-e-[10px] bg-gray-dark transition-all duration-300 hover:brightness-150 max-mobile:p-8"
          type="submit"
          aria-label="sumbit the ip address"
        >
          <FaAngleRight className="fill-white text-[1.4rem] max-phone:text-[1.8rem]" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
