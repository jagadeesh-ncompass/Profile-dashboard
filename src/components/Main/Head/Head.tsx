import "./Head.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFilter);
const Head = () => {
  return (
    <div className="head">
      <div className="title-container">
        <p className="title">Projects</p>
        <p className="caption">Home - User Profile</p>
      </div>
      <div className="option-container">
        <SecondaryButton placeholder="Filter">
          <FontAwesomeIcon icon={faFilter} />
        </SecondaryButton>
        <PrimaryButton placeholder="Create" />
      </div>
    </div>
  );
};

export default Head;
