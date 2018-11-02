import {FileType} from '@app/shared/models/types';
import {Transform} from 'class-transformer';
function bytesToSize(bytes: number): string {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0B';
    const power: string = Math.floor(Math.log(bytes) / Math.log(1024)).toString();
    const i = parseInt(power, 10);
    return Math.round(bytes / Math.pow(1024, i)) + sizes[i];
}
export class FileClass {
    extension: FileType;
    name: string;
    @Transform((value) => {
        return bytesToSize(value)
    })
    size: string;
    date: Date;
    url: string;
}