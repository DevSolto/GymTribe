import Fastify from "fastify";
import { userRoutes } from "./routes/user.routes";
import authPlugin from "./plugins/auth.plugin";

const app = Fastify();

app.register(authPlugin);

app.register(userRoutes, { prefix: "/api" });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
