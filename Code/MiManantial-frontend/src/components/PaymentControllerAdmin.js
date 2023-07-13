import Payment from "./PaymentAdmin";
import {
  getPayment,
  deletePayment,
  updatePayment,
} from "../services/paymentAxios";
import "../css/index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import GeneralMenu from "./GeneralMenu";
import Cookies from "universal-cookie";
import {Breadcrumbs} from "@mui/material"
import {Typography} from "@mui/material"


const cookies = new Cookies();

const PaymentControllerAdmin = () => {
  const [payments, setPayment] = useState([]);

  const deleteRegister = (id) => {
    deletePayment(id);
  };

  const updateRegister = (values) => {
    updatePayment(values);
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
    if (cookies.get("ownerType") === "owner") {
      window.location.href = "./account";
    }
  });

  return (
    <>
      <Box>
        <GeneralMenu />
        <Breadcrumbs aria-label="breadcrumb">
                    <Typography  variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>Payment's Data</Typography>
        </Breadcrumbs>
        <br />
        <br />
        <Payment
          payments={payments}
          deleteRegister={deleteRegister}
          updateRegister={updateRegister}
        />
      </Box>
    </>
  );
};
export default PaymentControllerAdmin;
