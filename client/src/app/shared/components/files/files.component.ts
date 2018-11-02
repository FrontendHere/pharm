import {Component, Input, OnInit} from '@angular/core';
import {FileClass} from '@app/shared/models/file';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})
export class FilesComponent {
    @Input() files: FileClass[];
    constructor() {
    }

    download(url: string, fileName: string){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            const urlCreator = window.URL || window['webkitURL'];
            const imageUrl = urlCreator.createObjectURL(this.response);
            let tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }
}
