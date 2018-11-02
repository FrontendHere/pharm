import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'addLineBreak'
})
export class AddLineBreakPipe implements PipeTransform {

    /**
     *
     * @param str
     * @param breakSymbols - принимает массив символов (хоть чего) перед которыми в строке @str
     * будет вставлен сивол указанный в addSymbol
     * @param addSymbol - по умолчанию содержит символ возможного переноса строки
     */
    transform(str: string, breakSymbols: string[] = ['+', '-'], addSymbol: string = '&#8203;'): string {
        breakSymbols.map((breakSymbol: string) => {
            const regexp = new RegExp('[(\\' + breakSymbol + ')]+', 'g');
            str = str.replace(regexp, breakSymbol + addSymbol);
        });
        return str;
    }

}
