import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getPayment() {
  try {
    const response = await axios({
      url: `${baseUrl}/payments`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPayment2() {
  try {
    const response = await axios({
      url: "http://localhost:4000/manantial-api/payments",
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function savePayment(paymentData) {
  try {
    const response = await axios({
      url: `${baseUrl}/payments`,
      method: "POST",
      data: paymentData,
    });
    
    return response;
    

  } catch (error) {
    console.log(error);
    alert("Connection problems.\n" + error.message);
    
  }
}

export async function deletePayment(payment) {
  const response = await axios
    .delete(`${baseUrl}/payments/${payment}`)
    .then((response) => {
      window.alert("payment Eliminated");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function updatePayment(values) {
  console.log(values.id);
  const response = await axios
    .put(`${baseUrl}/payments/${values.id}`, {
      id: values.id,
      payCode: values.payCode,
      ownerName: values.ownerName,
      ownerCard: values.ownerCard,
      date: values.date,
      value: values.value,
      payState: values.payState,
    })
    .then((response) => {
      window.alert("Update payment");
    })
    .catch((error) => {
      console.log(error);
    });
}
