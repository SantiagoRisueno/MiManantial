import React, { useEffect, useState } from "react";
import "../css/App.css";
import "../css/index.css";
import { Box, TextField, Button, Grid } from "@mui/material";
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const EditOwner = () => {
  const [ownerCard, setownerCard] = useState("");
  const [ownerName, setownerName] = useState("");
  const [ownerLastName, setownerLastName] = useState("");
  const [ownerTelephone, setownerTelephone] = useState("");
  const [ownerEmail, setownerEmail] = useState("");
  const [ownerUsername, setownerUsername] = useState("");
  const [ownerPassword, setownerPassword] = useState("");
  const [ownerNumberHouse, setownerNumberHouse] = useState("");
  const navigate = useNavigate();
  var id = "";

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const salir = () => {
    navigate({
      pathname: "/OwnerController",
    });
  };


  useEffect(() => {
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  });

  useEffect(() => {
    if (cookies.get("ownerType") === "owner") {
      window.location.href = ".account";
    }
  });

  return (
    <Grid>
      <Grid>
        <HeaderAdmin />
      </Grid>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 20px #333",
          }}
        >
          <br />
          <h1 align="center">Editar usuario</h1>
          <br />

          <TextField
            fullWidth
            id="ownerCard"
            name="ownerCard"
            placeholder="Ex:1719039305"
            label="Identification Card"
            value={ownerCard}
            onChange={(e) => setownerCard(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerName"
            name="ownerName"
            placeholder="Ex:Josue"
            label="Name"
            value={ownerName}
            onChange={(e) => setownerName(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerLastName"
            name="ownerLastName"
            placeholder="Ex:Moreno"
            label="Last Name"
            value={ownerLastName}
            onChange={(e) => setownerLastName(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerTelephone"
            name="ownerTelephone"
            placeholder="Ex:0998060648"
            label="Telephone"
            value={ownerTelephone}
            onChange={(e) => setownerTelephone(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerEmail"
            name="ownerEmail"
            placeholder="Ex:jamoreno@hotmail.com"
            label="Email:"
            value={ownerEmail}
            onChange={(e) => setownerEmail(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerUserName"
            name="ownerUserName"
            placeholder="Ex:jamoreno15"
            label="Username"
            value={ownerUsername}
            onChange={(e) => setownerUsername(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerPassword"
            name="ownerPassword"
            placeholder="Ex:12345"
            type="password"
            label="Password"
            value={ownerPassword}
            onChange={(e) => setownerPassword(e.target.value)}
          />
          <br />
          <TextField
            fullWidth
            id="ownerNumberHouse"
            name="ownerNumberHouse"
            placeholder="Ex:72"
            label="Number of House"
            value={ownerNumberHouse}
            onChange={(e) => setownerNumberHouse(e.target.value)}
          />
          <br />

          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              boxShadow: "1px 1px 5px #333",
              margin: "10px",
              background: "green",
              width: "60%",
            }}
          >
            Ingresar
          </Button>
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              boxShadow: "1px 1px 5px #333",
              margin: "10px",
              background: "green",
              width: "60%",
            }}
            onClick={salir}
          >
            Cancel
          </Button>
          <br />
          <br />
        </Box>
      </form>
    </Grid>
  );
};
export default EditOwner;
