import "./Profile.css";

import {
  faArrowDown,
  faArrowUp,
  faCertificate,
  faCheck,
  faCircleUser,
  faEllipsis,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileNav from "./ProfileNav";
import { library } from "@fortawesome/fontawesome-svg-core";
import profilePic from "../../../images/profile-pic2.png";

library.add(
  faCertificate,
  faCheck,
  faCircleUser,
  faLocationDot,
  faEnvelope,
  faArrowDown,
  faArrowUp,
  faEllipsis
);
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile">
        <img src={profilePic} alt="profile" className="profile-pic" />
        <div className="profile-content">
          <div className="profile-left">
            <p>
              Max Smith
              <span className="fa-stack">
                <FontAwesomeIcon
                  icon={faCertificate}
                  className={"fa-stack-1x fa-1x"}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"fa-stack-1x fa-2xs"}
                />
              </span>
            </p>
            <p className="user-info">
              <span>
                <FontAwesomeIcon icon={faCircleUser} /> Developer
              </span>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                SF, Bay Area
              </span>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
                max@kt.com
              </span>
            </p>
            <div className="project-info">
              <div className="earnings mini-card">
                <p>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={"fa-2xs green"}
                  />{" "}
                  $4,500
                </p>
                <p className="caption">Earnings</p>
              </div>
              <div className="projects mini-card">
                <p>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={"fa-2xs red"}
                  />{" "}
                  80
                </p>
                <p className="caption">Projects</p>
              </div>
              <div className="success-rate mini-card">
                <p>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={"fa-2xs green"}
                  />{" "}
                  %60
                </p>
                <p className="caption">success Rate</p>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="right-btn-container">
              <button className="sec-btn">Follow</button>
              <button className="prim-btn">Hire Me</button>
              <button className="sec-btn flex-05">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
            <div className="profile-completion">
              <div className="profile-completion-head">
                <span className="caption">Profile Completion</span>
                <span className="caption white">50%</span>
              </div>
              <div className="completion-bar green-50"></div>
            </div>
          </div>
        </div>
      </div>
      <ProfileNav />
    </div>
  );
};

export default Profile;
