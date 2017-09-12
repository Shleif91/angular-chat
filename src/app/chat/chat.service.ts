import { Injectable } from '@angular/core';

declare var $:any;

@Injectable()
export class ChatService {

    constructor() {
    }

    openChat() {
        $('#myModal').modal('hide');
        $('.chat-block').css('display', 'block');
    }

    closeChat() {
        $('.chat-block').css('display', 'none');
    }
}
