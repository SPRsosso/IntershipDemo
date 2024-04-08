function scrollOut(obj: HTMLElement): void {
    const list = obj.parentElement?.querySelector<HTMLDivElement>(".list");

    if (!list) return;

    list.classList.toggle("active");
}
