import React, { Component } from "react";
import EventsItemHome from "./EventsItemHome";
import Cookies from "universal-cookie";
import { getEvents} from "../services/eventAxios";

const cookies = new Cookies();

class EventsHome extends Component {
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
      <div className="container item">
        <br />
        <h2> Actual Events :</h2>
        <br />
        <div className="row justify-content-md-center ">{eventItems}</div>
        <br />
      </div>
    );
  }
}

export default EventsHome;
