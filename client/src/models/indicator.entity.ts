import { Conversation } from './conversation.entity';
import {Meeting} from './meeting.entity';
export declare class Indicator {
    id: number;
    conversation: Conversation;
    meeting: Meeting;
    values: ICommercialIndicatorValues;
}

export interface ICommercialIndicatorValues {
    external: any;
    internal: any;
    reached?: boolean;
}