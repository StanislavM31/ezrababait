import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('get-all-users')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUsers() {
    return this.userService.createUser();
  }

  @Put()
  updateUsers() {
    return this.userService.updateUser();
  }

  @Delete()
  deleteUsers() {
    return this.userService.deleteUser();
  }
}