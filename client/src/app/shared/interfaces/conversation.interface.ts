import {IContractor} from './contractor.interface';
import {IUser} from './user.interface';

export interface IConversation {
    id: number;
    drugname: string;
    mhh: string;
    nozology: string;
    contractor: IContractor;
    distrib: string;
    studyId: number;
    userId: number;
    favorites: boolean;
}

export  interface IConversationExt extends IConversation {
    user: IUser;
}


