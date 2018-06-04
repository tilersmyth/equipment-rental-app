import { Context } from "../../types/graphql-utils";
import { getUserId } from "../../utils/getUserId";

export const resolvers = {
  Query: {
    me(parent, args, ctx: Context, info) {
      const id = getUserId(ctx);
      return ctx.db.query.user({ where: { id } }, info);
    }
  }
};
