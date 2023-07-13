import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";

const Item = ({ item, deleteItem }) => {
  return (
    <div className=" col-sm-10">
      <p>{item.date}</p>
      <div className="row item">
        <div className="col-sm-1">
          <EventIcon color="primary" fontSize="large" />
          <p>{item.time}</p>
        </div>

        <div className="col-sm-6">
          <h5>EVENT NAME: {item.title}</h5>
          <p>Description of the Event: {item.category}</p>
        </div>
        <div className="col-sm-2 align-self-center p-2 text-center">
          <Button variant="outlined" startIcon={<EditIcon color="primary" />}>
            Edit
          </Button>
        </div>
        <div className="col-sm-1 align-self-center p-2 text-center">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Item;
