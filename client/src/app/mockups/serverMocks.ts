import {GroupingType} from '@app/modules/conversations/models/types';
import {Conversation} from '../../models/conversation.entity';

export function groupingMock<TArray, TField extends keyof TArray>(groups: any[],
                                                                  array: TArray[],
                                                                  fieldName: string) {
    const dict = {};
    if (!fieldName) {
        return dict[''] = array;
    }
    groups.forEach((g: any) => {
        dict[JSON.stringify(g)] = array
            .filter(a => {
                if (!Array.isArray(a[fieldName])) {
                    return a[fieldName]['id'] === g['id'];
                }
                return a[fieldName][0]['id'] === (g ? g['id'] : -1);

            });
    });
    return dict;
}

export function getConversationPropByGrouping(groupingType: GroupingType): keyof Conversation {
    switch (groupingType) {
        case 'leader':
            return 'leader';
        case 'medicine':
            return 'medicine';
        case 'counterparties':
            return 'counterparties';
    }
}

export function getGroupingConversation(groupingType: GroupingType,
                                        conversations: Conversation[]): any[] {
    switch (groupingType) {
        case 'leader':
            return Array.from(new Set(conversations.map(c => c.leader)).values());
        case 'medicine':
            return Array.from(new Set(conversations.map(c => c.medicine)).values());
        case 'counterparties':
            return Array.from(new Set(conversations.map(c => (c.counterparties && (c.counterparties.length > 0) ?
                    c.counterparties[0]
                    : null
            ))).values());
        case 'none':
            return conversations;

    }
}
