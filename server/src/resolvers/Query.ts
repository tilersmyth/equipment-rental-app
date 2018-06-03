import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  users(parent, args, ctx: Context, info) {
    return ctx.db.query.users({});
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
  },
  site: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.site({ where: { id: args.id } });
  },
  allSites: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.sites({});
  },
  companies: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.companies({});
  },
  company: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.company({ where: { id: args.id } });
  },
  cats: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.categories({ where: { site: { id: args.id } } });
  },
  allTypes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.productTypes({});
  },
  featured: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.productTypes(
      {
        where: { category: { site: { id: args.id } }, featured: true }
      },
      info
    );
  },
  teams: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.teams(
      {
        where: { user: { id: args.id } }
      },
      info
    );
  }
};
