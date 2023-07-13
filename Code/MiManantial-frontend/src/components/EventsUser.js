import React, { useEffect, useState, Component } from "react";
import HeaderUser from "./HeaderUser";
import Items from "./Items";
import "../css/App.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function EventsUser() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Board Meeting",
      category: "we gonna meet...",
      day: "Mon",
      time: "18:00",
      date: "03/05/2021",
    },
    {
      id: 2,
      title: "Board Meeting",
      category: "we gonna meet...",
      day: "Mon",
      time: "18:00",
      date: "03/05/2021",
    },
    {
      id: 3,
      title: "Board Meeting",
      category: "we gonna meet...",
      day: "Mon",
      time: "18:00",
      date: "04/05/2021",
    },
    {
      id: 4,
      title: "Board Meeting",
      category: "we gonna meet...",
      day: "Mon",
      time: "18:00",
      date: "05/05/2021",
    },
  ]);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
      <div className="row justify-content-center container">
        <Items items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default EventsUser;
