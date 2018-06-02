import axios from "axios";

export default {
  // send user data to db
  postRegData: function(data) {
    console.log('im posting it');
   return axios.post("/register", data);
  }  
};