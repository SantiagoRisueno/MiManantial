import FormOwner from "./FormOwner";
import { saveUser as saveOwner } from "../services/userAxios";
import "../css/index.css";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const cookies = new Cookies();

const UserLayout = () => {
  const [gyms, setGyms] = useState([]);

  const [values, setValues] = useState({
    name: "",
    userName: "",
    lastName: "",
    password: "",
    idCard: "",
    email: "",
    type: 0,
    gym: "",
  });

  const handleSubmit = (data) => {
    saveOwner(data, values, setValues);
  };

  useEffect(() => {
    if (typeof cookies.get("userName") === "undefined") {
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
