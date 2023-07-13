import Payment from "./PaymentUser";
import { getPayment, deletePayment } from "../services/paymentAxios";
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

const PaymentControllerUser = () => {
  const [payments, setPayment] = useState([]);

  const deleteRegister = (id) => {
    deletePayment(id);
  };

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
            <Link variant="h6" underline="hover" color="white" href="/MenuPayment">Menu Payments</Link>
            <Typography variant="h6">Data History</Typography>
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
            BACK
          </Button>
          <br />
          <br />
        </div>
        <Payment payments={payments} deleteRegister={deleteRegister} />
      </Box>
    </>
  );
};
export default PaymentControllerUser;
