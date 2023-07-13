import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../css/index.css";
import "../css/style.css";
import DeleteData from "./DeleteData";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "universal-cookie";
import { green } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useNavigate } from "react-router";

const cookies = new Cookies();

const Owner = (props) => {
  const owners = props.owners;
  const deleteRegister = props.deleteRegister;
  const editRegister = props.updateOwnerRegister;
  const ownersOnly = owners.filter(
    (item) =>
      item.ownerType !== "admin" &&
      item.ownerUsername !== cookies.get("username")
  );
  const navigate = useNavigate();

  const [ownersaux, setOwnersaux] = useState([]); 
  const [tablaOwners, setTablaOwner] = useState([]);
  const [search, setSearch] = useState();

  const handleDeleteRegister = (id) => {
    deleteRegister(id);
  };

  const columns = [
    { field: "ownerCard", headerName: "Identification Card", width: 150 },
    { field: "ownerName", headerName: "Full Name", width: 120 },
    { field: "ownerLastName", headerName: "Full Surname", width: 120 },
    { field: "ownerTelephone", headerName: "Telephone", width: 120 },
    { field: "ownerEmail", headerName: "Email", width: 190 },
    { field: "ownerUsername", headerName: "Username", width: 150 },
    { field: "ownerPassword", headerName: "Password", width: 150 },
    { field: "ownerNumberHouse", headerName: "Numer House", width: 120 },
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
        </div>
      ),
    },
  ];

  const peticion = () => {
    setOwnersaux(ownersOnly);
    setTablaOwner(ownersOnly);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    filtrar(e.target.value);
  };

  const filtrar = (itemSearch) => {
    var ownerSearch = tablaOwners.filter((item) => {
      if (item.ownerName.toLowerCase().includes(itemSearch.toLowerCase())) {
        return item;
      }
    });
    setOwnersaux(ownerSearch);
  };

  const OnclickInsertar = () => {
    navigate({
      pathname: "/FormOwner",
    });
  };

  useEffect(() => {
    peticion();
  }, [owners]);

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
      <h1 style={{ color: "black" }}>Owner's Data</h1>
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
        Add Owner
      </Button>
      <br></br>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={ownersaux.map((item) => ({
            id: item.id,
            ownerCard: item.ownerCard,
            ownerName: item.ownerName,
            ownerLastName: item.ownerLastName,
            ownerTelephone: item.ownerTelephone,
            ownerEmail: item.ownerEmail,
            ownerUsername: item.ownerUsername,
            ownerPassword: item.ownerPassword,
            ownerNumberHouse: item.ownerNumberHouse,
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
};
export default Owner;
