import { Employee } from './employee.entity';
import {Meeting} from './meeting.entity';
import {Conversation} from './conversation.entity';
import {Subdivision} from './subdivision.entity';

export declare class Task {
    id: number;
    name: string;
    priority: string;
    status: string;
    description: string;
    deadline: Date;
    emitter: Employee;
    liable: Employee;
    executor: Employee;
    favorite: boolean;
    documents: Document[];
    subdivisions: Subdivision[];
    isLiableFromCounterparties: boolean;
    isComplete: boolean;
    expired: boolean;
}
