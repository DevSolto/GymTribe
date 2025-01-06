import { FastifyInstance } from "fastify";
import { getUserHandler, createUserHandler } from "../controllers/user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.get("/users", getUserHandler);
  app.post("/users", createUserHandler);
}
