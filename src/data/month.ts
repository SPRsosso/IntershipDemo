import { Task } from './task';

export class Month {
    name: string;
    days: number;
    tasks: Task[];
    constructor(name: string, days: number) {
        this.name = name;
        this.days = days;
        this.tasks = [];
    }
}