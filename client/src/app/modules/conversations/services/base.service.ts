import {HttpClient} from '@angular/common/http';
import {plainToClass} from 'class-transformer';
import {loadingDecorator} from '../../../../utils/decorators/loading';
import {mockDecorator, mockDecorator$} from '../../../../utils/decorators/mock';
import {shareReplay} from 'rxjs/internal/operators';
import {map} from 'rxjs/operators';

export abstract class BaseService<T, P> {

    public loading: boolean = false; // Используется loading декоратором
    protected endpoint: string;
    protected responseClass: any;
    public data: T[] = [];
    public error: any;
    protected mock: boolean = false;

    constructor(protected http: HttpClient) {}

    @loadingDecorator
    @mockDecorator
    async get(params: P = <P>{}, path: string = null) {
        let apiPath = path || this.endpoint;
        await this.http.get('/api/' + apiPath, <any>{ params }).subscribe(
            (data: any) => this.data = plainToClass(<any>this.responseClass, data), // success path
            (error: Error) => {
                this.error = error;
                throw this.error;
            }
        );
    }

    @mockDecorator$
    get$(params: P = <P>{}, path: string = null) {
        let apiPath = path || this.endpoint;
        return this.http.get('/api/' + apiPath, <any>{ params })
    }

    subscribeOnce(params: P, path: string, instanceClass: any) {
        return this.get$(params, path).pipe(
            map((items: any) => <any>plainToClass(instanceClass, items)),
            shareReplay(1)
        );
    }

    subscribe(params: P, path: string, instanceClass: any) {
        return this.get$(params, path).pipe(
            map((items: any) => <any>plainToClass(instanceClass, items))
        );
    }

}
