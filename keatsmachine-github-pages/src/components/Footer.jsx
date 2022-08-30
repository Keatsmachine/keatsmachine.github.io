import React from "react";
import '../styles/App.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <p
        style={{
          margin: "0px",
          paddingBottom: "20px",
        }}
      >
        Copyright {year}
      </p>
    </div>
  );
}

export default Footer;