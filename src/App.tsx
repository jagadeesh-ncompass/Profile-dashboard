import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

library.add(faBars);
function App() {
  const [openNav, setopenNav] = useState(true);
  const navHandler = () => {
    setopenNav((current) => !current);
  };
  return (
    <div className="App">
      <FontAwesomeIcon
        icon={faBars}
        className="fa-solid fa-bars fa-lg"
        onClick={navHandler}
      />
      <Nav openNav={openNav} />
      <Main toggleNav={setopenNav} />
    </div>
  );
}

export default App;
