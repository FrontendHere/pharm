import {Conversation} from '../../models/conversation.entity';
import {Task} from '../../models/task.entity';
import {Employee} from '../../models/employee.entity';
import {Organization} from '../../models/organization.entity';
import {Medicine} from '../../models/medicine.entity';
import {InteractionScheme} from '../../models/interaction-scheme.entity';
import {Phase} from '../../models/phase.entity';
import {Indicator} from '../../models/indicator.entity';
import {Nosologie} from '../../models/nosologie.entity';
import {Mnn} from '../../models/mnn.entity';
import {ConversationsTypes} from '../../models/conversation-type.entity';
import {Meeting} from '../../models/meeting.entity';
import {Project} from '../../models/project.entity';


export const conversationsMock: Conversation[] = [];

const
    conv_names: string[] = [
        'Синагис®', 'Пикамилон', 'Ренимприл', 'Кемерувир', ''
    ],
    conv_types: ConversationsTypes[] = [
        {id: 0, name: 'medicine'},
        {id: 1, name: 'mnn'},
        {id: 2, name: 'nosology'},
        {id: 3, name: 'counterparty'},
    ],
    conv_org: Organization[] = [{
        id: 1,
        competitor: false,
        conversations: [],
        conversations_competitors: [],
        counterparty: false,
        employees: [],
        name: 'Gelgene',
        photo: 'https://randomuser.me/api/portraits/med/men/65.jpg'

    }],
    conv_risks: string[] = ['Сложный процесс упаковки, 30% дефекта', 'Слабое исполнение результатов переговоров', 'Отмена встречи', 'Изменение в законодательстве'],

    conv_employee: Employee[] = [

        {
            id: 1,
            name: 'Евсеева В. В.',
            photo: 'https://randomuser.me/api/portraits/women/10.jpg',
            position: 'Группа анализа и планирования',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: conv_org[0],
        },
        {
            id: 1,
            name: 'Паршина В. В.',
            photo: 'https://randomuser.me/api/portraits/women/30.jpg',
            position: 'Группа анализа и планирования',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: conv_org[0],
        },
        {
            id: 2,
            name: 'Перминов А. А.',
            photo: 'https://randomuser.me/api/portraits/men/78.jpg',
            position: 'Группа анализа и планирования',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: conv_org[0],
        },
        {
            id: 3,
            name: 'Потапов А. В.',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            position: 'Группа разработки',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: conv_org[0],
        },
        {
            id: 3,
            name: 'Печенин А. В.',
            photo: 'https://randomuser.me/api/portraits/men/56.jpg',
            position: 'Группа разработки',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: conv_org[0],
        },
    ],
    conv_tasks: Task[] = [
        {
            id: 1,
            name: 'task 1',
            priority: 'Высокий',
            status: 'В работе',
            description: 'Описание',
            deadline: new Date('2018-10-24'),
            emitter: null,
            liable: conv_employee[0],
            executor: null,
            favorite: false,
            documents: [],
            subdivisions: [],
            expired: false,
            isComplete: false,
            isLiableFromCounterparties: true
        },
        {
            id: 2,
            name: 'task 2',
            priority: 'Высокий',
            status: 'В работе',
            description: 'Описание',
            deadline: new Date('2018-10-24'),
            emitter: null,
            liable: conv_employee[1],
            executor: null,
            favorite: true,
            documents: [],
            subdivisions: [],
            expired: true,
            isComplete: false,
            isLiableFromCounterparties: true
        },
        {
            id: 3,
            name: 'task 3',
            priority: 'Высокий',
            status: 'В работе',
            description: 'Описание',
            deadline: new Date('2018-10-24'),
            emitter: null,
            liable: conv_employee[3],
            executor: null,
            favorite: false,
            documents: [],
            subdivisions: [],
            expired: true,
            isComplete: true,
            isLiableFromCounterparties: false
        },
        {
            id: 4,
            name: 'task 4',
            priority: 'Высокий',
            status: 'В работе',
            description: 'Описание',
            deadline: new Date('2018-10-24'),
            emitter: null,
            liable: conv_employee[1],
            executor: null,
            favorite: true,
            documents: [],
            subdivisions: [],
            expired: true,
            isComplete: false,
            isLiableFromCounterparties: true
        }
    ],
    conv_counterparties: Organization[] = [
        {
            id: 0,
            name: 'Johnson & Johnson',
            photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        },
        {
            id: 1,
            name: 'Merck',
            photo: 'https://randomuser.me/api/portraits/lego/3.jpg',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        },
        {
            id: 2,
            name: 'Celgene',
            photo: 'https://randomuser.me/api/portraits/lego/5.jpg',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        }
    ],
    conv_nosologies: Nosologie[] = [
        {
            id: 1,
            name: '1------B97.4 Респираторно-синцитиал...'
        },
        {
            id: 2,
            name: '2-----B97.4 Респираторно-синцитиал...'
        },
        {
            id: 3,
            name: '3------B97.4 Респираторно-синцитиал...'
        },
    ],
    conv_mnns: Mnn[] = [
        {
            id: 1,
            name: 'Паливизумаб1'
        },
        {
            id: 1,
            name: 'Паливизумаб2'
        },
        {
            id: 1,
            name: 'Паливизумаб3'
        },
        {
            id: 1,
            name: 'Паливизумаб4'
        },
    ],
    conv_medicine: Medicine[] = [
        {
            id: 1,
            name: 'Синагис®',
            photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
        },
        {
            id: 2,
            name: 'Пикамилон®',
            photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
        },
        {
            id: 3,
            name: 'Ренимприл®',
            photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
        },
        {
            id: 4,
            name: 'Кемерувир®',
            photo: 'https://randomuser.me/api/portraits/lego/3.jpg',
        },
    ],
    conv_interaction_schemas: InteractionScheme[] = [
        {id: 0, name: 'Дистрибьюция'},
        {id: 1, name: 'Прямые продажи'},
        {id: 2, name: null},
    ],
    conv_phases: Phase[] = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ],
    conv_indicators: Indicator[] = [
        {
            id: 0,
            conversation: null,
            meeting: null,
            values: {
                external: 20,
                internal: 10,
            },
        },
        {
            id: 1,
            conversation: null,
            meeting: null,
            values: {
                external: 10,
                internal: 10,
            },
        },
        {
            id: 1,
            conversation: null,
            meeting: null,
            values: {
                external: 8,
                internal: 10,
            },
        }],
    conv_meetings: Meeting[] = [
        {
            id: 1,
            name: 'Встреча 1',
            date: new Date('2018-10-10'),
            place: 'Тута',
            administrator: null,
            conversationId: 1,
            leader: null,
            tasks: [],
            documents: [],
            indicators: [],
            liableCounter: null
        },
        {
            id: 2,
            name: 'Встреча 2',
            date: new Date('2018-10-10'),
            place: 'Тута',
            administrator: null,
            conversationId: 1,
            leader: null,
            tasks: [],
            documents: [],
            indicators: [],
            liableCounter: null
        },
        {
            id: 3,
            name: 'Встреча 3',
            date: new Date('2018-10-10'),
            place: 'Тута',
            administrator: null,
            conversationId: 1,
            leader: null,
            tasks: [],
            documents: [],
            indicators: [],
            liableCounter: null
        },
        {
            id: 4,
            name: 'Встреча 4',
            date: new Date('2018-10-10'),
            place: 'Тута',
            administrator: null,
            conversationId: 1,
            leader: null,
            tasks: [],
            documents: [],
            indicators: [],
            liableCounter: null
        }
    ],
    projects: Project[] = [{
        id: 1,
        name: 'Протаргол-ЛОР, таблетки для приготовления раствора для местного применения, 200 мг',
        statusRu: 'Получено',
        mnn: {
            id: 1,
            name: 'Паливизумб',
        },
        localizationDeep: 'Полное производство',
        partner: {
            id: 1,
            competitor: false,
            conversations: [],
            conversations_competitors: [],
            counterparty: false,
            employees: [],
            name: 'Gelgene',
            photo: 'https://randomuser.me/api/portraits/med/men/65.jpg'
        },
        factory: 'Владимир, ЗАО «ЛЕККО»',
        budget: 12200000,
        accumulatedCosts: 11800000,
        forecastKS: new Date(),
        liable: {

            id: 1,
            name: 'Евсеева В. В.',
            photo: 'https://randomuser.me/api/portraits/women/10.jpg',
            position: 'Группа анализа и планирования',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: null
        },
        status: 'В работе',
        factPercent: 60,
        planPercent: 79
    }, {
        id: 1,
        name: 'Протаргол-ЛОР, таблетки для приготовления раствора для местного применения, 200 мг',
        statusRu: 'Получено',
        mnn: {
            id: 1,
            name: 'Паливизумб',
        },
        localizationDeep: 'Полное производство',
        partner: {
            id: 1,
            competitor: false,
            conversations: [],
            conversations_competitors: [],
            counterparty: false,
            employees: [],
            name: 'Gelgene',
            photo: 'https://randomuser.me/api/portraits/med/men/65.jpg'
        },
        factory: 'Владимир, ЗАО «ЛЕККО»',
        budget: 12200000,
        accumulatedCosts: 11800000,
        forecastKS: new Date(),
        liable: {

            id: 1,
            name: 'Евсеева В. В.',
            photo: 'https://randomuser.me/api/portraits/women/10.jpg',
            position: 'Группа анализа и планирования',
            phone: '880005553535',
            email: '88005553535@mail.ru',
            organization: null
        },
        status: 'В работе',
        factPercent: 100,
        planPercent: 70
    },
    ],
    count: number = 20;

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < count; i++) {
    const
        id = i,
        name = conv_names[random(0, conv_names.length)],
        type = conv_types[random(0, conv_types.length)],
        marginality = random(1, 100),
        interaction_schema = conv_interaction_schemas[random(0, conv_interaction_schemas.length)],
        medicine = conv_medicine[random(0, conv_medicine.length)],
        nosology = conv_nosologies[random(0, conv_nosologies.length)],
        mnn = conv_mnns[random(0, conv_mnns.length)],
        leader = conv_employee[random(0, conv_employee.length)],
        liable = conv_employee[random(0, conv_employee.length)],
        admin = conv_employee[random(0, conv_employee.length)],
        phase = conv_phases[random(0, conv_phases.length)],
        favorite = Boolean(random(0, 2)),
        counterparties: Organization[] = [],
        indicators: any[] = [],
        tasks: Task[] = [],
        risks: string[] = [],
        meetings: Meeting[] = [];
    const
        countIndicators = random(0, 20),
        countTasks = random(0, 20),
        countRisks = random(0, 4),
        countCounterparties = random(1, 3),
        countMettings = random(0, 5);
    for (let ii = 0; ii < countIndicators; ii++) {
        indicators.push(conv_indicators[random(0, conv_indicators.length)]);
    }

    for (let ii = 0; ii < countTasks; ii++) {
        tasks.push(conv_tasks[random(0, conv_tasks.length)]);
    }

    for (let ii = 0; ii < countRisks; ii++) {
        risks.push(conv_risks[random(0, conv_risks.length)]);
    }

    for (let ii = 0; ii < countCounterparties; ii++) {
        counterparties.push(conv_counterparties[random(0, conv_counterparties.length)]);
    }
    for (let ii = 0; ii < countMettings; ii++) {
        meetings.push(conv_meetings[random(0, conv_meetings.length)]);
    }
    meetings.forEach(m => {
        for (let j = 0; j < 5; j++) {
            m.tasks.push(conv_tasks[random(0, conv_tasks.length)]);
        }
    });


    conversationsMock.push({
        id: id,
        name: name,
        marginality: marginality,
        mnn: mnn,
        nosology: nosology,
        interaction_schema: interaction_schema,
        phase: phase,
        medicine: medicine,
        counterparties: Array.from(new Set(counterparties.map(c => c)).values()),
        leader: leader,
        liable: liable,
        administrator: admin,
        favorite: favorite,
        indicators: indicators,
        tasks: tasks,
        risks: risks,
        conversation_type: type,
        expectedRegisterDate: new Date(),
        meetings: meetings,
        competitors: [],
        description: 'Описание',
        milestones: [],
        documents: [],
        projects: [...projects, ...projects, ...projects]
    });
}

export default conversationsMock;
