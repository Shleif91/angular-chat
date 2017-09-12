import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UsersService } from './users.service';
import { ChatService } from '../chat/chat.service';

declare var $:any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    currentUser: User;

    constructor(private usersService: UsersService, private chatService: ChatService) {
        this.users = usersService.getUsers();
    }

    ngOnInit() {
    }

    openModal(user: User) {
        this.currentUser = user;
        $('.information').html(
            '<h4>' + user.username + '</h4>\n' +
            '<p><b>Age:</b> ' + user.age + '</p>\n' +
            '<p><b>Language:</b> ' + user.language + '</p>'
        );
        $('#myModal').modal('show');
        this.chatService.closeChat();
    }

    openChat() {
        this.chatService.openChat();
    }
}
