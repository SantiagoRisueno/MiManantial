import React, { useEffect } from "react";
import rio from "./../images/rio.jpg";
import rio2 from "./../images/rio2.jpg";
import entrada from "./../images/entrada.jpg";
import HeaderUser from "./HeaderUser";
import EventsHome from "./EventsHome";
import Cookies from "universal-cookie";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
          <Typography  variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>INICIO</Typography>
      </Breadcrumbs> 
      <br />
      <div className=" container item ">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              textColor="success"
              indicatorColor="primary"
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Bienvenidos" {...a11yProps(0)} />
              <Tab label="Imagenes" {...a11yProps(1)} />
              <Tab label="Actividades" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-sm">
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Estamos felices de verte de nuevo...
                      </Typography>
                      <Typography variant="h5" component="div">
                        {bull}Urbanización - El Manantial{bull}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Recuerda:
                      </Typography>
                      <Typography variant="body2">
                      Nos alegra que formes parte de esta maravillosa urbanización llamada Manantial donde podrás realizar pagos, próximos eventos, ver los pagos, etc. Recuerda que nosotros nos encargamos del cuidado de las áreas comunes dentro de la urbanización, recuerda salir mejor de lo que encontrar.
 <br />Disfruta tu visita.
                        <br />
                        {'"Atentamente: La Administración"'}
                      </Typography>
                    </CardContent>
                  </Card>
                  <br />
                </div>
                <div class="col-sm">
                  <img
                    className="d-block w-75"
                    src={entrada}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-sm">
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Estamos felices de verte de nuevo...
                      </Typography>
                      <Typography variant="h5" component="div">
                        {bull}Urbanización - El Manantial{bull}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Recuerda:
                      </Typography>
                      <Typography variant="body2">
                      Nos alegra que formes parte de esta maravillosa urbanización llamada Manantial donde podrás realizar pagos, próximos eventos, ver los pagos, etc. Recuerda que nosotros nos encargamos del cuidado de las áreas comunes dentro de la urbanización, recuerda salir mejor de lo que encontrar.
 <br />Disfruta tu visita.
                        <br />
                        {'"Atentamente: La Administración"'}
                      </Typography>
                    </CardContent>
                  </Card>
                  <br />
                </div>
                <div class="col-sm">
                  <img className="d-block w-75" src={rio2} alt="First slide" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-sm">
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Estamos felices de verte de nuevo...
                      </Typography>
                      <Typography variant="h5" component="div">
                        {bull}Urbanización - El Manantial{bull}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Recuerda:
                      </Typography>
                      <Typography variant="body2">
                      Nos alegra que formes parte de esta maravillosa urbanización llamada Manantial donde podrás realizar pagos, próximos eventos, ver los pagos, etc. Recuerda que nosotros nos encargamos del cuidado de las áreas comunes dentro de la urbanización, recuerda salir mejor de lo que encontrar.
 <br />Disfruta tu visita.
                        <br />
                        {'"Atentamente: La Administración"'}
                      </Typography>
                    </CardContent>
                  </Card>
                  <br />
                </div>
                
                <div class="col-sm">
                  <img className="d-block w-75" src={rio} alt="First slide" />
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      <br />
      <EventsHome />
    </div>
  );
};
export default Home;
