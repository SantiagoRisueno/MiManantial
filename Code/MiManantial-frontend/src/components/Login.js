import "../css/Login.css";
import "../css/index.css";
import * as React from "react";
import {getOwner} from '../services/ownerAxios'
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack"
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [users, setUsers] = React.useState([])
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await getOwner()

      if (response.status === 200) {
          setUsers(response.data)
      }

      var dataUser = ""
      var bolUsername = 0
      var bolPassword= 0

      for (var i = 0; i < users.length; i++) {
        if (
          users[i].ownerUsername === username &&
          users[i].ownerPassword === password
        ) {
          dataUser = users[i];
        }
        if ( users[i].ownerUsername !== username) {
          bolUsername = 1
        }else{
          if ( users[i].ownerPassword !== password) {
            bolPassword = 1
          }
        }
      }

      if (dataUser !== "") {
        cookies.set("id", dataUser.id, { path: "/" });
        cookies.set("cardIdentification", dataUser.ownerCard, { path: "/" });
        cookies.set("name", dataUser.ownerName, { path: "/" });
        cookies.set("lastName", dataUser.ownerLastName, { path: "/" });
        cookies.set("username", dataUser.ownerUsername, { path: "/" });
        cookies.set("email", dataUser.ownerEmail, { path: "/" });
        cookies.set("telephone", dataUser.ownerTelephone, { path: "/" });
        cookies.set("numberHouse", dataUser.ownerNumberHouse, { path: "/" });
        cookies.set("ownerType", dataUser.ownerType, { path: "/" });

        if (dataUser.ownerType === "admin" && cookies.get("username") !== "") {
          alert("Welcome to your account " + cookies.get("name"));
          navigate(
            {
              pathname: "/OwnerController",
            },
            {
              state: { dataUser },
            }
          );
        } else if (
          dataUser.ownerType === "owner" &&
          cookies.get("username") !== ""
        ) {
          alert("Welcome to your account " + cookies.get("name"));
          navigate(
            {
              pathname: "/home",
              hash: dataUser.id,
            },
            {
              state: { dataUser },
            }
          );
        }
      } else {

        if(bolPassword === 1){
          alert("Wrong password");

        }else{
          if(bolUsername === 1){
            alert("Wrong username");
          }
        }
      }
    } catch (error) {
      console.log(error.message);
      alert("Connection problems.\n" + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
        className="LogIn-header"
      >
        <div className="LogIn-login">
          <center>
            <h1>Login</h1>
          </center>
          <div md={12} className="LogIn-margen">
            <Stack direction="row" spacing={5}>
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                sx={{ width: 80, height: 80 }}
              />
            </Stack>
          </div>

          <div md={12}>
            <FormControl
              sx={{ m: 1, width: 300, maxWidth: "100%" }}
              variant="outlined"
            >
              <TextField
                id="username"
                name="username"
                variant="filled"
                label="Username"
                color="success"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
          </div>

          <div md={12}>
            <FormControl
              sx={{ m: 1, width: 300, maxWidth: "100%" }}
              variant="outlined"
            >
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="filled"
                color="success"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </div>

          <div md={12}>
            <center>
              <Button
                sx={{ m: 4 }}
                variant="contained"
                color="success"
                type="submit"
                endIcon={<SendIcon />}
                size="large"
              >
                Log in
              </Button>
            </center>
          </div>
        </div>
      </Box>
    </form>
  );
}

export default Login;
