import React from "react";

function PageContainer (props) {
    return (
      <div
        style={{
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "auto",
            backgroundColor: "white",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 0px 10px 2px grey"
          }}
        >
          {props.children}
        </div>
      </div>
    );
}

export default PageContainer;