import { Context } from "../utils";

export const Company = {
  sites: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.sites({ where: { company: { id } } }, info);
  }
};
