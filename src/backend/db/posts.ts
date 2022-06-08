//@ts-nocheck
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "0121",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates voluptatem, iusto blanditiis natus ad magnam. Magnam odio quaerat nostrum beatae debitis! Doloremque, cupiditate possimus. Repellat nesciunt sequi porro repellendus earum aspernatur in deleniti!",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0987"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-05-26T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "0122",
        username: "patelAvi",
        firstName: "Avinash",
        lastName: "Patel",
        userAvatar:
          "https://cdn.pixabay.com/photo/2012/04/16/12/08/boy-35706_1280.png",
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
        lastName: "Gupta",
        userAvatar:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
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
    content: "Monday Motivation",
    img: "https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    likes: {
      likeCount: 1,
      likedBy: ["0983"],
      dislikedBy: [],
    },

    username: "reddyNavin",
    userAvatar:
      "https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    firstName: "Navin",
    lastName: "Reddy",

    comments: [
      {
        _id: "0125",
        username: "coopershelly",
        firstName: "Sheldon",
        lastName: "Cooper",
        text: "Good one",
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
        userAvatar:
          "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110_1280.jpg",
        text: "Loved it!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-03-07T01:00:38+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "0127",
    content: "Ohh the flowers look so pretty.",
    img: "https://images.unsplash.com/photo-1654093618557-489b8f06d4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986"],
      dislikedBy: [],
    },

    username: "sskukreti",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110_1280.jpg",
    firstName: "Surbhi",
    lastName: "Kukreti",
    createdAt: "2022-06-05T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "0128",
        username: "patelAvi",
        firstName: "Avinash",
        lastName: "Patel",
        userAvatar:
          "https://cdn.pixabay.com/photo/2012/04/16/12/08/boy-35706_1280.png",
        text: "Indeed they do",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "0129",
        username: "jgupta36",
        firstName: "Jatin",
        lastName: "Gupta",
        userAvatar:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
