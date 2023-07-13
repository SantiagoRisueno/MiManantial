import React, { Component } from "react";
import HeaderAdmin from "./HeaderAdmin";
import axios from "axios";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import Cookies from "universal-cookie";
import { getEvents} from "../services/eventAxios";

const cookies = new Cookies();

class EventsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
    };
  }

  async getEvent() {
    try{
      const response = await getEvents();
      this.setState({ events: response.data }, () => {
      });

    }catch(error){
      console.log(error.message);
    }
  }

  render() {
    return (
      <div className="">
        <HeaderAdmin />
        <div className="container p-4">
          <Button
            href="/EventsAdminRest"
            className="btn-back"
            variant="contained"
            color="success"
            startIcon={<ArrowBackIosIcon />}
          >
            BACK
          </Button>
          <br />
          <br />
          <h1>{this.state.details.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">
              Description: {this.state.details.description}
            </li>
            <li className="list-group-item">Date: {this.state.details.date}</li>
            <li className="list-group-item">Hour: {this.state.details.hour}</li>
            <br />

            <div className="row col-sm-10 align-self-left ">
              <div className="col-sm-2 align-self-left  text-center">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
export default EventsDetails;
