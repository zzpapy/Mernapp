import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8000";

export default {
  login: function(email, password, nom) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  upload: function(photo) {
    console.log(photo)
    return axios.post(
      `${burl}/user/upload`,
      {
        photo : photo,
        user : JSON.parse(localStorage.user)._id
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};