//@ts-nocheck
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export interface commentsType {
  _id: string;
  username: string;
  text: string;
  firstName: string;
  lastName: string;
  votes: {
    upvotedBy: Array;
    downvotedBy: Array;
  };
}

export interface postType {
  _id: string;
  content: string;
  likes: { likeCount: number; likedBy: Array<string>; dislikedBy: Array };
  img?: string;
  username: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  comments: [commentsType];
}

export const posts = [
  {
    _id: "0121",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates voluptatem, iusto blanditiis natus ad magnam. Magnam odio quaerat nostrum beatae debitis! Doloremque, cupiditate possimus. Repellat nesciunt sequi porro repellendus earum aspernatur in deleniti!",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0987"],
      dislikedBy: [],
    },

    username: "jgupta36",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-05-26T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "0122",
        username: "patelAvi",
        firstName: "Avinash",
        lasstName: "Patel",

        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "0123",
        username: "jgupta36",
        firstName: "Jatin",
        lasstName: "Gupta",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "0124",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: ["0983"],
      dislikedBy: [],
    },

    username: "reddyNavin",
    firstName: "Navin",
    lastName: "Reddy",

    comments: [
      {
        _id: "0125",
        username: "coopershelly",
        firstName: "Sheldon",
        lastName: "Cooper",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "0126",
        username: "sskukreti",
        firstName: "Surbhi",
        lastName: "Kukreti",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-03-07T01:00:38+05:30",
    updatedAt: formatDate(),
  },
];
