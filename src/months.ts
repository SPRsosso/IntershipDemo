class Month {
    name: string;
    days: number;
    tasks: Task[];

    constructor(name: string, days: number) {
        this.name = name;
        this.days = days;
        this.tasks = [];
    }
}

const months: Month[] = [
    new Month("January", 31),
    new Month("February", 28),
    new Month("March", 31),
    new Month("April", 30),
    new Month("May", 31),
    new Month("June", 30),
    new Month("July", 31),
    new Month("August", 31),
    new Month("September", 30),
    new Month("October", 31),
    new Month("November", 30),
    new Month("December", 31)
];
