import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const DeleteData = (props) => {
  const index = props.index;
  const handleDeleteRegister = props.handleDeleteRegister;

  const handleDeleteClick = () => {
    const option = window.confirm("¿Desea eliminar un propietario?");

    if (option === true) {
      handleDeleteRegister(index);
    }
  };

  return (
    <IconButton
      color="secondary"
      aria-label="add an alarm"
      onClick={handleDeleteClick}
    >
      <DeleteIcon
        style={{
          color: "#e91e63",
        }}
      />
    </IconButton>
  );
};
export default DeleteData;
