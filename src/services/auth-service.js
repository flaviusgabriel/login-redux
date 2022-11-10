import axios from "axios";

const API_URL = "https://api-nodejs-todolist.herokuapp.com/user/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      //   if (response.data.accessToken) {
      //     localStorage.setItem("user", JSON.stringify(response.data));
      //   }
      console.log(response);

      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
