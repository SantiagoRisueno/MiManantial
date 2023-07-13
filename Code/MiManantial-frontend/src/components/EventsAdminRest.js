import React, { useEffect, useState, Component } from "react";
import HeaderAdmin from "./HeaderAdmin";
import axios from "axios";
import EventsItem from "./EventsItem";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import Cookies from "universal-cookie";
import {Breadcrumbs} from "@mui/material"
import {Typography} from "@mui/material"
import { getEvents, deleteEvent, updateEvent } from "../services/eventAxios";

const cookies = new Cookies();

class EventsAdminRest extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      id: "",
    };
  }

  componentDidMount() {
    this.getEvents();

    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }

    if (cookies.get("ownerType") === "owner") {
      window.location.href = "./account";
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
  

  onChangeEventId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  async deleteData (id) {
    await deleteEvent(id)

  }
  updateRegister = async (values) => {
    await updateEvent(values);
  };


  onSubmit = (e) => {
    
    try{
      this.deleteData();

    }catch(error){
      console.log(error.message);
    }
  };

  render() {
    const eventItems = this.state.events.map((event) => {
      return <EventsItem key={event.id} item={event} editData= {this.updateRegister} deleteData = {this.deleteData}/>;
    });

    return (
      <div className="">
        <HeaderAdmin /> 
        <Breadcrumbs aria-label="breadcrumb">
          <Typography  variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>Events Created</Typography>
        </Breadcrumbs>
        <br></br>
        <div className="container item">
          <div className="col-sm-12 p-4 text-center">
            <h2 className="p-2 ">Events Created</h2>
            <Button
              variant="contained"
              className="btn-back "
              href="/AddEvents"
              color="success"
              startIcon={<AddIcon />}
              sx={{ bgcolor: green[500] }}
            >
              Add Event
            </Button>
          </div>

          <div className="row justify-content-md-center ">{eventItems}</div>
          <br />
        </div>
      </div>
    );
  }
}

export default EventsAdminRest;
