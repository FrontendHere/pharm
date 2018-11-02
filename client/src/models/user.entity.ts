import { Role } from './role.entity';
export declare class User {
    id: number;
    login: string;
    role: Role;
    employeeId: number;
    blocked: boolean;
    created: Date;
    updated: Date;
}
