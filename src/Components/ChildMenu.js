import React from "react";

export const ChildMenu = ({ data }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md child-nav">
      <div className="container">
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav flex-grow-1 justify-content-between">
            {data.map((item) => (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/#" style={{ color: "black" }}>
                  <i
                    className={`fa ${item.icon}`}
                    style={{ display: "block" }}
                  ></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
