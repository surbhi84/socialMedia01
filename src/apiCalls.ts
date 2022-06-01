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

function stringifyFileObject(arrWithFiles: FileList) {
  const arrData = [];
  for (let i = 0; i < arrWithFiles.length; i++) {
    const file = arrWithFiles[i];
    const obj = {
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
      webkitRelativePath: file.webkitRelativePath,
    };
    arrData.push(obj);
  }
  return arrData;
}

export const postPost = (post: string, img: FileList, encodedToken: string) => {
  console.log(img, "hulk");
  return axios.post(
    "/api/posts",
    { postData: { content: post, img } },
    { headers: { authorization: encodedToken } }
  );
};

// LIKE POST

export const likePost = (postId: string, encodedToken: string) => {
  console.log(postId, encodedToken);
  return axios.post(`/api/posts/like/${postId}`, {
    headers: { authorization: encodedToken },
  });
};

// DISLIKE POST

export const dislikePost = (postId: string, encodedToken: string) => {
  return axios.post(`/api/posts/dislike/${postId}`, {
    headers: { authorization: encodedToken },
  });
};
