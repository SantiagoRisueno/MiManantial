import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getEvents() {
  try {
    const response = await axios({
      url: `${baseUrl}/events`,
      method: "GET",
    });

    return response;

  } catch (error) {
    console.log(error.message);
    alert("Connection problems.\n" + error.message);
  }
}


export async function saveEvent(eventData) {
  try {
    const response = await axios({
      url: `${baseUrl}/events`,
      method: "POST",
      data: eventData,
    });

    return response;

  } catch (error) {
    console.log(error);
    alert("Connection problems.\n" + error.message);
  }
}

export async function deleteEvent(event) {
  const response = await axios
    .delete(`${baseUrl}/events/${event}`)
    .then((response) => {
      alert("Event Eliminated");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("Connection problems.\n" + error.message);
    });
}

export async function updateEvent(values) {
  console.log(values.id);
  const response = await axios
    .put(`${baseUrl}/events/${values.id}`, {
      id: values.id,
      name: values.name,
      description: values.description,
      date: values.date,
      hour: values.hour
    })
    .then((response) => {
      window.alert("Update event");
    })
    .catch((error) => {
      console.log(error);
    });
}
