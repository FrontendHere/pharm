import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SimpleEntity} from '@app/shared/models/simpleEntity';
import {SearchContext, SearchQuery} from '@app/shared/DTO/query/searchQuery';
import {BaseApiService} from '@app/shared/services/BaseApi';


@Injectable()
export class SearchContentService {

    constructor(private api: BaseApiService) {
    }

    search(context: SearchContext, startsWith: string): Observable<SimpleEntity[]> {
        const query: SearchQuery = {
            context: {
                field: 'name',
                model: context
            },
            searchText: startsWith
        };
        return this.api.post('search', query);
        // return of(['Project1', 'Medicine'].filter(v => v.toLowerCase().indexOf(startsWith.toLowerCase()) >= 0)
        //     .map(v => <SimpleEntity>{id: 1, name: v}));
    }

}
