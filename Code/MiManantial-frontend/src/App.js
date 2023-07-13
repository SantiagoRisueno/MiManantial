import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Login from "./components/Login";
import OwnerController from "./components/OwnerController";
import PaymentControllerAdmin from "./components/PaymentControllerAdmin";
import PaymentControllerUser from "./components/PaymentControllerUser";
import HeaderAdmin from "./components/HeaderAdmin";
import FormOwner from "./components/FormOwner";
import FormPayment from "./components/FormPayment";
import Account from "./components/Account";
import AccountUpdate from "./components/AccountUpdate";
import EventsAdmin from "./components/EventsAdmin";
import EventsAdminRest from "./components/EventsAdminRest";
import EventsUserRest from "./components/EventsUserRest";
import EventsDetails from "./components/EventsDetails";
import AddEvents from "./components/AddEvents";
import EventsUser from "./components/EventsUser";
import EditOwner from "./components/EditOwner";
import Home from "./components/Home";
import MenuPayment from "./components/MenuPayment";
import PaymentPendingControllerUser from "./components/PaymentPendingControllerUser";
import EventsDetailsUser from "./components/EventsDetailsUser";
import PaymentProcessControllerUser from "./components/PaymentProcessController";
import PaymentCanceledControllerUser from "./components/PaymentCanceledController";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EventsAdmin" element={<EventsAdmin />} />
        <Route path="/EventsUser" element={<EventsUser />} />
        <Route path="/EventsDetailsUser" element={<EventsDetailsUser />} />
        <Route path="/EventsAdminRest" element={<EventsAdminRest />} />
        <Route path="/EventsUserRest" element={<EventsUserRest />} />
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/AddEvents" element={<AddEvents />} />
        <Route path="/OwnerController" element={<OwnerController />} />
        <Route
          path="/PaymentControllerAdmin"
          element={<PaymentControllerAdmin />}
        />
        <Route
          path="/PaymentControllerUser"
          element={<PaymentControllerUser />}
        />
        <Route path="/HeaderAdmin" element={<HeaderAdmin />} />
        <Route path="/FormOwner" element={<FormOwner />} />
        <Route path="/EditOwner" element={<EditOwner />} />
        <Route path="/FormPayment" element={<FormPayment />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accountUpdate" element={<AccountUpdate />} />
        <Route path="/MenuPayment" element={<MenuPayment />} />
        <Route
          path="/PaymentControllerPending"
          element={<PaymentPendingControllerUser />}
        />
        <Route
          path="/PaymentProcessControllerUser"
          element={<PaymentProcessControllerUser />}
        />
        <Route
          path="/PaymentCanceledControllerUser"
          element={<PaymentCanceledControllerUser />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
