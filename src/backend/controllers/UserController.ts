//@ts-nocheck
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { serializeUser } from "../utils/authUtils";

/**
 * All the routes related to user are present here.
 * */

/**
 * This handler handles gets all users in the db.
 * send GET Request at /api/users
 * */

export const getAllUsersHandler = function () {
  return new Response(
    200,
    {},
    {
      users: this.db.users.map(function (i) {
        return serializeUser(this, i);
      }, this),
    }
  );
};

/**
 * This handler handles get a user from userId in the db.
 * send GET Request at /api/users/:username
 **/

export const getUserHandler = function (schema, request) {
  const username = request.params.username;
  try {
    let user = schema.users.findBy({ username: username }).attrs;
    return new Response(200, {}, { user: serializeUser(this, user) });
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
 * This handler handles updating user details.
 * send POST Request at /api/users/edit
 * body contains { userData }
 * */

export const editUserHandler = function (schema, request) {
  let user = requiresAuth.call(this, request);
  try {
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
    const { userData } = JSON.parse(request.requestBody);
    user = { ...user, ...userData, updatedAt: formatDate() };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { user: serializeUser(this, user) });
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
 * This handler gets all the user bookmarks from the db.
 * send GET Request at /api/users/bookmark/
 * */

export const getBookmarkPostsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
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
    return new Response(200, {}, { bookmarks: user.bookmarks });
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
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/bookmark/:postId/
 * */

export const bookmarkPostHandler = function (schema, request) {
  const { postId } = request.params;
  const post = schema.posts.findBy({ _id: postId }).attrs;
  const user = requiresAuth.call(this, request);

  try {
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
    const isBookmarked = user.bookmarks.some(
      (currPost) => currPost._id === postId
    );
    if (isBookmarked) {
      return new Response(
        400,
        {},
        { errors: ["This Post is already bookmarked"] }
      );
    }
    user.bookmarks.push(post);
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });
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
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/remove-bookmark/:postId/
 * */

export const removePostFromBookmarkHandler = function (schema, request) {
  const { postId } = request.params;
  let user = requiresAuth.call(this, request);
  try {
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
    const isBookmarked = user.bookmarks.some(
      (currPost) => currPost._id === postId
    );
    if (!isBookmarked) {
      return new Response(400, {}, { errors: ["Post not bookmarked yet"] });
    }
    const filteredBookmarks = user.bookmarks.filter(
      (currPost) => currPost._id !== postId
    );
    user = { ...user, bookmarks: filteredBookmarks };
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });
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
 * This handler handles follow action.
 * send POST Request at /api/users/follow/:followUsername/
 **/

export const followUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { username: followUsername } = request.params;
  const followUser = schema.users.findBy({ username: followUsername }).attrs;

  try {
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
    const isFollowing = user.following.some(
      (currUser) => currUser === followUsername
    );

    if (isFollowing) {
      return new Response(
        200,
        {},
        {
          user: serializeUser(this, user),
          followUser: serializeUser(this, followUser),
        }
      );
    }

    const updatedUser = {
      ...user,
      following: [...user.following, followUsername],
    };

    const updatedFollowUser = {
      ...followUser,
      followers: [...followUser.followers, user.username],
    };

    this.db.users.update(
      { username: user.username },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { username: followUsername },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      {
        user: serializeUser(this, updatedUser),
        followUser: serializeUser(this, updatedFollowUser),
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

/**
 * This handler handles unfollow action.
 * send POST Request at /api/users/unfollow/:followUsername/
 * */

export const unfollowUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { username: followUsername } = request.params;
  const followUser = this.db.users.findBy({ username: followUsername });
  try {
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
    const isFollowing = user.following.some(
      (currUser) => currUser === followUsername
    );

    if (!isFollowing) {
      return new Response(
        200,
        {},
        {
          user: serializeUser(this, user),
          followUser: serializeUser(this, followUser),
        }
      );
    }

    const updatedUser = {
      ...user,
      following: user.following.filter(
        (currUser) => currUser !== followUsername
      ),
    };
    const updatedFollowUser = {
      ...followUser,
      followers: followUser.followers.filter(
        (currUser) => currUser !== user.username
      ),
    };
    this.db.users.update(
      { username: user.username },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { username: followUsername },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      {
        user: serializeUser(this, updatedUser),
        followUser: serializeUser(this, updatedFollowUser),
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
