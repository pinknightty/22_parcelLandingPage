AOS.init();

const eventDate = new Date("Dec 01, 2024 08:30:00");
const timeStamp = eventDate.getTime();

const hourCount = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const distUntilEvent = timeStamp - timeStampNow;

    const dayIntoMs = 1000 * 60 * 60 * 24;
    const hourIntoMs = 1000 * 60 * 60;
    const minuteIntoMs = 1000 * 60;
    const secondsIntoMs = 1000;

    const daysUntilEvent = Math.floor(distUntilEvent / dayIntoMs);
    const hoursUntilEvent =  Math.floor((distUntilEvent % dayIntoMs) / hourIntoMs);
    const minutesUntilEvent = Math.floor((distUntilEvent % hourIntoMs) / minuteIntoMs);
    const secondsUntilEvent = Math.floor((distUntilEvent % minuteIntoMs) / secondsIntoMs);

    document.getElementById('contador').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (distUntilEvent < 0) {
        clearInterval(hourCount);
        document.getElementById('contador').innerHTML = 'Evento expirado!';
    }

}, 1000);