import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee.entity';
import {Organization} from '../../../../models/organization.entity';
import {EmployeeViewFormat} from '@app/shared/models/types';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    @Input() user: Employee;
    @Input() org: Organization;
    @Input() showLabel: boolean = true;
    @Input() needPosition: boolean = false;
    @Input() bolderName: boolean = false;
    @Input() public direction: EmployeeViewFormat = 'ltr';

    public employee: Employee = {
        id: 0,
        name: '-',
        photo: '',
        position: '-',
        email: 'email@email.com',
        phone: '+712345678910',
        organization: null
    };

    constructor() {
    }


    ngOnInit() {
        if (!this.user && !this.org) {
            return;
        }
        if (this.user) {
            this.employee = this.user;
        }
        if (this.org) {
            this.employee = {
                id: this.employee.id,
                name: this.org.name,
                photo: this.org.photo,
                email: '',
                phone: '',
                position: '',
                organization: this.org
            };
        }
    }
}
