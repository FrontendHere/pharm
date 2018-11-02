import { Component } from '@angular/core';
import {FileClass} from '@app/shared/models/file';
import {FilesService} from '@app/modules/conversations/services/files.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'conversations-files-page',
  templateUrl: './conversations-files-page.component.html',
  styleUrls: ['./conversations-files-page.component.scss']
})
export class ConversationsFilesPageComponent {
    files: Observable<FileClass[]> = this.filesService.files$({});
    constructor(private filesService: FilesService) {}
}
