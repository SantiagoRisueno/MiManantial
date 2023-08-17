import { IconButton, Modal, Button, Grid, Paper} from "@mui/material";
import React, { useState } from "react";
import { green, red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

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

const Pay = (props) => {
  const data = props.index;
  const handleUpdateRegister = props.handleUpdateRegister;

  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Nuevo estado para el archivo

  const [formValues, setformValues] = useState({
    id: data.id,
    payCode: data.paymentPayCode,
    ownerCard: data.paymentOwnerCard,
    ownerName: data.paymentOwnerName,
    date: data.paymentDate,
    value: data.paymentValue,
    payState: "Pendiente",
  });
  const navigate = useNavigate();

 
  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const updatedFormValues = {
      ...formValues,
      uploadedFile: selectedFile,
    };

    handleUpdateRegister(updatedFormValues);
    setOpen(false);
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

  return (
    <>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={handleOpenModal}
      >
        <Button sx={{ bgcolor: green[500], height: "40px", width: "50px" }}>
          PAGAR
        </Button>
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleEdit}>
          <Paper elevation={10} style={paperStyle} sx={style}>
          
            <CardContent>
              <Typography variant="h5" component="div">
                Enviar Pago
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                id="payCode"
                name="payCode"
              >
                <br />
                <strong>Codigo de Pago: </strong>
                {formValues.payCode}
              </Typography>
              <hr />

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                id="ownerName"
                name="ownerName"
              >
                <strong>Nombre del propietario: </strong>
                {formValues.ownerName}
              </Typography>
              <hr />

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                id="ownerCard"
                name="ownerCard"
              >
                <strong>Cédula: </strong>
                {formValues.ownerCard}
              </Typography>
              <hr />

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                id="date"
                name="date"
              >
                <strong>Fecha: </strong>
                {formValues.date}
              </Typography>
              <hr />

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                id="payState"
                name="payState"
              >
                <strong>Estado de pago: </strong>
                {formValues.payState}
              </Typography>
              <hr />

              <Typography variant="body2">
                <br />
              </Typography>

              <Typography variant="body2">
                <input type="file" onChange={handleFileUpload} />
              </Typography>
              <Typography variant="body2">
                <br />
              </Typography>

              <div className="row justify-content-center">
                <Button
                  className="btn-back"
                  color="success"
                  variant="contained"
                  
                  size="large"
                  type="submit"
                  onClose={() => setOpen(false)}
                  sx={{
                    bgcolor: green[500],
                    height: "50px",
                    width: "90px",
                    color: "black",
                  }}
                >
                  Enviar
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  className="btn-back"
                  color="error"
                  variant="contained"
                
                  size="large"
                  onClick={() => setOpen(false)}
                  sx={{
                    bgcolor: red[500],
                    height: "50px",
                    width: "90px",
                    color: "black",
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Paper>
        </form>
      </Modal>
    </>
  );
};
export default Pay;
