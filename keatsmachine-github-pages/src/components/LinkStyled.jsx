import React from "react";
import { Link } from "react-router-dom";

function LinkStyled (props) {
    return (
      <Link
        style={{
          color: "black",
          flex: "auto",
          padding: "5px",
        }}
        to={props.to}
      >
        {props.children}
      </Link>
    );
}

export default LinkStyled;
