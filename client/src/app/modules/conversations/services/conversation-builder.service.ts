import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConversationsService} from "@app/modules/conversations/services/conversations.service";
import {Conversation} from "../../../../models/conversation.entity";
import {BaseApiService} from "@app/shared/services/BaseApi";
import {Observable, of} from "rxjs";
import {cloneDeep} from 'lodash';
import {AutocompleteList} from "@app/modules/conversations/models/conversation-builder";

@Injectable()
export class ConversationBuilderService {

    readonly apiUrl = 'conversations';

    private _editableConversation: Conversation;

    public formOfConversation: FormGroup;
    public checkedList: AutocompleteList = {};

    constructor(
        private api: BaseApiService,
        private fb: FormBuilder,
        private cs: ConversationsService
    ) {
        this.formOfConversation = this.fb.group({
            phase: [0],
            medicine: [null, Validators.required],
            mnn: [null, Validators.required],
            nosology: [null, Validators.required],
            counterparties: [null, Validators.required],
            interaction_schema: [null],
            expectedRegisterDate: [new Date()],
            competitors: [null],
            description: [null]
        });



    }

    set editableConversation(d: Conversation) {
        this._editableConversation = cloneDeep(d);
    }

    get editableConversation(): Conversation {
        return this._editableConversation;
    }

    isValidRequiredField(field: string): boolean {
        let validField: boolean;

        this.formOfConversation.controls[field].clearValidators();
        this.formOfConversation.controls[field].setValidators(Validators.required);
        this.formOfConversation.controls[field].updateValueAndValidity({onlySelf: true});

        if(this.checkedList.hasOwnProperty(field) && this.checkedList[field].length > 0) {
            validField = true;
        } else {
            validField = this.formOfConversation.controls[field].valid;
        }

        if (validField) {
            this.formOfConversation.controls[field].clearValidators();
            this.formOfConversation.controls[field].updateValueAndValidity({onlySelf: true})
        }
        return validField;
    }

    isValidRequiredFields(fields: string[], ifOne: boolean = true): boolean {
        let validateFields: boolean[] = [],
            result: boolean;
        for (let key of fields) {
            validateFields.push(this.isValidRequiredField(key));
        }

        result = ifOne ? validateFields.includes(true) : !validateFields.includes(false);
        if (result) {
            for (let key of fields) {
                this.formOfConversation.controls[key].clearValidators();
                this.formOfConversation.controls[key].updateValueAndValidity({onlySelf: true});
            }
        }

        return result;
    }

    toModel(): Conversation {
        const
            model: Conversation = ({} as Conversation),
            arrayItems: string[] = [
                'counterparties', 'interaction_schema', 'competitors'
            ];


        for (let field in this.formOfConversation.controls) {
            let value: any = this.formOfConversation.controls[field].value;

            if (arrayItems.includes(field) && !this.checkedList[field]) {

                Object.assign(model, {
                    [field]: [...this.checkedList[field].map(i => i.id)]
                });
            }

            if (!value && !arrayItems.includes(field)) {
                Object.assign(model, {[field]: value});
            } else if (value && 'id' in value) {
                if (Array.isArray(model[field])) {
                    model[field] = [...model[field], value.id]
                } else {
                    Object.assign(model, {[field]: value.id});
                }

            } else if (!arrayItems.includes(field)) {
                Object.assign(model, {[field]: value});
            }

        }

        return model;

    }

    save(): Observable<any> {
        this.formOfConversation.updateValueAndValidity({onlySelf: true});
        if (this.formOfConversation.invalid) {
            //TODO выкинуть ошибку, что форма не валидна... подсветить страницы на которых форма не валидна
            throw new Error('Не заполнены обязательные поля формы');
        }

        return this.api.post(this.apiUrl, this.toModel());
    }
}
