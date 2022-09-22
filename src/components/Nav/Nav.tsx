import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "./Pages/Page";
import data from "../../data.json";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";

const Nav: React.FC<{ openNav: boolean }> = ({ openNav }) => {
  return (
    <nav className={openNav ? "" : "open-nav"}>
      <div className="dashboard-container">
        <div className="dashboard">
          <FontAwesomeIcon icon={faGripHorizontal} />
          <span>Dashboards</span>
        </div>
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
