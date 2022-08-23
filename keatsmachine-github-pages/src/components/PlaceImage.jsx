import React from "react";

function PlaceImage (props) {
    const height = props.height ? props.height : 200;
    const width = props.width ? props.width : 300;
    return (
      <img
        style={{
          height: null,
          flex: 1,
          width: "100%",
          maxWidth: "1000px",
        }}
        src={`http://placekitten.com/${width}/${height}`}
        alt={`placeholder ${width} by ${height}`}
      />
    );
}

export default PlaceImage;
