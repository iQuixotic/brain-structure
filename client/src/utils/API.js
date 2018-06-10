import axios from "axios";

export default {

  // send user data to db
  postRegData: function(data) {
    console.log('im posting it');
   return axios.post("/register", data);
  },  

   // request disorders names from db
   getDisData: function() {
    console.log('im getting disorders');
   return axios.get("/disorders/list");
  },  

   // request specific disorder information from db
   getThisDisData: function(data) {
    console.log('im getting schizophrenia');
   return axios.get("/disorders/:name", data);
  },

  // request all cards (public) from db
  getAllPublicCards: function() {
  console.log('im getting all public cards');
  return axios.get("/cards/public");
  },

};