import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../types/graphql-utils";

export const resolvers = {
  Mutation: {
    async signup(parent, args, ctx: Context, info) {
      const password = await bcrypt.hash(args.password, 10);
      const user = await ctx.db.mutation.createUser({
        data: { ...args, password }
      });

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    }
  }
};
