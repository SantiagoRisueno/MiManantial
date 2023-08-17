import React, { useEffect } from "react";
import HeaderUser from "./HeaderUser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cookies from "universal-cookie";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CircularProgress from "@mui/material/CircularProgress";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import HistoryIcon from "@mui/icons-material/History";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {Breadcrumbs} from "@mui/material"
const cookies = new Cookies();

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MenuPayment = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);


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
    <div>
      <HeaderUser />
      <Breadcrumbs aria-label="breadcrumb">
            <Typography  variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>Pagos</Typography>
        </Breadcrumbs> 
      <br></br>
      <div className="container item">
        <center>
          <h1>Pagos</h1>
        </center>
        <br />
        <div className="row justify-content-md-center">
        
          <div class="col-xs-12 col-sm-12 col-md-3">
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <PendingActionsIcon fontSize="large" /> Pagos Pendientes:
                </Typography><br/>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Aquí puede ver los pagos que aún no ha realizado.
                </Typography><br/>
                <div className="row justify-content-center">
                  <div className="col-2 p-1 ">
                    <AccessAlarmOutlinedIcon color="success" fontSize="large" />
                  </div>
                  <div className="col-2 p-1 ">
                    <LocalAtmOutlinedIcon color="success" fontSize="large" />
                  </div>

                  <div className="col-2 p-1 ">
                    <RuleOutlinedIcon color="success" fontSize="large" />
                  </div>
                </div>
                <Typography variant="body2">
                  <br />
                </Typography>
                <div className="justify-content-center">
                  <div className="text-center ">
                    <Button
                      className="btn-back"
                      href="/PaymentControllerPending"
                      color="success"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    >
                     INGRESAR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <br />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3">
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <PendingOutlinedIcon fontSize="large" /> Pagos en revisión:
                </Typography>
                <br/>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Pagos que aún no han sido confirmados, en espera de aprobación por parte de la gerencia.
                </Typography>
                <div className="row justify-content-center">
                  <div className="col-2 p-2 ">
                    <CircularProgress
                      variant="determinate"
                      color="success"
                      value={progress}
                    />
                  </div>
                </div>
                <Typography variant="body2"></Typography>
                <div className="justify-content-center">
                  <div className="text-center">
                    <Button
                      className="btn-back"
                      href="/PaymentProcessControllerUser"
                      color="success"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    >
                      INGRESAR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <br />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3">
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <LibraryAddCheckOutlinedIcon fontSize="large" />
                  Pagos confirmados:
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Aquí están los pagos que han sido confirmados con éxito
                </Typography><br/>
                <div className="row justify-content-center">
                  <div className="col-2 p-1 ">
                    <LocalAtmOutlinedIcon color="success" fontSize="large" />
                  </div>
                  <div className="col-2 p-1 ">
                    <PointOfSaleOutlinedIcon color="success" fontSize="large" />
                  </div>

                  <div className="col-2 p-1 ">
                    <PriceCheckOutlinedIcon color="success" fontSize="large" />
                  </div>
                </div>
                <Typography variant="body2">
                  <br />
                </Typography>
                <div className="justify-content-center">
                  <div className="text-center ">
                    <Button
                      className="btn-back"
                      href="/PaymentCanceledControllerUser"
                      color="success"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    >
                      INGRESAR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <br />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3">
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <ManageSearchIcon fontSize="large" />
                  Historial de Pagos:
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Aquí puede ver el historial de sus pagos.
                </Typography>
                <div className="row justify-content-center">
                  <div className="col-2 p-1 ">
                    <LocalAtmOutlinedIcon color="success" fontSize="large" />
                  </div>
                  <div className="col-2 p-1 ">
                    <BallotOutlinedIcon color="success" fontSize="large" />
                  </div>

                  <div className="col-2 p-1 ">
                    <HistoryIcon color="success" fontSize="large" />
                  </div>
                </div>
                <Typography variant="body2">
                  <br />
                </Typography>
                <div className="justify-content-center">
                  <div className="text-center">
                    <Button
                      className="btn-back"
                      href="/PaymentControllerUser"
                      color="success"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    >
                      INGRESAR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPayment;
