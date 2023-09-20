import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date().getHours();
let greeting = "";
let textColor = "";

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good morning";
  textColor = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good afternoon";
  textColor = "green";
} else {
  greeting = "Good evening";
  textColor = "blue";
}

const headingStyle = {
  textAlign: "center",
  marginTop: "100px",
  color: textColor
};

ReactDOM.render(
  <div style={headingStyle}>
    <h1>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
