//@ts-nocheck
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

//   bookmarks: []
//   createdAt: "2022-05-30T20:12:36+05:30"
//   email: "surbhikukreti@gmail.com"
//   firstName: "Surbhi"
//   followers: []
//   following: []
//   id: "1"
//   lastName: "Kukreti"
//   password: "collidingatoms"
//   updatedAt: "2022-05-30T20:12:36+05:30"
//   username: "KukretiSurbhi99"

//   _id: "c798ddcd-a9ed-4160-a3a9-23ba4299f785"

export const users = [
  {
    _id: "0987",
    bookmarks: [],
    firstName: "Surbhi",
    lastName: "Kukreti",
    username: "sskukreti",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110_1280.jpg",
    followers: ["reddyNavin", "sjtgshivam"],
    following: ["jgupta36", "patelAvi"],
    email: "surbhikukreti@gmail.com",
    password: "collidingatoms",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "0986",
    bookmarks: [],
    firstName: "Shivam",
    lastName: "Pandey",
    username: "sjtgshivam",
    email: "pandeyshivam@gmail.com",
    password: "lemjoins",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0985",
    firstName: "Navin",
    lastName: "Reddy",
    username: "reddyNavin",
    email: "navin90@gmail.com",
    password: "broomsticks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0984",
    firstName: "Avinash",
    lastName: "Patel",
    username: "patelAvi",
    userAvatar:
      "https://cdn.pixabay.com/photo/2012/04/16/12/08/boy-35706_1280.png",
    email: "avipatel@gmail.com",
    password: "neutrinos",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0983",
    firstName: "Jatin",
    lastName: "Gupta",
    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    email: "jatingupta@gmail.com",
    password: "darkMatter",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0982",
    firstName: "Sheldon",
    lastName: "Cooper",
    username: "coopershelly",
    userAvatar: "https://wallpaperaccess.com/full/1755074.jpg",
    email: "sheldoncoop@gmail.com",
    password: "quarks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
