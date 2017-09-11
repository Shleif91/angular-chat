import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable()
export class UsersService {
    users: User[];
    me: User;

    constructor() {
        let i = 1;
        this.users = [
            new User(),
            new User(),
            new User(),
            new User()
        ];

        this.users.forEach(function (user) {
            user.id = i++;
            user.username = 'Test';
            user.age = Math.floor(Math.random() * (60 - 18)) + 18;
            user.language = Math.round(Math.random()) ? 'English' : 'Russian';
        });

        this.me = new User;
        this.me.id = i++;
        this.me.username = 'Shleif';
        this.me.age = 25;
        this.me.language = Math.round(Math.random()) ? 'English' : 'Russian';

    }

    getUserById(id: number) {
        return this.users.find(function (user) {
            return user.id === +id;
        });
    }

    getUsers() {
        return this.users;
    }

    getMe() {
        return this.me;
    }
}
