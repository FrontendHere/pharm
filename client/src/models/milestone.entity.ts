import { Conversation } from './conversation.entity';
export declare class Milestone {
    id: number;
    name: string;
    conversation: Conversation;
    dateStart: Date;
    dateEnd: Date;
    shiftable: boolean;
    parentMilestone: Milestone;
    childrenMilestones: Milestone[];
}
