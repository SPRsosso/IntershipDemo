export class Task {
    day: number;
    name: string;
    description: string;
    time: string;

    constructor(day: number, name: string, description: string, time: string) {
        this.day = day;
        this.name = name;
        this.description = description;
        this.time = time;
    }
}