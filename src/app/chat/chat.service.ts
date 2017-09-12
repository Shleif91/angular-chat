import { Injectable } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { Message } from '../message/message';
import { isUndefined } from 'util';

declare var $:any;

@Injectable()
export class ChatService {
    socket: any;

    constructor(private messagesService: MessagesService) {
    }

    openChat() {
        $('#myModal').modal('hide');
        $('.chat-block').css('display', 'block');

        this.socket = new WebSocket('ws://127.0.0.1:8080');
        const self = this;

        this.socket.onmessage = function (ev) {
            self.messagesService.sendMessage(JSON.parse(ev.data));
            console.log(ev.data);
            $('.chat-log').scrollTop(0);
        };

        this.socket.onclose = function (e) {
            console.log(e);
        };

        this.socket.onerror = function (e) {
            console.log(e);
        };
    }

    closeChat() {
        if (!isUndefined(this.socket) && this.socket.readyState === 1) {
            this.socket.close();
        }

        $('.chat-block').css('display', 'none');
    }

    sendMessage(message: Message) {
        this.socket.send(JSON.stringify(message));
    }
}
