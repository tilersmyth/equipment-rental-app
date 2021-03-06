import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import { genSchema } from "./utils/genSchema";

const server = new GraphQLServer({
  schema: genSchema(),
  context: req => {
    return {
      ...req,
      db: new Prisma({
        endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
        debug: true // log all GraphQL queries & mutations sent to the Prisma API
        // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
      })
    };
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
