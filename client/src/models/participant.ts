import { Employee } from './employee.entity';
import { Counterparty } from './counterparty.entity';
export declare class Participant {
    leader: Employee;
    administrator: Employee;
    liableCounter: Counterparty;
    counterEmployees: Counterparty[];
}
