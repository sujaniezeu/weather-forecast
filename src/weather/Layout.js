import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Layout = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://restcountries.com/v3.1/name/${country}`).then((res) => {
      
      navigate("/Home", { state: { countryDetails: res.data } });
    });
  }

  return (
    <div>
        <form className="form-country" onSubmit={handleSubmit}>
         <h3>Enter the Name of the Country</h3>
         
          <TextField
            className="text-field"
            value={country}
            onInput={(e) => setCountry(e.target.value)}
            placeholder={"country Name"}
          />
          <br /><br/>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={country.length ? false : true}
          >
            Submit
          </Button>
        </form>
    </div>
  );
};

export default Layout;
