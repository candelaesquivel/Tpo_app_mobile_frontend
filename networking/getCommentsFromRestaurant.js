import axios from "axios";
import URL_SERVICES from "../config/config";

async function getCommentsFromRestaurant(restaurantId) {

    const url = URL_SERVICES.COMMENT_LIST.replace('restaurantId', restaurantId);

    return axios.get(url).then( (response) => {
      
      let comments = []

      response.data.forEach((itr, idx) => {
        comments.push({
          user : itr.name,
          rating : itr.rating,
          comment : itr.comment,
          idx : idx
        });
      });
      return comments;
  
    }).catch(err =>{
      console.err(err);
      return [];
    }).finally(() => {
     
    })
  }
export default getCommentsFromRestaurant;