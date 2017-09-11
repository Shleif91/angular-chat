import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { UsersService } from './users/users.service';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';

const appRoutes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'chat/:id', component: ChatComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        ChatComponent,
        MessageComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        UsersService,
        MessagesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
