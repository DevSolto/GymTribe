import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserService } from "../services/user.service";
import { createUserValidate } from "../validations/user.validation";

const userService = new UserService();

export async function getUserHandler(req: FastifyRequest, reply: FastifyReply) {
  const users = await userService.getUsers();
  reply.send(users);
}

export async function createUserHandler(req: FastifyRequest, reply: FastifyReply) {
  const data = createUserValidate.parse(req.body);
  const user = await userService.createUser(data);

  reply.status(201).send(user);
}
