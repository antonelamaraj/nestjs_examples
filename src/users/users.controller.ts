import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";



@Controller('users')
export class UserController{

  constructor(private readonly userService: UserService) {}

  @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser() {
        //krijimi i nje useri te ri
        const newUser = {id:4, name: 'Alban', age:34, gender: 'male', isMarried: true};
       this.userService.createUser(newUser);
    }
}