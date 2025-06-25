"use server";

import axios from "axios";

export async function subscribeNewsLetter(prevState, formData) {
  const subscriberEmail = formData.get("email");

  if (!subscriberEmail.includes("@")) {
    return {
      message: "Please enter a valid email address.",
    };
  }

  const response = await axios.post(`${process.env.SERVER_URL}/api/email`, {
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
  const name = formData.get("name");
  const partnerEmail = formData.get("email");
  const phoneNumber = formData.get("phone_number");
  const partnerWebsite = formData.get("website");
  const partnerTiktokShop = formData.get("shop_link");
  const revenue = formData.get("revenue");
  const isProductHalal = formData.get("is_product_halal");
  const partnerMessage = formData.get("partner_message");

  if (
    isInvalidText(name) ||
    !partnerEmail.includes("@") ||
    isInvalidText(phoneNumber) ||
    isInvalidText(partnerWebsite) ||
    isInvalidText(revenue) ||
    isInvalidText(isProductHalal) ||
    isInvalidText(partnerMessage)
  ) {
    return {
      message: "Please fill every field with valid input.",
    };
  }

  const partnerRequest = {
    name,
    email: partnerEmail,
    phoneNumber,
    website: partnerWebsite,
    tiktokShop: partnerTiktokShop,
    revenue,
    isProductHalal,
    message: partnerMessage,
  };

  const response = await axios.post(`${process.env.SERVER_URL}/api/email`, {
    type: "partnerWithAffilyit",
    partnerRequest,
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

function isInvalidText(text) {
  return !text || text.trim() === "";
}
