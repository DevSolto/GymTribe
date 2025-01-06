import { UserRepository } from "../repositories/user.repository";
import { CreateUserParams } from "../types/user.type";



export class UserService {
  userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data: CreateUserParams) {
    return await this.userRepository.create(data);
  }

  async getUsers() {
    return await this.userRepository.getAll();
  }
}