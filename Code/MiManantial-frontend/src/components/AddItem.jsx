import Button from "@mui/material/Button";
import { useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";

const AddItem = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();

  const onSubmitItem = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please, insert the Event Name");
      return;
    }
    if (!category) {
      alert("Please, insert the description for yout event");
      return;
    }
    if (!date) {
      alert("Please, insert the date for your event");
      return;
    }
    if (!time) {
      alert("Please, insert the hour for your event");
      return;
    }

    addItem({ title, category, day, date, time });

    setTitle("");
    setCategory("");
  };

  return (
    <div className="col-sm-10">
      <div className="tm-bg-black-transparent">
        <div className="card-header">
          <h2>ADD EVENT</h2>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitItem}>
            <div className="form-group">
              <label>Event Name:</label>
              <br />
              <input
                type="text"
                placeholder="Event Name:"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Description of the Event:</label>
              <br />
              <input
                type="text"
                placeholder="Description....:"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Date:</label>&nbsp;
              <DatePicker
                className="dateField"
                value={date}
                onChange={setDate}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Hour:</label>&nbsp;
              <TimePicker
                className="dateField  "
                value={time}
                onChange={setTime}
              />
            </div>
            <br />
            <center>
              <Button variant="outlined" color="primary">
                ADD
              </Button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
