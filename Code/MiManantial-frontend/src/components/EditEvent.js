import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Modal,
  Button,
  IconButton,
  Grid,
  Paper
} from "@mui/material";
import React, { useState } from "react";
import { green, red } from "@mui/material/colors";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  marginLeft: "auto",
  marginRight: "auto",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingLeft: "20px",
  paddingRight: "20px",
  background: "#fff",
  borderRadius: "15px",
  boxShadow: "1px 1px 20px #333",
};

const EditEvent = (props) => {

  const data = props.data;
  const handleUpdateRegister = props.edit;
  const [open, setOpen] = useState(false);
  const [formValues, setformValues] = useState({
    id: data.id,
    name: data.name,
    description: data.description,
    date: data.date,
    hour: data.hour
  });

  const handleEdit = async () => {
    if (
      errorName === true ||
      errorDate === true ||
      errorDescription === true ||
      errorHour === true
    ) {
      alert("Incorrectly filled fields");
    }else{
      await handleUpdateRegister(formValues);
    }
    
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const paperStyle = {
    padding: 20,
    heigth: "70vh",
    width: 350,
    margin: "10px auto",
  };


  const expressions = {
    Id: /^\d{1,10}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    date: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    timePat: /^(d{1,2}):(d{2})(:(d{2}))?(s?())?$/
  };

  const [validationName, setValidationName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [validationDescription, setValidationDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [validationDate, setValidationDate] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [validationHour, setValidationHour] = useState("");
  const [errorHour, setErrorHour] = useState(false);


  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.name.test(formValues.name)) {
      setValidationName("Correct Event name");
      setErrorName(false);
      } else {
        setValidationName("Wrong event name, The event name are only letters");
        setErrorName(true);
        formVacio()
    }
  };

  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.date.test(formValues.date)) {
        setValidationDate("Correct Date");
        setErrorDate(false);
      } else {
        setValidationDate("Wrong Date, Example: 27/05/2017");
        setErrorDate(true);
        formVacio()
      }
  };

  const handleChangeHour = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.timePat.test(formValues.hour)) {
      setValidationHour("Correct Hour");
      setErrorHour(false);
    } else {
      setValidationHour("Wrong Hour, Example: 12:00");
      setErrorHour(true);
      formVacio()
    }
  };

  const handleChangedesciption = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.name.test(formValues.description)) {
        setValidationDescription("Correct Event description");
        setErrorDescription(false);
      } else {
        setValidationDescription("Wrong event description, The event name are only description");
        setErrorDescription(true);
        formVacio()
    }
  };


  const formVacio = () =>{

    if(formValues.name === ""){
      setValidationName("Obligatory field");
      setErrorName(true);
    }

    if(formValues.description === ""){
      setValidationDescription("Obligatory field");
      setErrorDescription(true);
    }

    if(formValues.hour === ""){
      setValidationHour("Obligatory field");
      setErrorHour(true);
    }

    if(formValues.date === ""){
      setValidationDate("Obligatory field");
      setErrorDate(true);
    }
  }

  return (
    <>
    <IconButton
      color="secondary"
      aria-label="add an alarm"
      onClick={handleOpenModal}
    >
      <EditIcon
        style={{
          color: "green",
        }}
      />
    </IconButton>

    <Modal open={open} onClose={() => setOpen(false)}>
    
      <form onSubmit={handleEdit}>
        <Paper elevation={10} style={paperStyle} sx={style}>
          <h1 align="center">Edit Payment</h1>
          <br />

          <TextField
            sx={{ m: 2 }}
            fullWidth
            id="id"
            name="id"
            label="Event id"
            value={formValues.id}
            disabled
            
          />
          <TextField
            sx={{ m: 2 }}
            fullWidth
            id="name"
            name="name"
            label="Event name"
            value={formValues.name}
            onChange = {handleChangeName}
            error={errorName}
            helperText={validationName}
            onBlur={handleChangeName}
          />
          <TextField
            sx={{ m: 2 }}
            fullWidth
            id="description"
            name="description"
            label="Event Description"
            value={formValues.description}
            onChange = {handleChangedesciption}
            error={errorDescription}
            helperText={validationDescription}
            onBlur={handleChangedesciption}
          />
          <TextField
            sx={{ m: 2 }}
            fullWidth
            id="date"
            name="date"
            label="Event Date"
            value={formValues.date}
            onChange = {handleChangeDate}
            error={errorDate}
            helperText={validationDate}
            onBlur={handleChangeDate}
            
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth
            id="hour"
            name="hour"
            label="Event Hour"
            value={formValues.hour}
            onChange = {handleChangeHour}
            onBlur={handleChangeHour}
            error={errorHour}
            helperText={validationHour}
          />

          <div className="row justify-content-center">
            <Button
              className="btn-back"
              color="success"
              variant="contained"
              variant="contained"
              size="large"
              type="submit"
              onClose={() => setOpen(false)}
              sx={{
                bgcolor: green[500],
                height: "50px",
                width: "110px",
                color: "black",
              }}
            >
              Edit Payment
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              className="btn-back"
              color="error"
              variant="contained"
              variant="contained"
              size="large"
              onClick={() => setOpen(false)}
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
          <br></br>
        </Paper>
      </form>
    </Modal>
  </>
);
};
export default EditEvent;
