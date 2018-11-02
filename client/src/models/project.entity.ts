import {Mnn} from './mnn.entity';
import {Organization} from './organization.entity';
import {Employee} from './employee.entity';
export declare class Project {
    id: number;
    name: string;
    liable: Employee;
    statusRu: string;
    forecastKS: Date;
    mnn: Mnn;
    localizationDeep: string;
    partner: Organization;
    factory: string;
    budget: number;
    accumulatedCosts: number;
    status: string;
    planPercent: number;
    factPercent: number;
}
