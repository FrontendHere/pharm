import { Organization } from './organization.entity';
export class Employee {
    id: number;
    name: string;
    position: string;
    photo: string;
    email: string;
    phone: string;
    organization: Organization;
}
