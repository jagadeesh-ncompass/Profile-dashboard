import "./Page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

type propType = { page: string; subpages: string[] };

library.add(faAngleDown, faAddressCard);
const Page = ({ page, subpages }: propType) => {
  const [IsActive, setIsActive] = useState(true);
  const dropDownHandler = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="page">
      <div className="single-page-head" onClick={dropDownHandler}>
        <div>
          <FontAwesomeIcon icon={faAddressCard} />
          <span>{page}</span>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={IsActive ? "angle-down" : "angle-down active"}
        />
      </div>
      <div className={IsActive ? "subpages hide" : "subpages"}>
        {subpages.map((subpage) => (
          <li key={subpage} className="subpage">
            {subpage}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Page;
