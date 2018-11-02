import { Project } from './project.entity';
export declare class TalkSubject {
    id: number;
    name: string;
    prev_agreement: string;
    achieved_agreement: string;
    project: Project;
}
