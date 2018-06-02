import axios from "axios";

export default {
  // send user data to server
  postRegData: function() {
    axios.post("localhost:3001/register");
  }  
};