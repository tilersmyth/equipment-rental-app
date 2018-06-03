import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { AuthPayload } from "./AuthPayload";
import { Company } from "./Site";
import { Category } from "./ProductType";

export default {
  Query,
  Mutation: {
    ...auth
  },
  AuthPayload,
  Company,
  Category
};
