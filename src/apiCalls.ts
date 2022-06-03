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

// ADD POST

export const postPost = (post: string, img: FileList, encodedToken: string) => {
  const formData = new FormData();
  formData.set("content", post);
  formData.set("img", img[0]);

  return axios.post("/api/posts", formData, {
    headers: {
      authorization: encodedToken,
    },
  });
};

// LIKE POST

export const likePost = (postId: string, encodedToken: string) => {
  console.log(postId, encodedToken);
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
  console.log(postId, encodedToken);
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
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

// BOOKMARK

export const removeBookmark = (postId: string, encodedToken: string) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};
