import "./Nav.css";

import {
  faAngleDown,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "./Pages/Page";
import data from "../../data.json";
import { library } from "@fortawesome/fontawesome-svg-core";

const Nav: React.FC<{ openNav: boolean }> = ({ openNav }) => {
  return (
    <nav className={openNav ? "" : "open-nav"}>
      <div className="dashboard-container">
        <div className="dashboard">
          <FontAwesomeIcon icon={faGripHorizontal} />
          <span>Dashboards</span>
        </div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="pages">
        <p>PAGES</p>
        {data.nav.pages.map((page) => (
          <Page key={page} page={page} subpages={data.nav.subpages} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
