import { prisma } from "../config/database";
import { CreateUserParams } from "../types/user.type";

export class UserRepository {
  async create(data: CreateUserParams) {
    return await prisma.user.create({
      data
    });
  }

  async getAll() {
    return await prisma.user.findMany();
  }
}