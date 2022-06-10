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
    followers: ["reddyNavin", "sjtgshivam", "coopershelly"],
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
    userAvatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    followers: ["jgupta36", "patelAvi"],
    following: ["sskukreti"],
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
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/dQH2P64TJYsWNFXqJ6uNMl0XOB0=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg",
    bookmarks: [],
    followers: ["coopershelly", "shenry", "hpotter"],
    following: ["sskukreti", "shenry", "hpotter"],
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
    bookmarks: [],
    followers: ["sskukreti", "coopershelly", "shenry"],
    following: ["shenry", "sjtgshivam"],
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
    bookmarks: [],
    followers: ["coopershelly", "shenry", "sskukreti"],
    following: ["shenry", "coopershelly", "sjtgshivam"],
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
    bookmarks: [],
    followers: ["jgupta36", "shenry"],
    following: ["sskukreti", "jgupta36", "patelAvi", "reddyNavin"],
    userAvatar: "https://wallpaperaccess.com/full/1755074.jpg",
    email: "sheldoncoop@gmail.com",
    password: "quarks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0981",
    firstName: "Henry",
    lastName: "Shaw",
    username: "shenry",
    bookmarks: [],
    followers: ["reddyNavin", "jgupta36", "patelAvi"],
    following: ["coopershelly", "patelAvi", "jgupta36", "reddyNavin"],
    userAvatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    email: "shenry@gmail.com",
    password: "quarks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0980",
    firstName: "Harry",
    lastName: "Potter",
    username: "hpotter",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/4W1Xxuz9mW3AWuuVKT7vuIQOHas=/0x0:1400x700/1220x813/filters:focal(588x238:812x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70140566/harry_potter_and_the_sorcerers_stone_daniel_radcliffe_social.0.jpeg",
    bookmarks: [],
    followers: ["reddyNavin"],
    following: ["reddyNavin"],
    email: "hpotter@gmail.com",
    password: "quarks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
