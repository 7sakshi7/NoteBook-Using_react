import React from "react";

const Separator = (props) => {
  return (
    <>
      <div className="separator">
        <div className={props.class1}></div>
        <div className={props.class2}></div>
      </div>
    </>
  );
};

export default Separator;
