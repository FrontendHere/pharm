import { Counterparty } from './counterparty.entity';
export declare class MarketParticipant {
    id: number;
    name: string;
    pozition: string;
    counterpart?: Counterparty;
}
