import "./ProfileNav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);
const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <div className="profile-nav-item-container">
        <div className="profile-nav-item">Overview</div>
        <div className="profile-nav-item active-nav">Projects</div>
        <div className="profile-nav-item">Campaigns</div>
        <div className="profile-nav-item">Documents</div>
        <div className="profile-nav-item">Followers</div>
        <div className="profile-nav-item">Activity</div>
      </div>
      <FontAwesomeIcon icon={faAngleDown} className="fa-angle-down" />
    </div>
  );
};

export default ProfileNav;
