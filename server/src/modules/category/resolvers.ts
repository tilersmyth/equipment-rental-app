import { Context } from "../../types/graphql-utils";

export const resolvers = {
  Query: {
    cats: async (parent, args, ctx: Context, info) => {
      return ctx.db.query.categories(
        { where: { site: { id: args.id } } },
        info
      );
    }
  }
};
