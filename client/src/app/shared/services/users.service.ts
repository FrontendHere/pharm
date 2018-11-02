import { Injectable } from '@angular/core';
import {IConversation} from '../interfaces/conversation.interface';
import conversations from '../demodata/conversations';
import {Observable, of} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import users from '../demodata/users'

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    users: IUser[] = users;

    constructor() { }

    getAll(): Observable<IUser[]> {
        return of(this.users);
    }
}
