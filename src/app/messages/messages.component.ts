import {Component, Input, OnInit} from '@angular/core';

import { Message } from '../message/message';
import { MessagesService } from './messages.service';
import { User } from '../user/user';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    messages: Message[];
    @Input() user: User;
    @Input() me: User;

    constructor(private messageService: MessagesService) { }

    ngOnInit() {
        this.messages = this.messageService.getMessages();
    }

    getColor(message: Message, me) {
        return message.user.id === me.id ? 'green' : 'blue';
    }
}
