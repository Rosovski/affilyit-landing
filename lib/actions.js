"use server";

import axios from "axios";

export async function subscribeNewsLetter(prevState, formData) {
  const subscriberEmail = formData.get("email");

  if (!subscriberEmail.includes("@")) {
    return {
      message: "Please enter a valid email address.",
    };
  }

  const response = await axios.post(`http:localhost:3001/api/email`, {
    type: "subscribeNewsLetter",
    email: subscriberEmail,
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

export async function partnerWithUs(prevState, formData) {
  const partnerEmail = formData.get("email");
  const name = formData.get("name");

  console.log("name: ", name);

  if (!isInvalidText(name) || !partnerEmail.includes("@")) {
    return {
      message: "Please fill every field with valid input.",
    };
  }

  return {
    message: "Success!",
  };
}

function isInvalidText(text) {
  return !text || text.trim() === "";
}
