import {Medicine} from './medicine.entity';
import {Organization} from './organization.entity';
import {Mnn} from './mnn.entity';
import {Employee} from './employee.entity';
import {Nosologie} from './nosologie.entity';
import {InteractionScheme} from './interaction-scheme.entity';
import {Phase} from './phase.entity';
import {Indicator} from './indicator.entity';
import {Meeting} from './meeting.entity';
import {Milestone} from './milestone.entity';
import {Project} from './project.entity';
import {ConversationsTypes} from './conversation-type.entity';
import {Task} from './task.entity';
import {Document} from './document.entity';

export enum ConversationAccent {
    MEDICINE = 0,
    MNN,
    NOSOLOGY,
    COUNTERPARTY,
}


export class Conversation {
    id?: number;
    name: string;
    medicine: Medicine;     //Лекарство
    mnn: Mnn;
    nosology: Nosologie;
    counterparties: Organization[];  //контрагенты
    interaction_schema?: InteractionScheme;  //схема взаимодействия
    phase?: Phase; //фаза
    marginality?: number;  //маржинальность
    liable?: Employee; //ответственный
    leader?: Employee; //лидер переговаоров
    indicators?: Indicator[]; //показатели переговора
    administrator?: Employee;
    meetings?: Meeting[];
    expectedRegisterDate: Date;
    competitors: Organization[];    //конкуренты
    description: string;
    risks: string[];
    milestones: Milestone[];  //вехи
    documents: Document[];
    projects: Project[];
    tasks: Task[];
    conversation_type: ConversationsTypes;
    favorite: boolean;
}
