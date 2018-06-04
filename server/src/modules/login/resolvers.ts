import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../types/graphql-utils";

export const resolvers = {
  Mutation: {
    async login(parent, { email, password }, ctx: Context, info) {
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    }
  }
};
