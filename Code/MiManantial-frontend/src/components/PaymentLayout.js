import FormOwner from "./FormPayment";
import { saveUser as savePayment } from "../services/userAxios";
import "../css/index.css";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const cookies = new Cookies();

const UserLayout = () => {
  const [gyms, setGyms] = useState([]);

  const [values, setValues] = useState({
    payCode: "",
    ownerName: "",
    ownerCard: "",
    date: "",
    value: "",
    type: 0,
    gym: "",
  });

  const handleSubmit = (data) => {
    saveOwner(data, values, setValues);
  };

  useEffect(() => {
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  });

  return (
    <>
      <Box class="imgUser">
        <NavBar />
        <br />
        <br />
        <FormOwner
          handleSubmit={handleSubmit}
          gyms={gyms}
          formUserValues={values}
          setFormUservalues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default UserLayout;
