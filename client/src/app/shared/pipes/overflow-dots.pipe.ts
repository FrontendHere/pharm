import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appOverflowDots'
})
export class OverflowDotsPipe implements PipeTransform {

    transform(value: string, limit: number): string {
        if (value == null) {
            return '';
        }
        const string = this.strip(value);
        return string.length > limit ? string.slice(0, limit) + '...' : string;
    }

    strip(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }
}
