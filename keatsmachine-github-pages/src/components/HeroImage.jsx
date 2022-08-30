import React from "react";

function HeroImage(props) {
  return (
    <img
      style={{
        height: null,
        flex: 1,
        width: "100%",
        maxWidth: "1000px",
      }}
      src={props.image}
      alt={props.imageAlt}
    />
  );
}

export default HeroImage;
