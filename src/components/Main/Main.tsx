import "./Main.css";

import { Dispatch, SetStateAction } from "react";

import Head from "./Head/Head";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";

const Main: React.FC<{
  toggleNav: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleNav }) => {
  const closeNav = () => {
    toggleNav((current) => !current);
  };
  return (
    <main onClick={closeNav}>
      <div className="main-container">
        <Head />
        <Profile />
        <Project />
      </div>
    </main>
  );
};

export default Main;
