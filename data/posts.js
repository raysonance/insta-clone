import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: USERS[1].image,
    user: USERS[1].user,
    likes: '2,330',
    caption: "Rengoku is the coolest",
    pfp: USERS[1].image,
    comments: [
      {
        user: USERS[3].user,
        comment: "wow this pic looks fire, mind if i use it?",
      },
      {
        user: USERS[5].user,
        comment: "yooo",
      },
    ],
  },
  {
    imageUrl: USERS[4].image,
    user: USERS[4].user,
    likes: '7,330',
    caption: "Goodnight",
    pfp: USERS[4].image,
    comments: [
      {
        user: USERS[1].user,
        comment: "yeah",
      },
      {
        user: USERS[5].user,
        comment: "cool",
      },
    ],
  },
];