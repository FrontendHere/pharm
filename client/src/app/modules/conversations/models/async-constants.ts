import {Phase} from "../../../../models/phase.entity";

export const Phases: Phase[] = [
    {
        id: 0,
        name: 'Знакомство',
        className: 'previous'
    },
    {
        id: 1,
        name: 'Выбор препаратов',
        className: 'changes'
    },
    {
        id: 2,
        name: 'Согласование схемы взаимодействия',
        className: 'agreement'
    },
    {
        id: 3,
        name: 'Согласование коммерческих условий',
        className: 'previous'
    },
    {
        id: 4,
        name: 'Оформление договоров',
        className: 'changes'
    },
    {
        id: 5,
        name: 'Изменение договоренностей',
        className: 'agreement'
    },
    {
        id: 6,
        name: 'Завешение сотрудничества',
        className: 'agreement'
    }
];