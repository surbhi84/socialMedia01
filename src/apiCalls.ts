import axios from "axios";

// LOGIN
export const loginCall = (username: string, password: string) => {
  return axios.post("/api/auth/login", { username, password });
};

// SIGNUP

export const signupCall = (
  username: string,
  password: string,
  email: string
) => {
  return axios.post("/api/auth/signup", { username, password, email });
};

// GET USERS

export const getUsers = () => {
  return axios.get("/api/users");
};

// GET POSTS

export const getPosts = () => {
  return axios.get("/api/posts");
};
