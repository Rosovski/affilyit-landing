"use server";

import axios from "axios";

export async function subscribeNewsLetter(prevState, formData) {
  const email = formData.get("email");

  if (!email.includes("@")) {
    return {
      message: "Please enter a valid email address.",
    };
  }

  const response = await axios.post(`http:localhost:3001/api/email`, {
    type: "subscribeNewsLetter",
    email,
  });

  if (response.status !== 200 && response.status !== 201) {
    return {
      message: "Failed to subscribe. Please try again later.",
    };
  }

  return {
    message: response.data.message,
  };
}
