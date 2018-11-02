import {GroupingType} from '@app/modules/conversations/models/types';
import {Conversation} from '../../../../models/conversation.entity';


export class ConversationsGrouping {
    readonly groupingType: GroupingType;
    readonly dictionaries: {
        [key: string]: Conversation[]
    };
}


export function getAllConversations(conversationsGrouping: ConversationsGrouping): Conversation[] {
    const all: Conversation[] = [];
    Object.keys(conversationsGrouping.dictionaries).forEach(c => {
        all.push(...conversationsGrouping.dictionaries[c]);
    });
    return all;
}
