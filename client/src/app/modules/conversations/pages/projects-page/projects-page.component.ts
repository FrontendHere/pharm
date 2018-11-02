import {Component, OnInit} from '@angular/core';
import {Project} from '../../../../../models/project.entity';
import {catchError, map, shareReplay, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

    projects: Observable<Project[]>;

    constructor(
        private activateRoute: ActivatedRoute,
        private conversationService: ConversationsService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.projects = this.activateRoute.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    const conversationId: number = +params.get('id');
                    if (!Number.isFinite(conversationId)) {
                        throw new Error();
                    }
                    return this.conversationService.getConversation(conversationId)
                        .pipe(map(c => c.projects));
                }),
                catchError(e => {
                    this.router.navigate(['/error']);
                    return of(null);
                }),
                shareReplay()
            );
    }

}
