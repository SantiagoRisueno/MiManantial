import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EventIcon from "@mui/icons-material/Event";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const cookies = new Cookies();

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("cardIdentification", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("lastName", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("telephone", { path: "/" });
    console.log(cookies.get("id"));
    navigate({
      pathname: "/",
    });
  };

  return (
    <div
      class="collapse navbar-collapse col-5 align-self-center"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item col-sm-5">
          <Button
            href="/OwnerController"
            className="buttonMenu"
            startIcon={<SupervisedUserCircleIcon fontSize="medium" />}
          >
            Gestionar Propietarios
          </Button>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item col-sm-5">
          <Button
            href="/PaymentControllerAdmin"
            className="buttonMenu"
            startIcon={<LocalAtmOutlinedIcon fontSize="medium" />}
          >
            Gestionar Pagos
          </Button>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item col-sm-5">
          <Button
            href="/EventsAdminRest"
            className="buttonMenu"
            startIcon={<EventIcon fontSize="medium" />}
          >
            Gestionar Eventos
          </Button>
        </li>
      </ul>
      <div class="d-flex dropdown">
        <Avatar sx={{ width: 32, height: 32, background: "#1C1A1A" }}>A</Avatar>

        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item btn" onClick={cerrarSesion}>
            Cerrar Sesión
          </li>
        </ul>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}
