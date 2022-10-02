import axios from "axios";
import { API_KEY, API_URL } from "../constants";

export function getRegiones() {
  return axios
    .post(API_URL, {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getAreas",
      methodProperties: {
        Page: 1,
        Limit: 500,
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
      Limit: 10,
      Page: 1,
    },
  });
}

export function getOffices(ref, page) {
  return axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      SettlementRef: ref,
      Page: page,
      Limit: 10
      // TypeOfWarehouseRef:
    },
  });
}

export function getWarehouseTypes() {
  return axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouseTypes",
    methodProperties: {   }
  });
}

export function getStatusTTN(TTN){
  return axios.post(API_URL, {
      apiKey: API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: TTN,
            Phone: "380600000000"
          }
        ]
      }
  })
}
