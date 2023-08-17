import React,{useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { saveEvent} from "../services/eventAxios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { TextField, Button, Grid, Paper } from "@mui/material";
import { green, red } from "@mui/material/colors";
import {Breadcrumbs} from "@mui/material"
import {Typography} from "@mui/material"
import {Link} from "@mui/material"
import { useNavigate } from "react-router";

const  AddEvents = () => {
  
  const navigate = useNavigate();
  const [events, setEvents] = useState([])
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [formData, setFormData] = React.useState({
    id: "",
    name: "",
    description: "",
    date: "",
    hour: ""
  })

  
  const expressions = {
    Id: /^\d{1,10}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    date: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    timePat: /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/
  };

  const [validationId, setValidationId] = useState("");
  const [errorId, setErrorId] = useState(false);
  const [validationName, setValidationName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [validationDescription, setValidationDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [validationDate, setValidationDate] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [validationHour, setValidationHour] = useState("");
  const [errorHour, setErrorHour] = useState(false);

  const onChangeEventId = (e) => {
    setId(e.target.value)
    formDataModificado()
    if (expressions.Id.test(id)) {
      setValidationId("Correct Event id");
      setErrorId(false);
      } else {
        setValidationId("Wrong event id, The event id are only nombers");
        setErrorId(true);
        formVacio();
    }

  }
  const onChangeEventName = (e) => {
    setName(e.target.value)
    formDataModificado()
    if (expressions.name.test(name)) {
      setValidationName("Correct Event name");
      setErrorName(false);
      } else {
        setValidationName("Wrong event name, The event name are only letters");
        setErrorName(true);
        formVacio();
  }

    }
  const  onChangeEventDes = (e) => {
    setDescription(e.target.value)
    formDataModificado()
    if (expressions.name.test(description)) {
      setValidationDescription("Correct Event description");
      setErrorDescription(false);
    } else {
      setValidationDescription("Wrong event description, The event name are only description");
      setErrorDescription(true);
      formVacio();
    }

  }
  const  onChangeEventDate = (e) => {
    setDate(e.target.value)
    formDataModificado()
    if (expressions.date.test(date)) {
      setValidationDate("Correct Date");
      setErrorDate(false);
    } else {
      setValidationDate("Wrong Date, Example: 27/05/2017");
      setErrorDate(true);
      formVacio();
    }
  }
  const  onChangeEventHour = (e) => {
      setHour(e.target.value)
      formDataModificado()
      if (expressions.timePat.test(hour)) {
        setValidationHour("Correct Hour");
        setErrorHour(false);
      } else {
        setValidationHour("Wrong Hour, Example: 12:00");
        setErrorHour(true);
        formVacio();
      }
  }

  const onSubmit = async e => {
    formVacio()
    e.preventDefault();
    
    if (
      errorId === true ||
      errorName === true ||
      errorDate === true ||
      errorDescription === true ||
      errorHour === true ||
      id === "" ||
      date === "" ||
      description === "" ||
      hour === "" ||
      name === "" 
    ) {
      alert("Incorrectly filled fields");
    
    }else{
      try{
        const response = await saveEvent(formData)
        if(response.status === 200){
          if(response.data.created === 1){
            alert(response.data.message+" succesfully");
            navigate({
              pathname: "/EventsAdminRest",
            });
  
          }
        }
  
      }catch(error){
        console.log(error.message)
      }
    }
    
      
  }

  const formVacio = () =>{
    if(id === ""){
      setValidationId("Obligatory field");
      setErrorId(true);
    }

    if(name === ""){
      setValidationName("Obligatory field");
      setErrorName(true);
    }

    if(description === ""){
      setValidationDescription("Obligatory field");
      setErrorDescription(true);
    }

    if(hour === ""){
      setValidationHour("Obligatory field");
      setErrorHour(true);
    }

    if(date === ""){
      setValidationDate("Obligatory field");
      setErrorDate(true);
    }
  }

  const formDataModificado = () => {
    setFormData({
      id: id,
      name: name,
      description: description,
      date: date,
      hour: hour
    })
  }


    return(
      <Grid>
        <Grid>
          <HeaderAdmin />
        </Grid>
        <Breadcrumbs variant="h6" sx={{ marginLeft:'50px',color: 'white' }} aria-label="breadcrumb">
            <Link variant="h6" underline="hover" color="white" href="/EventsAdminRest">Eventos</Link>
            <Typography variant="h6">Añadir Eventos</Typography>
        </Breadcrumbs>
        <br/>
        <div className="container">
          <Button
            href="/EventsAdminRest"
            className="btn-back"
            variant="contained"
            color="success"
            startIcon={<ArrowBackIosIcon />}
          >
            Regresar
          </Button>
        </div>
        <form
          onSubmit={onSubmit}
          className="LogIn-margenT container"
        >
          <Paper elevation={10} style= {{
            padding: 20,
            heigth: "70vh",
            width: 350,
            margin: "10px auto"}}
          >
            <Grid>
                <h1 align="center">Crear Eventos</h1>
            </Grid>
            <br /><br />
            <TextField
              fullWidth
              id="standard-basic"
              label="Codigo de Evento:"
              variant="outlined"
              value={id}
              onChange={onChangeEventId}
              onBlur={onChangeEventId}
              error={errorId}
              helperText={validationId}

            />
            <br /><br />
            <TextField
              fullWidth
              id="standard-basic"
              label="Nombre del Evento:"
              variant="outlined"
              name="name"
              value={name}
              onChange={onChangeEventName}
              onBlur={onChangeEventName}
              error={errorName}
              helperText={validationName}
            />
            <br /><br />
            <TextField
              fullWidth
              id="standard-basic"
              label="Descripción:"
              variant="outlined"
              name="description"
              value={description}
              onChange={onChangeEventDes}
              onBlur = {onChangeEventDes}
              error={errorDescription}
              helperText={validationDescription}
            />
            <br /><br />
            <TextField
              fullWidth
              id="standard-basic"
              variant="outlined"
              label="Fecha:"
              placeholder="Ex:12/12/2021"
              value={date}
              onChange={onChangeEventDate}
              onBlur={onChangeEventDate}
              error={errorDate}
              helperText={validationDate}
            />
            <br /><br />
            <TextField
              fullWidth
              id="standard-basic"
              variant="outlined"
              label="Hora:"
              placeholder="Ex:19:00"
              value={hour}
              onChange={onChangeEventHour}
              onBlur={onChangeEventHour}
              error={errorHour}
              helperText={validationHour}
            />
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
                Añadir Evento
              </Button>
              
            </div>
            <br />
          </Paper>
        </form>
      </Grid>
    )   
}

export default AddEvents;

