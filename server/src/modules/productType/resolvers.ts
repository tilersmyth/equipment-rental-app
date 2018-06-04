import { Context } from "../../types/graphql-utils";

export const resolvers = {
  Query: {
    featured: async (parent, args, ctx: Context, info) => {
      return ctx.db.query.productTypes(
        {
          where: { category: { site: { id: args.id } }, featured: true }
        },
        info
      );
    }
  }
};
