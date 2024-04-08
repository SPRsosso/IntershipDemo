function popModal(month: string, day: number) {
    const modal = document.createElement("div");
    modal.classList.add("modal-screen");

    modal.innerHTML = `
        <div id="screen">
            <div id="modal">
                <p>Title: <input type="text" id="title"></p>
                <div>
                    <p>Description: </p>
                    <textarea id="description" style="width: 200px; height: 100px;"></textarea>
                </div>
                <p>Time: <input type="time" id="time"></p>
                <div id="buttons" style="position: absolute; bottom: 0; right: 0; padding: 20px;">
                    <button onclick="closeModal()" id="cancel-btn">Cancel</button>
                    <button id="add-btn">Add</button>
                </div>
            </div>
        </div>
    `;

    (modal.querySelector<HTMLElement>("#screen") as HTMLElement).style.cssText = `
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.5);
        
        position: absolute;
        top: 0;
        left: 0;

        z-index: 10;
    `;

    (modal.querySelector<HTMLElement>("#modal") as HTMLElement).style.cssText = `
        width: 50%;
        height: 50%;

        background-color: white;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    (modal.querySelector<HTMLElement>("#cancel-btn") as HTMLElement).style.cssText = `
        padding: 10px 20px;

        background: none;

        border: 1px solid gray;
        color: gray;

        cursor: pointer;
    `;

    (modal.querySelector<HTMLElement>("#add-btn") as HTMLElement).style.cssText = `
        padding: 10px 20px;

        border: 1px solid gray;

        background: lightgray;
        color: gray;

        cursor: pointer;
    `;

    modal.querySelector<HTMLElement>("#add-btn")?.addEventListener("click", () => {
        const title: string = document.querySelector<HTMLInputElement>("#title")?.value as string;
        const description: string = document.querySelector<HTMLTextAreaElement>("#description")?.value as string;
        const time: string = document.querySelector<HTMLInputElement>("#time")?.value as string;
        
        saveTask(month, day, title, description, time);
        refreshCalendar();
        closeModal();
    });

    document.body.append(modal);
}

function closeModal() {
    const modals = document.querySelectorAll(".modal-screen");

    if (!modals) return;

    modals.forEach(modal => {
        modal.remove();
    });
}