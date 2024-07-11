import { Injectable } from '@nestjs/common';
import { users } from '../moks/index';

@Injectable()
export class UsersService {
    getUsers(){
        return users;
    }
    updateUser(){
        return "user was updated";
    }
    createUser(){
        return "user was created";
    }
    deleteUser(){
        return "user was deleted";
    }
}
