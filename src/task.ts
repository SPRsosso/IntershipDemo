class Task {
    day: number;
    title: string;
    description: string;
    time: string;

    constructor(day: number, title: string, description: string, time: string) {
        this.day = day;
        this.title = title;
        this.description = description;
        this.time = time;
    }
}

function addTask(obj: HTMLElement) {
    const month: string = obj.parentElement?.parentElement?.parentElement?.parentElement?.querySelector("h1")?.innerHTML as string;
    const day: number = parseInt(obj.parentElement?.querySelector<HTMLElement>("h3")?.innerHTML as string);

    popModal(month, day);
    
    console.log(month, day);
}

function saveTask(month: string, day: number, title: string, description: string, time: string) {
    const monthArrayObject: Month = months.find(mon => mon.name == month) as Month;
    monthArrayObject.tasks.push(new Task(day, title, description, time));
}
