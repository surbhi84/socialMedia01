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
      "Hey Guys I'm planning to go on a trip to mountains soon, suggest me some good places?",
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
        text: "What about leh or manali?",
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
        text: "I think as long as it's mountains any place would be good 😉",
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

  //text 30-31

  {
    _id: "0132",
    content: "Whoever is happy will make others happy too. -Anne Frank",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0982", "0984"],
      dislikedBy: [],
    },

    username: "sskukreti",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110_1280.jpg",
    firstName: "Surbhi",
    lastName: "Kukreti",
    createdAt: "2022-02-18T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0133",
    content:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984"],
      dislikedBy: [],
    },

    username: "sskukreti",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110_1280.jpg",
    firstName: "Surbhi",
    lastName: "Kukreti",
    createdAt: "2022-03-24T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: "0134",
    content:
      "As the wind blows time ceases to move and you can feel every second passing.",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-04-15T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0135",
    content: `"I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed." ― Hermione Granger`,

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-06-03T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0136",
    content:
      "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    img: "https://images.unsplash.com/photo-1616817314315-144bdcce6b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-01-26T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: "0137",
    content: `"The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution." — Albus Dumbledore`,

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0987", "0980"],
      dislikedBy: [],
    },

    username: "sjtgshivam",
    userAvatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    firstName: "Shivam",
    lastName: "Pandey",
    createdAt: "2022-04-11T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0138",
    content:
      "Life is what happens when you're busy making other plans. -John Lennon",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0987"],
      dislikedBy: [],
    },

    username: "sjtgshivam",
    userAvatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    firstName: "Shivam",
    lastName: "Pandey",
    createdAt: "2022-06-02T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0139",
    content:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0984", "0983"],
      dislikedBy: [],
    },

    username: "sjtgshivam",
    userAvatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    firstName: "Shivam",
    lastName: "Pandey",
    createdAt: "2022-05-06T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0140",
    content: `"Life is never fair, and perhaps it is a good thing for most of us that it is not." -Oscar Wilde`,

    likes: {
      likeCount: 2,
      likedBy: ["0981", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "reddyNavin",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/dQH2P64TJYsWNFXqJ6uNMl0XOB0=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg",
    firstName: "Navin",
    lastName: "Reddy",
    createdAt: "2021-11-08T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0141",
    content:
      "Hey Good morning all, and be kind because 'Kindness is one thing you can't give away.It Always comes back'~ George Skolsky",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "reddyNavin",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/dQH2P64TJYsWNFXqJ6uNMl0XOB0=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg",
    firstName: "Navin",
    lastName: "Reddy",
    createdAt: "2022-01-15T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0142",
    content: `My Favourite from the Fourth part 🤩`,
    img: "https://miro.medium.com/max/840/1*kFPoU9E4tVqSxcHEZhXoyw.png",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0984", "0983"],
      dislikedBy: [],
    },

    username: "reddyNavin",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/dQH2P64TJYsWNFXqJ6uNMl0XOB0=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg",
    firstName: "Navin",
    lastName: "Reddy",
    createdAt: "2022-02-28T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0143",
    content: `"In this life we cannot do great things. We can only do small things with great love." -Mother Teresa`,

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986"],
      dislikedBy: [],
    },

    username: "patelAvi",
    userAvatar:
      "https://cdn.pixabay.com/photo/2012/04/16/12/08/boy-35706_1280.png",
    firstName: "Avinash",
    lastName: "Patel",
    createdAt: "2022-03-19T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0144",
    content: `"Indifference and neglect often do much more damage than outright dislike." — Albus Dumbledore`,

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "patelAvi",
    userAvatar:
      "https://cdn.pixabay.com/photo/2012/04/16/12/08/boy-35706_1280.png",
    firstName: "Avinash",
    lastName: "Patel",
    createdAt: "2022-01-25T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0145",
    content:
      'I read a great quote today "Act as if what you do makes a difference.It does" by William James',
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-04-08T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0146",
    content:
      "Success is not final, Failue is not fatal...It is the courage to continue that counts.",

    likes: {
      likeCount: 2,
      likedBy: ["0985"],
      dislikedBy: [],
    },

    username: "jgupta36",
    userAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    firstName: "Jatin",
    lastName: "Gupta",
    createdAt: "2022-03-15T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0147",
    content:
      'I once told penny "Well, that’s no reason to cry. One cries because one is sad.For example, I cry because others are stupid and it makes me sad.',
    img: "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/01/The-Big-Bang-Theory-Penny-and-Sheldon.jpg?q=50&fit=crop&w=740&h=394&dpr=1.5",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "coopershelly",
    userAvatar: "https://wallpaperaccess.com/full/1755074.jpg",
    firstName: "Sheldon",
    lastName: "Cooper",
    createdAt: "2021-07-21T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0148",
    content:
      "How do you play Rock, Paper, Scissors, Lizard, Spock? Oh let me help...Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. And, as it always has, rock crushes scissors.",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0987"],
      dislikedBy: [],
    },

    username: "coopershelly",
    userAvatar: "https://wallpaperaccess.com/full/1755074.jpg",
    firstName: "Sheldon",
    lastName: "Cooper",
    createdAt: "2022-02-09T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0149",
    content:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984", "0983"],
      dislikedBy: [],
    },

    username: "hpotter",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/4W1Xxuz9mW3AWuuVKT7vuIQOHas=/0x0:1400x700/1220x813/filters:focal(588x238:812x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70140566/harry_potter_and_the_sorcerers_stone_daniel_radcliffe_social.0.jpeg",
    firstName: "Harry",
    lastName: "Potter",
    createdAt: "2022-05-17T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "015",
    content: "I solemnly swear I am up to no good.",

    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986"],
      dislikedBy: [],
    },

    username: "hpotter",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/4W1Xxuz9mW3AWuuVKT7vuIQOHas=/0x0:1400x700/1220x813/filters:focal(588x238:812x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70140566/harry_potter_and_the_sorcerers_stone_daniel_radcliffe_social.0.jpeg",
    firstName: "Harry",
    lastName: "Potter",
    createdAt: "2022-01-05T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "0151",
    content:
      "and that is Hogwarts...The Best School of Witchcraft and Wizardry",
    img: "/assets/hog.png",
    likes: {
      likeCount: 2,
      likedBy: ["0985", "0986", "0981", "0982", "0984", "0983", "0987"],
      dislikedBy: [],
    },

    username: "hpotter",
    userAvatar:
      "https://cdn.vox-cdn.com/thumbor/4W1Xxuz9mW3AWuuVKT7vuIQOHas=/0x0:1400x700/1220x813/filters:focal(588x238:812x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70140566/harry_potter_and_the_sorcerers_stone_daniel_radcliffe_social.0.jpeg",
    firstName: "Harry",
    lastName: "Potter",
    createdAt: "2022-03-07T01:00:38+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
];
