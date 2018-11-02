import {Employee} from '../../../../models/employee.entity';
import {Indicator} from '../../../../models/indicator.entity';
import {Counterparty} from '../../../../models/counterparty.entity';
import {Task} from '../../../../models/task.entity';
import {Document} from '../../../../models/document.entity';

export interface MeetingShort {
    id: number;
    name: string;
    date: Date;
    conversationName: string;
    leader: Employee;
    administrator: Employee;
    place: string;
    indicators?: Indicator[];
    liableCounter?: Counterparty;
    tasks?: Task[];
    documents?: Document[];
}
