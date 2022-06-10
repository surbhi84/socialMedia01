//@ts-nocheck
import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth, serializeUser } from "../utils/authUtils";

const sign = require("jwt-encode");

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, username, password}
 * */

export const signupHandler = function (schema, request) {
  const { username, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if username already exists
    const oldUser = schema.users.findBy({ username: username });
    if (oldUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Username Already Exists."],
        }
      );
    }
    const _id = uuid();
    const newUser = {
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      username,
      password,
      ...rest,
      followers: [],
      following: [],
      bookmarks: [],
    };
    const user = schema.users.create(newUser);
    const encodedToken = sign(
      { _id, username },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { user, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema, request) {
  const { username, password } = JSON.parse(request.requestBody);
  try {
    const user = schema.users.findBy({ username: username }).attrs;

    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    if (password === user.password) {
      const encodedToken = sign(
        { _id: user._id, username },
        process.env.REACT_APP_JWT_SECRET
      );

      return new Response(
        200,
        {},
        { user: serializeUser(this, user), encodedToken }
      );
    }
    return new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const tokenLoginHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  return new Response(200, {}, { user: serializeUser(this, user) });
};
