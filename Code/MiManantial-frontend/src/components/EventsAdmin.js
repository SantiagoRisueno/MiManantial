import React, { useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import Items from "./Items";
import AddItem from "./AddItem.jsx";
import "../css/App.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function EventsAdmin() {
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

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newItem = { id, ...item };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (typeof cookies.get("username") === "undefined") {
      window.location.href = "./";
    }
  });

  useEffect(() => {
    if (cookies.get("ownerType") === "owner") {
      window.location.href = "./account";
    }
  });

  return (
    <div>
      <HeaderAdmin />
      <div className="row justify-content-center container">
        <AddItem addItem={addItem} />
        <Items items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default EventsAdmin;
