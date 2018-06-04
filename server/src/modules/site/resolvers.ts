import { Context } from "../../types/graphql-utils";

export const resolvers = {
  Query: {
    allSites: async (parent, args, ctx: Context, info) => {
      return ctx.db.query.sites({}, info);
    },
    slug: async (parent, args, ctx: Context, info) => {
      // Work around until https://github.com/prismagraphql/prisma/issues/1300 is resovled
      const object = await ctx.db.query.slugs(
        {
          where: { value: args.value }
        },
        info
      );

      if (object.length === 0) {
        return null;
      }

      return object[0];
    }
  }
};
