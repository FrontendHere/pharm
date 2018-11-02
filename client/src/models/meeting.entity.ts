import { Task } from './task.entity';
import { Document } from './document.entity';
import { Employee } from './employee.entity';
import { Counterparty } from './counterparty.entity';
import { Indicator } from './indicator.entity';
export declare class Meeting {
    id: number;
    name: string;
    date: Date;
    conversationId: number;
    leader: Employee;
    administrator: Employee;
    place: string;
    indicators?: Indicator[];
    liableCounter?: Counterparty;
    tasks: Task[];
    documents: Document[];
}
