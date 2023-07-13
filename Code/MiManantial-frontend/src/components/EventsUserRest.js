import React, { Component } from "react";
import HeaderUser from "./HeaderUser";
import axios from "axios";
import EventsItemHome from "./EventsItemHome";
import Cookies from "universal-cookie";
import {Breadcrumbs} from "@mui/material"
import {Link} from "@mui/material"
import {Typography} from "@mui/material"
import { getEvents} from "../services/eventAxios";

const cookies = new Cookies();

class EventsUserRest extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEvents();
 
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }

    if (cookies.get("ownerType") === "admin") {
      window.location.href = "./OwnerController";
    }
  }

  async getEvents() {
    try{
      const response = await getEvents();
      this.setState({ events: response.data }, () => {
     
      });

    }catch(error){
      console.log(error.message);
    }
  }

  render() {
    const eventItems = this.state.events.map((event, i) => {
      return <EventsItemHome key={event.id} item={event} />;
    });

    return (
      <div className="">
        <HeaderUser />
        <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>Actual Events</Typography>
        </Breadcrumbs>
        <br />
        <div className="container item text-center">
          <h2> Actual Events:</h2>
          <br />
          <div className="row justify-content-md-center">{eventItems}</div>
          <br />
        </div>
      </div>
    );
  }
}

export default EventsUserRest;
