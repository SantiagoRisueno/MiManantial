import React, { Component } from "react";
import EventIcon from "@mui/icons-material/Event";
import Cookies from "universal-cookie";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cookies = new Cookies();

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

class EventsItemHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }

  componentDidMount() {

    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <div className="col-xl-3 event ">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <h4>
                <EventIcon color="success" fontSize="large" />
                Event Id: {this.state.item.id}{" "}
              </h4>
            </Typography>
            <Typography variant="h5" component="div">
              {bull} {this.state.item.name} {bull}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Description of the Event:
            </Typography>
            <Typography variant="body2">
              {this.state.item.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Date and Hour:
            </Typography>
            <Typography variant="body2">
              {this.state.item.date}
              <br />
              {this.state.item.hour}
            </Typography>
          </CardContent>
        </Card>
        <br />
      </div>
    );
  }
}
export default EventsItemHome;
