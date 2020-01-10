import React from "react";

import "./style.css";

import Icon from "../../elements/Icon";
import Text from "../../elements/Text";

const Card = ({ weather }) => {
  console.log(weather);
  return (
    <div className="cardRoot">
      <Icon icon={weather.icon} />
      <Text temp={weather.temp} header />
      <Text main={weather.main} />
      <Text desc={weather.description} />
    </div>
  );
};

export default Card;
