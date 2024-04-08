function scrollOut(obj: HTMLElement) {
    const list = obj.parentElement?.querySelector<HTMLDivElement>(".list");

    if (!list) return;

    list.classList.toggle("active");
}