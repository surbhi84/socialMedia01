import axios from "axios";
import { postType } from "backend/db/posts";

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

// GET USER FROM TOKEN

export const getUserFromToken = (encodedToken: string) =>
  axios.get("/api/auth/tokenlogin", {
    headers: { authorization: encodedToken },
  });

// GET USERS

export const getUsers = () => {
  return axios.get("/api/users");
};

// GET POSTS

export const getPosts = () => {
  return axios.get("/api/posts");
};

// ADD POST

export const postPost = (post: string, img: FileList, encodedToken: string) => {
  const formData = new FormData();
  formData.set("content", post);

  if (Object.keys(img).length > 0) formData.set("img", img[0]);

  return axios.post("/api/posts", formData, {
    headers: {
      authorization: encodedToken,
    },
  });
};

// LIKE POST

export const likePost = (postId: string, encodedToken: string) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

// DISLIKE POST

export const dislikePost = (postId: string, encodedToken: string) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

// DELETE POST
export const deletePost = (postId: string, encodedToken: string) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });
};

// EDIT POST
export const editPost = (
  postId: string,
  content: string,
  img: FileList | string,
  encodedToken: string
) => {
  const formData = new FormData();
  formData.set("content", content);
  formData.set("img", typeof img === "string" ? img : img[0]);
  return axios.post(`/api/posts/edit/${postId}`, formData, {
    headers: { authorization: encodedToken },
  });
};

// ADD POST COMMENT

export const addPostComment = (
  postId: string,
  comment: string,
  encodedToken: string
) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData: { text: comment } },
    {
      headers: { authorization: encodedToken },
    }
  );
};

// GET BOOKMARK

export const getBookmarks = (encodedToken: string) => {
  return axios.get("/api/users/bookmark", {
    headers: { authorization: encodedToken },
  });
};

// ADD BOOKMARK

export const addBookmark = (postId: string, encodedToken: string) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

// REMOVE BOOKMARK

export const removeBookmark = (postId: string, encodedToken: string) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};
