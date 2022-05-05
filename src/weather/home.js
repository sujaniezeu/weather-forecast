import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./style.css";

const Home = () => {
  const [capitalDetails, setCapitalDetails] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {
    setToggle(true);
    let url1 = `http://api.weatherstack.com/current?access_key=91c001d4fae7e137f596731c87c54e0e&query=${state.countryDetails[0]["capital"][0]}`;
    axios
      .get(url1)
      .then((res) => {
       
        setCapitalDetails(res.data);
      })
      .catch((eetWeatherInforr) => {
        alert("This Place does not exist", eetWeatherInforr);
      });
  };
  const { state } = useLocation();
  const counrtyValues = state.countryDetails[0];
  React.useEffect(() => {}, []);

  return (
    <>
      <div className="Country-details">
        <h3>Click on the Capital to fetch Weather Report </h3>
        <div>country:
        <Button color="primary"
            variant="contained" onClick={handleSubmit} >
         {state.countryDetails[0]["capital"][0]}
        </Button></div>
        <div >population: {state.countryDetails[0]["population"]}</div>
        <div>latitiude: {counrtyValues.latlng[0]}</div>
        <div>longitude: {counrtyValues.latlng[1]}</div>
        <div>Flag:
        <img
          width="30"
          height="30"
          src={state.countryDetails[0].flags.png}
          alt="Flag "
        ></img></div>
        {toggle && (
          <div className="capital-details">
            <div>temperature : {capitalDetails?.current?.temperature}</div>
            <div>wind_speed : {capitalDetails?.current?.wind_speed}</div>
            <div>weather icon:{" "}
            <img
              width="60"
              height="60"
              src={capitalDetails?.current?.weather_icons}
               alt="capital"
            ></img></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
