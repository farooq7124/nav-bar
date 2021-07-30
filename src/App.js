import { useState } from "react";
import { getNavigationHeader } from "./API";
import "./App.css";
import { ChildMenu } from "./Components/ChildMenu";
import { NavBar } from "./Components/NavBar";

export const App = () => {
  const [childNodes, setChildNode] = useState(null);
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
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
            <NavBar
              data={getNavigationHeader()}
              setSelectedLink={(value) => setChildNode(value)}
            />
          </div>
        </div>
      </nav>
      {childNodes?.length ? <ChildMenu data={childNodes} /> : null}
    </div>
  );
};

export default App;
