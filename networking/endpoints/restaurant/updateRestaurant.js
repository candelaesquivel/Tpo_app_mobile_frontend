import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function updateRestaurant(restoId = '', restoData = {}){

  const URL = URL_SERVICES.UPDATE_RESTAURANT.replace('id', restoId);

  return axios.patch(URL, restoData)
  .then(response => {
    return response.data;
  }).catch(error => {
    console.log(CONSTANTS.ERROR_MSGS.ERROR_UPDATE_REST, error.response.data);
  })
  
}