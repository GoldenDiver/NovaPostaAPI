import axios from "axios";
import { API_KEY, API_URL } from "../constants";

export function getItems() {
  return axios
    .post(API_URL, {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {},
        system:"DevCentre"
    })
    .then((resp) => resp.data);
}
