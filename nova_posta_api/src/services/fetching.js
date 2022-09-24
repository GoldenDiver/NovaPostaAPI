import axios from "axios";
import { API_KEY, API_URL } from "../constants";

export function getRegiones() {
  return axios
    .post(API_URL, {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getAreas",
      methodProperties: {
        Page: "1",
        Limit: "500",
      },
    })
    .then((resp) => resp.data);
}

export function getCityes(city) {
  return axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "searchSettlements",
    methodProperties: {
      CityName: city,
      Limit: 500,
      Page: 1,
    },
  });
}

export function getStreets(city, street) {
  return axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "searchSettlementStreets",
    methodProperties: {
      StreetName: street,
      SettlementRef: city,
    },
  });
}
