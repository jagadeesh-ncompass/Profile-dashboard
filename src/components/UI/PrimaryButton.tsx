import "./UI.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PrimaryButton: React.FC<{
  placeholder: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <button className="prim-btn">
      {props.children ? (
        props.placeholder
      ) : (
        <>
          {props.children}
          {props.placeholder}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
