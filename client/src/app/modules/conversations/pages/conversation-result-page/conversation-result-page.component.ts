import {Component, OnInit} from '@angular/core';
import {Conversation} from '../../../../../models/conversation.entity';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {Observable, of} from 'rxjs';
import {catchError, shareReplay, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-conversation-card-page',
    templateUrl: './conversation-result-page.component.html',
    styleUrls: ['./conversation-result-page.component.scss']
})
export class ConversationResultPageComponent implements OnInit {

    conversation: Observable<Conversation>;

    constructor(
        private activateRoute: ActivatedRoute,
        private conversationService: ConversationsService,
        private router: Router
    ) {
    }
    ngOnInit() {
        this.conversation = this.activateRoute.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    const conversationId: number = +params.get('id');
                    if (!Number.isFinite(conversationId)) {
                        throw new Error();
                    }
                    return this.conversationService.getConversation(conversationId);
                }),
                catchError(e => {
                    this.router.navigate(['/error']);
                    return of(null);
                }),
                shareReplay()
            );
    }
}

