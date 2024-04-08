class CalendarMonth extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        if (!this.shadowRoot) return;
        if (!this.shadowRoot.host) return;
        
        const days: string = this.shadowRoot.host.getAttribute("days") as string;
        const month: string = this.shadowRoot.host.innerHTML;

        const tasks: Task[] = months.find(mon => mon.name == month)?.tasks as Task[];

        let div: string = "";
        for (let i = 1; i <= parseInt(days); i++) {
            let classes: string = "day";
            let cards: string = "";
            let task: Task | undefined = tasks.find(task => task.day == i);
            if (task) {
                if (tasks.length)
                    classes = "day tasked";

                for (let j = 0; j < tasks.length; j++) {
                    if (tasks[j].day == task.day)
                        cards += `
                            <div class="card">
                                <div>
                                    <h3>${tasks[j].title}</h3>
                                    <p>${tasks[j].description}</p>
                                </div>
                                <small>${tasks[j].time}</small>
                            </div>
                        `;
                }
            }

            div += `
                <div class="${classes}">
                    <div class="menu">
                        <h3>${i}</h3>
                        <button onclick="addTask(this)">+</button>
                    </div>
                    <div class="tasks">
                        ${cards}
                    </div>
                </div>
            `;
        }

        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }

                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                }

                section {
                    width: 100%;

                    user-select: none;
                }

                section h1 {
                    padding: 10px;

                    cursor: pointer;
                }

                .list {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    padding: 10px;

                    display: none;
                }

                .day {
                    width: 33%;
                    height: auto;

                    border: 1px solid gray;
                }

                .day .menu {
                    border-bottom: 1px solid gray;
                    padding: 4px;
                    
                    display: flex;
                    justify-content: space-between;
                }

                .day button {
                    width: 20px;
                    aspect-ratio: 1;
                    background: none;
                    border: 1px solid gray;
                    color: gray;

                    cursor: pointer;
                }

                .list.active {
                    display: flex;
                }

                .card {
                    width: 100%;
                    padding: 10px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                }

                .tasked {
                    width: 100%;
                }
            </style>
            <section>
                <h1 onclick="scrollOut(this)">${month}</h1>
                <div class="list">
                    ${div}
                </div>
            </section>
        `;
    }
}

customElements.define("calendar-month", CalendarMonth);