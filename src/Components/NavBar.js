import React, { useState } from "react";
import SearchBox from "./SearchBox";

export const NavBar = ({ data, setSelectedLink }) => {
  const [search, setSearch] = useState(false);
  return !search ? (
    <ul className="nav navbar-nav flex-grow-1 justify-content-between">
      <li className="nav-item" role="presentation" key={"1logo"}>
        <a className="nav-link" href="/#">
          <i className="fa fa-apple apple-logo"></i>
        </a>
      </li>
      {data.map((item) => (
        <li className="nav-item" role="presentation" key={item.label}>
          <a
            className="nav-link"
            href="/#"
            onClick={() => setSelectedLink(item.child)}
          >
            {item.label}
          </a>
        </li>
      ))}
      <li className="nav-item" role="presentation" key={`Search`}>
        <a className="nav-link" href="/#" onClick={() => setSearch(true)}>
          <i className="fa fa-search"></i>
        </a>
      </li>
    </ul>
  ) : (
    <SearchBox open={true} setSearch={setSearch} />
  );
};
