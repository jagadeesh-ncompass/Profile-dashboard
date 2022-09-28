import React from "react";

const SecondaryButton: React.FC<{
  placeholder: string;
  children?: React.ReactNode;
  right?: boolean;
}> = (props) => {
  return (
    <button className="sec-btn">
      {props.children ? (
        props.right ? (
          <>
            {props.placeholder}
            {props.children}
          </>
        ) : (
          <>
            {props.children}
            {props.placeholder}
          </>
        )
      ) : (
        props.placeholder
      )}
    </button>
  );
};

export default SecondaryButton;
