import axios from "axios";

export const getRepositories = (username, per_page, sort) => {
  return axios.get(
    `http://localhost:8080/api/users/repo?per_page=${per_page}&sort=${sort}&username=${username}`
  );
};
