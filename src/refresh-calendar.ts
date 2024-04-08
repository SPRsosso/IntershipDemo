function refreshCalendar(): void {
    const div = document.querySelector("main");
    if (!div) return;

    div.innerHTML = "";
    months.forEach(month => {
        div.innerHTML += `<calendar-month days="${month.days}">${month.name}</calendar-month>`;
    });
}
refreshCalendar();
