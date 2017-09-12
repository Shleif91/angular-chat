import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../user/user';
import { Message } from '../message/message';
import { MessagesService } from '../messages/messages.service';
import {ChatService} from "./chat.service";

declare var $:any;

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    user: User;
    me: User;
    messageText: string;

    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService,
        private chatService: ChatService
    ) { }

    ngOnInit() {
        this.user = this.usersService.getUserById(this.route.snapshot.params['id']);
        this.me = this.usersService.getMe();
    }

    sendMessage() {
        const message = new Message();
        message.text = this.messageText;
        message.user = this.me;
        message.date = Date.now();
        message.to = this.user;
        this.chatService.sendMessage(message);
        this.messageText = '';
    }

    closeChat() {
        this.chatService.closeChat();
    }
}
