import {wait} from '../wait';
import {MOCK} from '@app/mockups';
import {of} from 'rxjs/index';

export function mockDecorator(target: Object, propertyKey: string, descriptor: any): TypedPropertyDescriptor<any> {

    const originalMethod = descriptor.value;

    descriptor.value = async function(...args: any[]) {
        if (this.mock) {
            await wait(3000);
            if (!(this.endpoint in MOCK)) {
                throw `No mock defined for ${this.endpoint}! Add mock file with examples.`
            }
            this.data = MOCK[this.endpoint];
        } else {
            return await originalMethod.apply(this, args);
        }
    };

    return descriptor;
}

export function mockDecorator$(target: Object, propertyKey: string, descriptor: any): TypedPropertyDescriptor<any> {

    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        if (this.mock) {
            let endpoint = args[1];
            if (!(endpoint in MOCK)) {
                throw `No mock defined for ${endpoint}! Add mock file with examples.`
            }
            return of(MOCK[endpoint]);
        } else {
            return originalMethod.apply(this, args);
        }
    };

    return descriptor;
}