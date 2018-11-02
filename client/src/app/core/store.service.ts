import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  private modules: { [key: string]: any } = {};

  get(name: string) {
    return this.modules[name];
  }

  set(name: string, data: any) {
    // TODO emit event
    this.modules[name] = data;
  }

}
