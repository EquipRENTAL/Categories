import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("http://localhost:3001/api/");
  },
  // Gets the book with the given id
  getItems: function(id) {
    return axios.get("http://localhost:3001/api/" + id);
  },
  // Deletes the book with the given id
  deleteItems: function(id) {
    return axios.delete("api/" + id);
  },
  // Saves a book to the database
  saveItems: function(bookData) {
    return axios.post("api/", bookData);
  }
};
