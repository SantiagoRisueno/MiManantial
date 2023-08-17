import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import SvgIcon from "@mui/material/SvgIcon";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EventIcon from "@mui/icons-material/Event";

const cookies = new Cookies();

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function AccountMenu() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("cardIdentification", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("lastName", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("telephone", { path: "/" });
    cookies.remove("ownerType", { path: "/" });

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
            href="/Home"
            className="buttonMenu"
            startIcon={<HomeIcon fontSize="small" />}
          >
            Inicio
          </Button>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item col-sm-5">
          <Button
            href="/MenuPayment"
            className="buttonMenu"
            startIcon={<LocalAtmOutlinedIcon fontSize="small" />}
          >
            PAGOS
          </Button>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item col-sm-5">
          <Button
            href="/EventsUserRest"
            className="buttonMenu"
            startIcon={<EventIcon fontSize="small" />}
          >
            EVENTOS
          </Button>
        </li>
      </ul>
      <div class="d-flex dropdown">
        <Avatar sx={{ width: 32, height: 32, background: "#1C1A1A" }}>U</Avatar>

        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item btn nav-link">
            <Link to="/account">
              <Avatar /> Mi cuenta
            </Link>
          </li>
          <Divider />
          <li className="dropdown-item btn" onClick={cerrarSesion}>
            Cerrar Sesión
          </li>
        </ul>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}
