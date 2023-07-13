import React, { useEffect, useState } from "react";
import "../css/App.css";
import "../css/index.css";
import "../css/Login.css";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,  
  Paper
} from "@mui/material";
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate } from "react-router";
import { getOwner } from "../services/ownerAxios";
import { savePayment } from "../services/paymentAxios";
import { green, red, grey } from "@mui/material/colors";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Cookies from "universal-cookie";
import {Breadcrumbs} from "@mui/material"
import {Typography} from "@mui/material"
import {Link} from "@mui/material"

const cookies = new Cookies();

const FormPayment = () => {
  const [owners, setOwner] = useState([]);
  const [payCode, setpayCode] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [ownerCard, setOwnerCard] = React.useState("");
  const [dateaaux, setdateaux] = React.useState(new Date("2022-02-13"));
  const [date, setdate] = React.useState("");
  const [value, setvalue] = React.useState("");
  console.log(ownerCard)
  const [formData, setFormData] = React.useState({
    payCode: "",
    ownerName: "",
    ownerCard: "",
    date: "",
    value: "",
    payState: "",
  })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    formVacio()
    e.preventDefault(); 
    if (
      errorPayCode === true ||
      errorOwnerName === true ||
      errorValue === true ||
      payCode === "" ||
      ownerCard === "" ||
      ownerName === "" ||
      date === "" ||
      value === ""
    ) {
      alert("Incorrectly filled fields ");
    } else {
      try {
        const response = await savePayment(formData)
        if(response.status === 200){
          if(response.data.created === 1){
            alert(response.data.message+" succesfully");
            navigate({
              pathname: "/PaymentControllerAdmin",
            });

          }
        }
        
      } catch (error) {
        console.log(error.message);
        
      }
    }
  };
  const salir = () => {
    navigate({
      pathname: "/PaymentControllerAdmin",
    });
  };

  useEffect(() => {
    async function owners() {
      const response = await getOwner();

      if (response.status === 200) {
        setOwner(response.data);
      }
    }

    owners();
  }, []);

  useEffect(() => {
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  });

  useEffect(() => {
    if (cookies.get("ownerType") === "owner") {
      window.location.href = "./Home";
    }
  });

  const expressions = {
    payCode: /^\d{1,10}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    card: /^\d{10}$/, 
    date: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    value: /^\d{1,2000}$/, 
  };
  const [validationDate, setValidationDate] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [validationPayCode, setValidationPayCode] = useState("");
  const [errorPayCode, setErrorPayCode] = useState(false);
  const [validationOwnerName, setValidationOwnerName] = useState("");
  const [errorOwnerName, setErrorOwnerName] = useState(false);
  const [validationOwnerCard, setValidationOwnerCard] = useState("");
  const [errorOwnerCard, setErrorOwnerCard] = useState(false);
  const [validationValue, setValidationValue] = useState("");
  const [errorValue, setErrorValue] = useState(false);

  const onChangePayCode = (e) => {
    setpayCode(e.target.value);
    formDataModificado()
    if (expressions.payCode.test(payCode)) {
      setValidationPayCode("Correct Pay Code");
      setErrorPayCode(false);
    } else {
      setValidationPayCode("Wrong Pay Code, The pay code are only numbers");
      setErrorPayCode(true);
      formVacio()
    }
  };

  const onChangeOwnerCard = (e) => {
    setOwnerCard(e.target.value);
    formDataModificado()
    if (expressions.card.test(ownerCard)) {
      setValidationOwnerCard("Correct Identification Card");
      setErrorOwnerCard(false);
    } else {
      setValidationOwnerCard("Wrong Identification Card, Example: 1729033605");
      setErrorOwnerCard(true);
      formVacio()
    }
  };

  const onBlurCard = () => {
    var owner = "";
    for (var i = 0; i < owners.length; i++) {
      if (owners[i].ownerCard === ownerCard) {
        owner = owners[i];
      }
    }
    setOwnerName(owner.ownerName);
    formDataModificado()
    formVacio()
  };

  const onChangeDate = (newValue) => {
    const newData =
      newValue.getDate() +
      "-" +
      (newValue.getMonth() + 1) +
      "-" +
      newValue.getFullYear();
    const newData1 =
      newValue.getFullYear() +
      "-" +
      (newValue.getMonth() + 1) +
      "-" +
      newValue.getDate();
    const dateAux = new Date(newData1);
    setdateaux(dateAux);
    setdate(newData);
    formDataModificado()
    formVacio()
  };

  const onChangeValue = (e) => {
    setvalue(e.target.value);
    formDataModificado()
    console.log(value);

    if (expressions.value.test(value)) {
      setValidationValue("Correct Value");
      setErrorValue(false);
    } else {
      setValidationValue("Wrong Value, The value are only numbers");
      setErrorValue(true);
      formVacio()
    }
  };

  const formDataModificado = () => {
    setFormData({
      payCode: payCode,
      ownerName: ownerName,
      ownerCard: ownerCard,
      date: date,
      value: value,
      payState: "pending",
    })
  }

  const formVacio = () => {
    if(payCode === ""){
      setValidationPayCode("Obligatory field");
      setErrorPayCode(true);
    }

    if(ownerCard === null){
      setValidationOwnerCard("Obligatory field");
      setErrorOwnerCard(true);
    }

    if(date === ""){
      setValidationDate("Obligatory field");
      setErrorDate(true);
    }

    if(value === ""){
      setValidationValue("Obligatory field");
      setErrorValue(true);
    }
  }

  const paperStyle = {
    padding: 20,
    heigth: "70vh",
    width: 350,
    margin: "10px auto",
  };

  return (
    <Grid>
      <Grid>
        <HeaderAdmin />
      </Grid>
      <Breadcrumbs variant="h6" sx={{ marginLeft:'50px',color: 'white' }} aria-label="breadcrumb">
        <Link variant="h6" underline="hover" color="white" href="/PaymentControllerAdmin">Payment's Data</Link>
        <Typography variant="h6" >Add Payment</Typography>
      </Breadcrumbs>
      <form onSubmit={handleSubmit} className="LogIn-margenT ">
        <Paper elevation={10} style={paperStyle}>
          <Grid>
            <center>
            <h1 align="center">Create Payment</h1>
            </center>
          </Grid>
          <br />
          <TextField
            fullWidth
            id="paymentPayCode"
            name="paymentPayCode"
            placeholder="Ex:1231"
            label="Pay Code"
            value={payCode}
            error={errorPayCode}
            helperText={validationPayCode}
            onChange={onChangePayCode}
            onBlur={onChangePayCode}
          />
          <br/><br/>

          <FormControl fullWidth>
            <InputLabel id="paymentOwnerCard">Owner Card</InputLabel>
            <Select
              fullWidth
              labelId="paymentOwnerCard"
              name="paymentOwnerCard"
              id="paymentOwnerCard"
              value={ownerCard}
              onChange={onChangeOwnerCard}
              onFocus={onBlurCard}
              onBlur={onBlurCard}
              label="Owner Card"
            >
              {owners.map((item) => (
                <MenuItem value={item.ownerCard}>{item.ownerCard}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <br/><br/>
          <TextField
            fullWidth
            id="paymentOwnerName"
            name="paymentOwnerName"
            placeholder="Ex: Usuari"
            label="Owner Name"
            value={ownerName}
            error={errorOwnerName}
            helperText={validationOwnerName}
            disabled
          />
          <br/><br/>

          <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
            <MobileDatePicker
              label="Pay Date"
              inputFormat="yyyy-MM-dd"
              value={dateaaux}
              onChange={onChangeDate}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>

          <br/><br/>
          <TextField
            fullWidth
            id="paymentValue"
            name="paymentValue"
            placeholder="300"
            label="Pay value"
            value={value}
            error={errorValue}
            helperText={validationValue}
            onChange={onChangeValue}
            onBlur={onChangeValue}
          />
          <br/><br/>

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
              Add Payment
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

export default FormPayment;
