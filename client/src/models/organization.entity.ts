import { Employee } from './employee.entity';
import { Conversation } from './conversation.entity';
export declare class Organization {
    id: number;
    name: string;
    photo: string;
    employees: Employee[];
    conversations?: Conversation[];
    conversations_competitors: Conversation[];
    counterparty: boolean;
    competitor: boolean;
}
