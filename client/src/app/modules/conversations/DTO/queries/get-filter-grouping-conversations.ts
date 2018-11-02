import {GroupingType} from '@app/modules/conversations/models/types';


export interface GetFilterGroupingConversations {
    grouping: GroupingType;
    projects: number[];
    сounterparties: number[];
    leader: number[];
    mnns: number[];
    administrator: number[];
    subdivisions: number[];
    medicine: number[];
    phase: number[];
    startDate: string;
    finishDate: string;
    favorite: boolean;
}
