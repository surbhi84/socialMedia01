//@ts-nocheck
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Surbhi",
    lastName: "Kukreti",
    username: "KukretiSurbhi99",
    email: "surbhikukreti@gmail.com",
    password: "collidingatoms",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
