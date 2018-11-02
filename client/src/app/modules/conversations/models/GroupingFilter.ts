import {GroupingType} from '@app/modules/conversations/models/types';
import {SimpleEntity} from '@app/shared/models/simpleEntity';

export interface GroupingFilter {
    grouping: GroupingType;
    projects: SimpleEntity[];
    counterparties: SimpleEntity[];
    leaders: SimpleEntity[];
    mnns: SimpleEntity[];
    administrators: SimpleEntity[];
    subdivisions: SimpleEntity[];
    medicines: SimpleEntity[];
    phases: SimpleEntity[];
    startDate: Date;
    finishDate: Date;
    favorite: boolean;
}
