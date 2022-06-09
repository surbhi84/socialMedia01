//@ts-nocheck
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

//   0:
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
    email: "sheldoncoop@gmail.com",
    password: "quarks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
