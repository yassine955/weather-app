import React from "react";

const Temperature = ({ header, desc, main, temp }) => {
  let text = null;

  if (main) {
    text = main;
  } else if (desc) {
    text = desc;
  } else if (temp) {
    const math1 = temp - 32;
    const math2 = math1 * 5;
    const math3 = math2 / 9;
    text = Math.round(math3);
  }
  return <h3 style={{ fontSize: header ? "1.5rem" : "0.8rem" }}>{text}</h3>;
};

export default Temperature;
