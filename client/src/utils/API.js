import axios from "axios";

export default {
  // send user data to server
  postRegData: function() {
    axios.post("/register");
  }  
};