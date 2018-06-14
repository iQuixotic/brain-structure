import axios from "axios";

export default {

  // send user data to db
  postRegData: function(data) {
    console.log('im posting it');
   return axios.post("/register", data);
  },  

   // request disorders names from db
   getDisData: function() {
   return axios.get("/disorders/list");
  },  

   // request specific disorder information from db
   getThisDisData: function(data) {
   return axios.get("/disorders/:name", data);
  },

  // request all cards (public) from db
  getAllPublicCards: function() {
  return axios.get("/cards/public");
  },

  // get first card from public cards
  getCard: function() {
    return axios.get("/cards/public/one");
  },

  // get next card
  getNextCard: function(id) {
    return axios.get("/cards/public/" + id); 
  }, 

  // get last card
  getLastCard: function(id) {
    return axios.get("/cards/public/" + id);
  },

  // delete a single card from the database
  deleteCard: function(id) {
  return axios.delete("/cards/public/" + id);
  },

  // associate a card from the cards page with a user
  addCardById: function(data) {
  return axios.post("/cards/user/" + data.id, data);
  },

  createCard: function(arg, arg2) {
    console.log('i do it')
    return axios.post('cards/public')
  }
 
};