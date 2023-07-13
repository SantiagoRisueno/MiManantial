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

const EditPaymentAdmin = (props) => {
  const payments = props.data;
  const index = props.index;
  const handleUpdateRegister = props.handleUpdateRegister;
  var data = "";
  for (let i = 0; i < payments.length; i++) {
    if (payments[i].id === index) {
      data = payments[i];
    }
  }

  const [open, setOpen] = useState(false);

  const [formValues, setformValues] = useState({
    id: data.id,
    payCode: data.payCode,
    ownerCard: data.ownerCard,
    ownerName: data.ownerName,
    date: data.date,
    value: data.value,
    payState: data.payState,
  });

  const handleEdit = () => {
    handleUpdateRegister(formValues);
  };

  const handleOpenModal = () => {
    setOpen(true);
    setformValues({
      id: data.id,
      payCode: data.payCode,
      ownerCard: data.ownerCard,
      ownerName: data.ownerName,
      date: data.date,
      value: data.value,
      payState: data.payState,
    });
  };


  const expressions = {
    payCode: /^\d{1,10}$/, 
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    card: /^\d{10}$/,
    date: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    value: /^\d{1,2000}$/, 
    payState: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  };

  const [validationPayCode, setValidationPayCode] = useState("");
  const [errorPayCode, setErrorPayCode] = useState(false);
  const [validationOwnerName, setValidationOwnerName] = useState("");
  const [errorOwnerName, setErrorOwnerName] = useState(false);
  const [validationOwnerCard, setValidationOwnerCard] = useState("");
  const [errorOwnerCard, setErrorOwnerCard] = useState(false);
  const [validationDate, setValidationDate] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [validationValue, setValidationValue] = useState("");
  const [errorValue, setErrorValue] = useState(false);
  const [validationPayState, setValidationPayState] = useState("");
  const [errorPayState, setErrorPayState] = useState(false);

  const handleChangePayCode = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.payCode.test(formValues.payCode)) {
      setValidationPayCode("Correct Pay Code");
      setErrorPayCode(false);
    } else {
      setValidationPayCode("Wrong Pay Code, The pay code are only numbers");
      setErrorPayCode(true);
    }
  };

  const handleChangeOwnerName = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.name.test(formValues.ownerName)) {
      setValidationOwnerName("Correct Name");
      setErrorOwnerName(false);
    } else {
      setValidationOwnerName("Wrong Name, Example: Pepito");
      setErrorOwnerName(true);
    }
  };

  const handleChangeOwnerCard = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.card.test(formValues.ownerCard)) {
      setValidationOwnerCard("Correct Identification Card");
      setErrorOwnerCard(false);
    } else {
      setValidationOwnerCard("Wrong Identification Card, Example: 1729033605");
      setErrorOwnerCard(true);
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
    }
  };

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.value.test(formValues.value)) {
      setValidationValue("Correct Value");
      setErrorValue(false);
    } else {
      setValidationValue("Wrong Value, The value are only numbers");
      setErrorValue(true);
    }
  };

  const handleChangePayState = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });

    if (expressions.payState.test(formValues.payState)) {
      setValidationPayState("Correct Pay State");
      setErrorPayState(false);
    } else {
      setValidationPayState(
        "Wrong Pay State, Example: processing, paid out, pending"
      );
      setErrorPayState(true);
    }
  };

  const paperStyle = {
    padding: 20,
    heigth: "70vh",
    width: 350,
    margin: "10px auto",
  };

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
              id="payCode"
              name="payCode"
              label="Pay Code"
              value={formValues.payCode}
              error={errorPayCode}
              helperText={validationPayCode}
              onChange={handleChangePayCode}
              onBlur={handleChangePayCode}
            />
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="date"
              name="date"
              label="Pay Date"
              value={formValues.date}
              error={errorDate}
              helperText={validationDate}
              onChange={handleChangeDate}
              onBlur={handleChangeDate}
            />

            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="value"
              name="value"
              label="Pay value"
              value={formValues.value}
              error={errorValue}
              helperText={validationValue}
              onChange={handleChangeValue}
              onBlur={handleChangeValue}
            />

            <FormControl sx={{ m: 2 }} fullWidth>
              <InputLabel id="payState">Payment State</InputLabel>
              <Select
                fullWidth
                labelId="payState"
                name="payState"
                id="payState"
                value={formValues.payState}
                onChange={handleChangePayState}
                label="Pay State"
              >
                <MenuItem value="processing">Processing</MenuItem>
                <MenuItem value="paid out">Paid out</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>

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
export default EditPaymentAdmin;
