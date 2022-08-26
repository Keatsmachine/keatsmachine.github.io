import React from "react";
import '../styles/App.css';

function Body(props) {
  const data = props.data ? props.data : [];
  return (
    <div style={{
      margin: "10px"
    }}>
        {data.map((pair, index) => {
          return (
            <div key={index}>
              {pair.title ? <h2>{pair.title}</h2> : null}
              {pair.body ? <p>{pair.body}</p> : null}
            </div>
          );
        })}
    </div>
  );
}

export default Body;