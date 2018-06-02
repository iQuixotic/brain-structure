import axios from "axios";

export default {
  // send user data to server
  postRegData: function(data) {
   return axios.post("/register");
  }  
};