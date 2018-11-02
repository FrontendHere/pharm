import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseApiService {

    constructor(private http: HttpClient) {
    }

    get<TResponse, TRequest>(url: string, params?: TRequest): Observable<TResponse> {
        const queryParams = this.convertModelToQueryParams(params);
        return this.http.get<TResponse>(`/api/${url}`, {params: queryParams});
    }

    post<TResponse, TRequest>(url: string, params: TRequest): Observable<TResponse> {
        return this.http.post<TResponse>(`/api/${url}`, params);
    }

    put<TResponse, TRequest>(url: string, params: TRequest): Observable<TResponse> {
        return this.http.put<TResponse>(`/api/${url}`, params);
    }

    delete<TResponse, TRequest>(url: string, params: TRequest): Observable<TResponse> {
        return this.http.delete<TResponse>(`/api/${url}`, params);
    }

    private convertModelToQueryParams<TModel>(model: TModel): HttpParams {
        const queryParams = new HttpParams();
        Object.keys(model).forEach(p => {
            queryParams.set(p, model[p]);
        });
       return queryParams;
    }
}
