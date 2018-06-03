import { Context } from "../utils";

export const Category = {
  productType: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.productTypes({ where: { category: { id } } }, info);
  }
};
