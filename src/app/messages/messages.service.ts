import { Injectable } from '@angular/core';

import { Message } from '../message/message';

@Injectable()
export class MessagesService {
    messages: Message[] = [];

    constructor() {

    }

    getMessages() {
        return this.messages;
    }

    sendMessage(message: Message) {
        this.messages.unshift(message);
    }
}
