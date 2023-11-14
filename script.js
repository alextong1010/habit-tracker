document.addEventListener('DOMContentLoaded', function() {
    generateCalendars(3); // Adjust the number of calendars as needed
});

function generateCalendars(number) {
    const container = document.getElementById('calendar-container');
    for (let i = 0; i < number; i++) {
        const calendar = document.createElement('div');
        calendar.className = 'calendar';
        for (let j = 1; j <= 30; j++) { // Assuming a 30-day month
            const day = document.createElement('div');
            day.className = 'day';
            day.innerText = j;
            day.addEventListener('click', function() {
                this.classList.toggle('checked');
            });
            calendar.appendChild(day);
        }
        container.appendChild(calendar);
    }
}
