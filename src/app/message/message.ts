import { User } from '../user/user';

export class Message {
    text: string;
    user: User;
    date: number;
    to: User
}
