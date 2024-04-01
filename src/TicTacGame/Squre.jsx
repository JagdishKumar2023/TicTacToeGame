import React from "react";

const Squre = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",

        // backgroundColor: "black",
      }}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default Squre;
