import React from "react";
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
ikim

const Navbar = ({placeholder,data}) => {
  return (
    <div>
    <div className="n-wrapper">
      <div>
        <div className="n-left">
          <div className="logo">
            <a  style ={{textDecoration:"none"}} href="/"> VisitNepal </a>
          </div>
          <div className="search">
            <div className="searchinputs">
              <input type="text" placeholder={placeholder} />
              <div className="searchIcon"> <SearchIcon /> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              {" "}
              <a style={{textDecoration:"none"}} href="/"> Gift an Experience </a>{" "}
            </li>
            <li>
              {" "}
              <a style={{textDecoration:"none"}} href="/"> NPR </a>
            </li>
            <li>
              {" "}
              <a style={{textDecoration:"none"}} href="/"> Login </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
