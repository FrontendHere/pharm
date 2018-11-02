import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(value: any, args?: any): string {
        let result = '-'; // По умолчанию отдаем тире
        if (!value) {
            return result;
        }
        const phone = value.replace(/[^0-9]/gi, ''); // чистим все не цифры
        const isPhone: boolean = /\d{11}/gi.test(phone); // Можно расширить проверку на городские в зависимости от кол-ва цифр

        if (isPhone) {
            const regularExpResult = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/gi.exec(phone);
            regularExpResult.shift();
            result = regularExpResult.join(' ');
        }
        return result;
    }
}
