import axios from "axios";
import * as API from "../serverApi";

const API_URL = API.API_URL_ORIGIN + "auth/";

const register = (username, role, password) => {
  return axios.post(API_URL + "signup", {
    username,
    role,
    password,
  });
};

const signIn = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("userAuth", true);
      }

      return response.data;
    });
};

const signOut = () => {
  localStorage.removeItem("userAuth");
  localStorage.removeItem("user");
};

let authService = {
  register,
  signIn,
  signOut,
}

export default authService;
