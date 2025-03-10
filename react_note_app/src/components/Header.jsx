import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";

const Header = ({ onSearch , toggleTheme, theme }) => {
  const [click, setClick] = useState("");

  const handleInputChange = (e) => {
    setClick(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(click);
    setClick("");
  };

  return (
    <div className="header my-0 d-flex flex-wrap">

      <div>
        <h1 className="text-primary ">Aung Pyae Son Oo Note Pack</h1>
      </div>

      <div className='d-flex'>
        <input
          type="text"
          value={click}
          onChange={handleInputChange}
          className='form-text text-muted rounded'
          placeholder='Search Your Note...'
          autoFocus
        />

        <FcSearch
          onClick={handleSearchClick}
          className="me-5 mt-2 ms-2"
          size={30}
          style={{ cursor: "pointer" }}
        />

        <button className="btn btn-primary" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

      </div>
    </div>
  );
};

export default Header;