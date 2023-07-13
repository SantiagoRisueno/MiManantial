import React, { useEffect, useState } from "react";
import "../css/App.css";
import "../css/index.css";
import "../css/Login.css";
import { TextField, Button, Grid, Paper,Breadcrumbs,Typography,Link } from "@mui/material";
import { green, red } from "@mui/material/colors";
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate } from "react-router"
import Cookies from "universal-cookie";
import { saveOwner } from "../services/ownerAxios";

const cookies = new Cookies();

const FormOwner = () => {
  const [ownerCard, setOwnerCard] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [ownerLastName, setOwnerLastName] = React.useState("");
  const [ownerTelephone, setOwnerTelephone] = React.useState("");
  const [ownerEmail, setOwnerEmail] = React.useState("");
  const [ownerUsername, setOwnerUsername] = React.useState("");
  const [ownerPassword, setOwnerPassword] = React.useState("");
  const [ownerNumberHouse, setOwnerNumberHouse] = React.useState("");
  const [formData, setFormData] = React.useState({
    ownerCard: "",
    ownerName: "",
    ownerLastName: "",
    ownerTelephone: "",
    ownerEmail: "",
    ownerUsername: "",
    ownerPassword: "",
    ownerNumberHouse: "",
    ownerType: "",
  })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    formVacio()
    e.preventDefault(); 
    if (
      errorOwnerCard === true ||
      errorOwnerName === true ||
      errorOwnerLastName === true ||
      errorOwnerTelephone === true ||
      errorOwnerEmail === true ||
      errorOwnerUsername === true ||
      errorOwnerPassword === true ||
      errorOwnerNumberHouse === true ||
      ownerCard === "" ||
      ownerName === "" ||
      ownerLastName === "" ||
      ownerTelephone === "" ||
      ownerEmail === "" ||
      ownerUsername === "" ||
      ownerPassword === "" ||
      ownerNumberHouse === ""
    ) {
      alert("Incorrectly filled fields ");
    } else {
      try {
        const response = await saveOwner(formData)
        if(response.status === 200){
          if(response.data.created === 1){
            alert(response.data.message+" succesfully");
            navigate({
              pathname: "/OwnerController",
            });

          }else{
            if(response.data.created === 0){
              alert(response.data.message);
              
            }
          }
        }
          
      } catch (error) {
        console.log(error.message);
        
      }
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
      window.location.href = "./account";
    }
  });

  const expressions = {
    card: /^\d{10}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    telephone: /^\d{7,10}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[a-zA-Z0-9_-]{4,16}$/, 
    password: /^.{4,17}$/, 
    numberHouse: /^\d{1,3}$/, 
  };

  const [validationOwnerCard, setValidationOwnerCard] = useState("");
  const [errorOwnerCard, setErrorOwnerCard] = useState(false);
  const [validationOwnerName, setValidationOwnerName] = useState("");
  const [errorOwnerName, setErrorOwnerName] = useState(false);
  const [validationOwnerLastName, setValidationOwnerLastName] = useState("");
  const [errorOwnerLastName, setErrorOwnerLastName] = useState(false);
  const [validationOwnerTelephone, setValidationOwnerTelephone] = useState("");
  const [errorOwnerTelephone, setErrorOwnerTelephone] = useState(false);
  const [validationOwnerEmail, setValidationOwnerEmail] = useState("");
  const [errorOwnerEmail, setErrorOwnerEmail] = useState(false);
  const [validationOwnerUsername, setValidationOwnerUsername] = useState("");
  const [errorOwnerUsername, setErrorOwnerUsername] = useState(false);
  const [validationOwnerPassword, setValidationOwnerPassword] = useState("");
  const [errorOwnerPassword, setErrorOwnerPassword] = useState(false);
  const [validationOwnerNumberHouse, setValidationOwnerNumberHouse] =
    useState("");
  const [errorOwnerNumberHouse, setErrorOwnerNumberHouse] = useState(false);

  const onChangeOwnerCard = (e) => {
    setOwnerCard(e.target.value);
    formDataModificado()
    console.log(ownerCard);

    if (expressions.card.test(ownerCard)) {
      setValidationOwnerCard("Correct Identification Card");
      setErrorOwnerCard(false);
    } else {
      setValidationOwnerCard("Wrong Identification Card, Example: 1729033605");
      setErrorOwnerCard(true);
      formVacio()
    }
  };

  const onChangeOwnerName = (e) => {
    setOwnerName(e.target.value);
    formDataModificado()
    console.log(ownerName);

    if (expressions.name.test(ownerName)) {
      setValidationOwnerName("Correct Name");
      setErrorOwnerName(false);
    } else {
      setValidationOwnerName("Wrong Name, Example: Pepito");
      setErrorOwnerName(true);
      formVacio()
    }
  };

  const onChangeOwnerLastName = (e) => {
    setOwnerLastName(e.target.value);
    formDataModificado()
    console.log(ownerLastName);

    if (expressions.lastName.test(ownerLastName)) {
      setValidationOwnerLastName("Correct Last Name");
      setErrorOwnerLastName(false);
    } else {
      setValidationOwnerLastName("Wrong Last Name, Example: Moreno");
      setErrorOwnerLastName(true);
      formVacio()
    }
  };

  const onChangeOwnerTelephone = (e) => {
    setOwnerTelephone(e.target.value);
    formDataModificado()
    console.log(setOwnerTelephone);

    if (expressions.telephone.test(ownerTelephone)) {
      setValidationOwnerTelephone("Correct Telephone");
      setErrorOwnerTelephone(false);
    } else {
      setValidationOwnerTelephone(
        "Wrong Identification Card, Example: 0998060648-2051735"
      );
      setErrorOwnerTelephone(true);
      formVacio()
    }
  };

  const onChangeOwnerEmail = (e) => {
    setOwnerEmail(e.target.value);
    formDataModificado()
    console.log(ownerEmail);

    if (expressions.email.test(ownerEmail)) {
      setValidationOwnerEmail("Correct Email");
      setErrorOwnerEmail(false);
    } else {
      setValidationOwnerEmail("Wrong email, example: pepito@gmail.com");
      setErrorOwnerEmail(true);
      formVacio()
    }
  };

  const onChangeOwnerUsername = (e) => {
    setOwnerUsername(e.target.value);
    formDataModificado()
    console.log(ownerUsername);

    if (expressions.username.test(ownerUsername)) {
      setValidationOwnerUsername("Correct User");
      setErrorOwnerUsername(false);
    } else {
      setValidationOwnerUsername("Wrong User, example: Pepito15");
      setErrorOwnerUsername(true);
      formVacio()
    }
  };

  const onChangeOwnerPassword = (e) => {
    setOwnerPassword(e.target.value);
    formDataModificado()
    console.log(ownerPassword);

    if (expressions.password.test(ownerPassword)) {
      setValidationOwnerPassword("Correct Password");
      setErrorOwnerPassword(false);
    } else {
      setValidationOwnerPassword("Wrong password, example: pepito123456");
      setErrorOwnerPassword(true);
      formVacio()
    }
  };

  const onChangeOwnerNumberHouse = (e) => {
    setOwnerNumberHouse(e.target.value);
    formDataModificado()
    console.log(ownerPassword);

    if (expressions.numberHouse.test(ownerNumberHouse)) {
      setValidationOwnerNumberHouse("Correct Number House");
      setErrorOwnerNumberHouse(false);
    } else {
      setValidationOwnerNumberHouse("Wrong Number House example: 72");
      setErrorOwnerNumberHouse(true);
      formVacio()
    }
  };

  const formDataModificado = () => {
    setFormData({
      ownerCard: ownerCard,
      ownerName: ownerName,
      ownerLastName: ownerLastName,
      ownerTelephone: ownerTelephone,
      ownerEmail: ownerEmail,
      ownerUsername: ownerUsername,
      ownerPassword: ownerPassword,
      ownerNumberHouse: ownerNumberHouse,
      ownerType: "owner"
    })
  }

  const formVacio = () => {
    if(ownerCard === ""){
      setValidationOwnerCard("Obligatory field");
      setErrorOwnerCard(true);
    }

    if(ownerName === ""){
      setValidationOwnerName("Obligatory field");
      setErrorOwnerName(true);
    }

    if(ownerLastName === ""){
      setValidationOwnerLastName("Obligatory field");
      setErrorOwnerLastName(true);
    }

    if(ownerTelephone === ""){
      setValidationOwnerTelephone("Obligatory field");
      setErrorOwnerTelephone(true);
    }

    if(ownerEmail === ""){
      setValidationOwnerEmail("Obligatory field");
      setErrorOwnerEmail(true);
    }

    if(ownerUsername === ""){
      setValidationOwnerUsername("Obligatory field");
      setErrorOwnerUsername(true);
    }

    if(ownerPassword === ""){
      setValidationOwnerPassword("Obligatory field");
      setErrorOwnerPassword(true);
    }

    if(ownerNumberHouse === ""){
      setValidationOwnerNumberHouse("Obligatory field");
      setErrorOwnerNumberHouse(true);
    }
  }

  const paperStyle = {
    padding: 20,
    heigth: "70vh",
    width: 450,
    margin: "10px auto",
  };

  return (
    <Grid>
      <Grid>
        <HeaderAdmin />
      </Grid>
      <Breadcrumbs variant="h6" sx={{ marginLeft:'50px',color: 'white' }} aria-label="breadcrumb">
        <Link variant="h6" underline="hover" color="white" href="/OwnerController">Owner's Data</Link>
        <Typography variant="h6">Owners Create</Typography>
      </Breadcrumbs>
      <form onSubmit={handleSubmit} className="LogIn-margenT ">
        <Paper elevation={10} style={paperStyle}>
            <Grid>
              <center>
                <h1 align="center">Create Owner</h1>
              </center>
            </Grid>
          <br/><br />
          <div className="row">
            <div className="col">
              <TextField
                fullWidth
                id="ownerName"
                name="ownerName"
                placeholder="Ex:Josue"
                label="Name"
                sx={{ width: "100%" }}
                value={ownerName}
                error={errorOwnerName}
                helperText={validationOwnerName}
                onChange={onChangeOwnerName}
                onBlur={onChangeOwnerName}
              />
            </div>
            <br />
            <div className="col">
              <TextField
                fullWidth
                id="ownerLastName"
                name="ownerLastName"
                placeholder="Ex:Moreno"
                label="Last Name"
                value={ownerLastName}
                error={errorOwnerLastName}
                helperText={validationOwnerLastName}
                onChange={onChangeOwnerLastName}
                onBlur={onChangeOwnerLastName}
              />
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <TextField
                fullWidth
                id="ownerCard"
                name="ownerCard"
                placeholder="Ex:1719039305"
                label="Identification Card"
                value={ownerCard}
                error={errorOwnerCard}
                helperText={validationOwnerCard}
                onChange={onChangeOwnerCard}
                onBlur={onChangeOwnerCard}
              />
            </div>
            <br />
            <div className="col">
              <TextField
                fullWidth
                id="ownerTelephone"
                name="ownerTelephone"
                placeholder="Ex:0998060648"
                label="Telephone"
                value={ownerTelephone}
                error={errorOwnerTelephone}
                helperText={validationOwnerTelephone}
                onChange={onChangeOwnerTelephone}
                onBlur={onChangeOwnerTelephone}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <TextField
                fullWidth
                id="ownerEmail"
                name="ownerEmail"
                placeholder="Ex:jamoreno@hotmail.com"
                label="Email:"
                value={ownerEmail}
                error={errorOwnerEmail}
                helperText={validationOwnerEmail}
                onChange={onChangeOwnerEmail}
                onBlur={onChangeOwnerEmail}
              />
            </div>
            <br />
            <div className="col">
              <TextField
                fullWidth
                id="ownerUserName"
                name="ownerUserName"
                placeholder="Ex:jamoreno15"
                label="Username"
                value={ownerUsername}
                error={errorOwnerUsername}
                helperText={validationOwnerUsername}
                onChange={onChangeOwnerUsername}
                onBlur={onChangeOwnerUsername}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <TextField
                fullWidth
                id="ownerPassword"
                name="ownerPassword"
                placeholder="Ex:12345"
                type="password"
                label="Password"
                value={ownerPassword}
                error={errorOwnerPassword}
                helperText={validationOwnerPassword}
                onChange={onChangeOwnerPassword}
                onBlur={onChangeOwnerPassword}
              />
            </div>
            <br />
            <div className="col">
              <TextField
                fullWidth
                id="ownerNumberHouse"
                name="ownerNumberHouse"
                placeholder="Ex:72"
                label="Number of House"
                value={ownerNumberHouse}
                error={errorOwnerNumberHouse}
                helperText={validationOwnerNumberHouse}
                onChange={onChangeOwnerNumberHouse}
                onBlur={onChangeOwnerNumberHouse}
              />
            </div>
          </div>
          <br /><br />
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
                width: "110px",
                color: "black",
              }}
            >
              Add Owner
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              className="btn-back"
              color="error"
              variant="contained"
              variant="contained"
              size="large"
              onClick={salir}
              sx={{
                bgcolor: red[500],
                height: "50px",
                width: "110px",
                color: "black",
              }}
            >
              Cancel
            </Button>
          </div>
          <br />
        </Paper>
      </form>
    </Grid>
  );
};

export default FormOwner;
