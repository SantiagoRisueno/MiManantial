import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../css/index.css";
import "../css/style.css";
import DeleteData from "./DeleteData";
import Cookies from "universal-cookie";
import { green } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PageviewIcon from "@mui/icons-material/Pageview";
import AddIcon from "@mui/icons-material/Add";
import EditPaymentAdmin from "./EditPaymentAdmin";
import { useNavigate } from "react-router";

const cookies = new Cookies();

const Payment = (props) => {
  const payments = props.payments;
  const deleteRegister = props.deleteRegister;
  const updateRegister = props.updateRegister;
  const paymentsOnly = payments.filter(
    (item) =>
      item.paymentType !== "admin" &&
      item.paymentUsername !== cookies.get("username")
  );
  const navigate = useNavigate();

  const [paymentsaux, setPaymentsaux] = useState([]);
  const [tablapayments, setTablapayments] = useState([]);
  const [search, setSearch] = useState();

  const handleDeleteRegister = (id) => {
    deleteRegister(id);
  };

  const habldeUpdateRegister = (values) => {
    updateRegister(values);
  };

  const columns = [
    { field: "paymentPayCode", headerName: "Codigo de Pago", width: 150 },
    { field: "paymentOwnerName", headerName: "Nombre del Propietario", width: 190 },
    { field: "paymentOwnerCard", headerName: "Cédula", width: 120 },
    { field: "paymentDate", headerName: "Fecha", width: 150 },
    { field: "paymentValue", headerName: "Valor del Pago", width: 120 },
    { field: "paymentState", headerName: "Estado del Pago", width: 170 },
    { field: "paymentImage", headerName: "Comprobante de Pago", width: 170 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <div style={{ cursor: "pointer" }}>
          <DeleteData
            index={params.row.id}
            handleDeleteRegister={handleDeleteRegister}
          />
          <EditPaymentAdmin
            data={payments}
            index={params.row.id}
            handleUpdateRegister={habldeUpdateRegister}
          />
        </div>
      ),
    },
  ];

  const peticion = () => {
    setPaymentsaux(paymentsOnly);
    setTablapayments(paymentsOnly);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    filtrar(e.target.value);
  };

  const filtrar = (itemSearch) => {
    var ownerSearch = tablapayments.filter((item) => {
      if (item.ownerName.toLowerCase().includes(itemSearch.toLowerCase())) {
        return item;
      }
    });
    setPaymentsaux(ownerSearch);
  };

  useEffect(() => {
    peticion();
  }, [payments]);

  const OnclickInsertar = () => {
    navigate({
      pathname: "/FormPayment",
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

  return (
    <Box
      sx={{
        width: "75%",
        height: "82vh",
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
      }}
    >
      <h1 style={{ color: "black" }}>Gestionar Pagos</h1>
      <br />
      <div className="barraBusqueda">
        <input
          type="text"
          placeholder="Search"
          className="textField"
          name="busqueda"
          value={search}
          onChange={handleChange}
        />
        <button type="button" className="btnBuscar">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: green[500], height: "45px", width: "45px" }}>
              <PageviewIcon />
            </Avatar>
          </Stack>
        </button>
      </div>
      <Button
        sx={{
          bgcolor: green[500],
          height: "50px",
          width: "150px",
          color: "black",
        }}
        startIcon={<AddIcon />}
        onClick={OnclickInsertar}
      >
        Añadir Pago
      </Button>
      <br></br>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={paymentsaux.map((item) => ({
            id: item.id,
            paymentPayCode: item.payCode,
            paymentOwnerName: item.ownerName,
            paymentOwnerCard: item.ownerCard,
            paymentDate: item.date,
            paymentValue: item.value,
            paymentState: item.payState,
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
};
export default Payment;
