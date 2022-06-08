//@ts-nocheck
import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;

  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );

  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const serializeUser = (server, user) => {
  const serializedFollowers = user.followers.map((username) => {
    return server.db.users.findBy({ username });
  });
  const serializedFollowing = user.following.map((username) => {
    return server.db.users.findBy({ username });
  });

  return {
    ...user,
    followers: serializedFollowers,
    following: serializedFollowing,
  };
};
