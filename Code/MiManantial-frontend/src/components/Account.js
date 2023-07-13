import React, { useEffect } from "react";
import "../css/Login.css";
import { Grid, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router";
import HeaderUser from "./HeaderUser";
import Cookies from "universal-cookie";
import { green, red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Breadcrumbs} from "@mui/material"
import {Link} from "@mui/material"

const cookies = new Cookies();

const Account = () => {
  var nameCookie = "";
  const paperStyle = {
    padding: 20,
    heigth: "70vh",
    width: 350,
    margin: "20px auto",
  };

  const navigate = useNavigate();

  if (cookies.get("name")) {
    nameCookie = cookies.get("name");
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      navigate({
        pathname: "/accountUpdate",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancel = () => {
    navigate({
      pathname: "/Home",
    });
  };


  useEffect(() => {
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  });

  useEffect(() => {
    if (cookies.get("ownerType") === "admin") {
      window.location.href = "./OwnerController";
    }
  });

  return (
    <Grid>
      <Grid>
        <HeaderUser />
      </Grid>
      <Breadcrumbs variant="h6" sx={{ marginLeft:'50px',color: 'white' }} aria-label="breadcrumb">
        <Link variant="h6" underline="hover" color="white" href="/Home">Home</Link>
        <Typography variant="h6">My Account</Typography>
      </Breadcrumbs>
      <form onSubmit={handleSubmit} className="LogIn-margenT">
        <Card elevation={10} style={paperStyle}>
          <Grid>
            <center>
              <h1>My Account</h1>
              <Avatar>{nameCookie.charAt(0)}</Avatar>
            </center>
          </Grid>

          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <br />
              <strong>Name: </strong>
              {cookies.get("name")}
            </Typography>
            <hr />

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <br />
              <strong>Last Name: </strong>
              {cookies.get("lastName")}
            </Typography>
            <hr />

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <br />
              <strong>Username: </strong>
              {cookies.get("username")}
            </Typography>
            <hr />

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <br />
              <strong>Identification Card: </strong>
              {cookies.get("cardIdentification")}
            </Typography>
            <hr />

            <Typography variant="body2">
              <br />
            </Typography>
            <div className="row justify-content-center">
              <Button
                className="btn-back"
                color="success"
                variant="contained"
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  bgcolor: green[500],
                  height: "50px",
                  width: "90px",
                  color: "black",
                }}
              >
                Edit
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                className="btn-back"
                color="error"
                variant="contained"
                variant="contained"
                size="large"
                onClick={cancel}
                sx={{
                  bgcolor: red[500],
                  height: "50px",
                  width: "90px",
                  color: "black",
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Grid>
  );
};

export default Account;
