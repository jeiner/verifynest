import { Injectable } from "@nestjs/common";
import { User, UserStatus } from "./../../entities/users";
import { v4 as uuidv4 } from "uuid";
import { UpdateUserDto } from "../../dto/user.dto";

@Injectable()
export class StarWarsService {


  private users: User[] = [
    {
      id: "1",
      title: "jeiner",
      description: "full stack developer",
      estatus: UserStatus.PENDING
    }
  ];

  generateUniqueId(): string {
    return uuidv4(); // Genera un UUID único
  }

  getAllUsers() {
    return this.users;
  }

  createUser(title: string, description: string) {
    const user = {
      id: this.generateUniqueId(),
      title,
      description,
      estatus: UserStatus.PENDING
    };
    this.users.push(user);

    return user;
  }

  getUserById(id: string): User {
    return this.users.find(user => user.id == id);
  }

  updateUser(id: string, updateFields: UpdateUserDto): User {
    const user = this.getUserById(id);

    const newUser = Object.assign(user, updateFields);

    this.users = this.users.map((user) => (user.id === id ? newUser : user));

    return newUser;
  }

  DeleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
