import React from "react";

const SecondaryButton: React.FC<{
  placeholder: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <button className="sec-btn">
      {props.children ? (
        <>
          {props.children}
          {props.placeholder}
        </>
      ) : (
        props.placeholder
      )}
    </button>
  );
};

export default SecondaryButton;
