import { Injectable } from '@angular/core';

import { Message } from '../message/message';

@Injectable()
export class MessagesService {
    messages: Message[];

    constructor() {
        this.messages = [
            new Message,
            new Message
        ];

        this.messages.forEach(function (message, index) {
            message.text = 'Test text ' + index;
            message.date = Date.now();
        });
    }

    getMessages() {
        return this.messages;
    }

    sendMessage(message: Message) {
        this.messages.unshift(message);
    }
}
