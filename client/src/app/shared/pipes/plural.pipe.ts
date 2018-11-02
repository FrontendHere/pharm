import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'plural'})
export class PluralPipe implements PipeTransform {

    transform(number: number, forms: string[]): string {
        let temp_number: number = number % 10,
            form: string;

        number = Number(Math.abs(number) % 100);

        form = (number > 10 && number < 20) ? forms[2] :
            (temp_number > 1 && temp_number < 5) ? forms[1] :
                (temp_number == 1) ? forms[0] : forms[2];

        return number + " " + form;
    }

}
