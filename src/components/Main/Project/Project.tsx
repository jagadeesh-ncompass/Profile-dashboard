import "./Project.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../UI/PrimaryButton";
import ProjectCard from "./ProjectCard/ProjectCard";
import SecondaryButton from "../../UI/SecondaryButton";
import data from "../../../data2.json";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);
const Project = () => {
  return (
    <div className="project-container">
      <div className="head myproj-head">
        <div className="title-container">
          <span className="title">My Projects</span>
          <span className="caption">Active</span>
        </div>
        <div className="option-container">
          <SecondaryButton placeholder="Active">
            <FontAwesomeIcon icon={faAngleDown} />
          </SecondaryButton>
          <PrimaryButton placeholder="New Project" />
        </div>
      </div>
      <div className="project-card-container">
        {data.card.map((cards) => {
          return (
            <ProjectCard
              key={cards.name}
              icon={cards.icon}
              status={cards.status}
              name={cards.name}
              date={cards.date}
              budget={cards.budget}
              caption={cards.caption}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
