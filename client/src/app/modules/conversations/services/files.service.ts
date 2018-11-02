import { Injectable } from '@angular/core';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {plainToClass} from 'class-transformer';
import {Meeting} from '../../../../models/meeting.entity';
import {FileClass} from '@app/shared/models/file';
import {Observable} from 'rxjs/index';

export interface FilesParams {
    limit?: number;
    offset?: number;
}

@Injectable()
export class FilesService extends BaseService<Meeting, FilesParams> {
    protected endpoint: string = 'files';
    protected mock: boolean = true;
    get files(): FileClass[] {
        return plainToClass(FileClass, this.data);
    }
    files$(params: FilesParams): Observable<FileClass[]> {
        return this.subscribeOnce(
            params,
            this.endpoint,
            FileClass)
    }
}
