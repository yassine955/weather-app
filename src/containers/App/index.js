import React, { useEffect } from "react";

import "./style.css";

// Components
import Header from "../../components/Header";
import Card from "../../components/Card";
import Search from "../../components/Search";

import axios from "axios";

const App = () => {
  const [weather, setWeather] = React.useState({
    id: "",
    main: "",
    description: "",
    icon: "",
    temp: ""
  });
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Leiden&APPID=24e3ca6977c441f045d5262e8e563ac9"
      )
      .then(res => {
        setWeather({
          id: res.data.weather[0].id,
          main: res.data.weather[0].main,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temp: res.data.main["temp"]
        });
        console.log(res.data.main);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <div className="AppContainer">
        <Search />
        <Card weather={weather} />
      </div>
    </div>
  );
};

export default App;
