import Payment from "./PaymentCanceled";
import { getPayment } from "../services/paymentAxios";
import "../css/index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderUser from "./HeaderUser";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Breadcrumbs} from "@mui/material"
import {Link} from "@mui/material"
import {Typography} from "@mui/material"

const cookies = new Cookies();

const PaymentCanceledControllerUser = () => {
  const [payments, setPayment] = useState([]);

  useEffect(() => {
    async function loadPayment() {
      const response = await getPayment();

      if (response.status === 200) {
        setPayment(response.data);
      }
    }

    loadPayment();
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
    <>
      <Box>
        <HeaderUser />
        <Breadcrumbs variant="h6" sx={{ marginLeft:'50px',color: 'white' }} aria-label="breadcrumb">
          <Link variant="h6" underline="hover" color="white" href="/MenuPayment">Pagos</Link>
          <Typography variant="h6">Pagos Confirmados</Typography>
      </Breadcrumbs>
        <br />
        <br />
        <div className="container">
          <Button
            href="/MenuPayment"
            className="btn-back"
            variant="contained"
            color="success"
            startIcon={<ArrowBackIosIcon />}
          >
            Regresar
          </Button>
          <br />
          <br />
        </div>
        <Payment payments={payments} />
      </Box>
    </>
  );
};
export default PaymentCanceledControllerUser;
