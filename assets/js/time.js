$(document).ready(function() {

    const timer = $(".timer");
    
    const FormatTime = (value) => {
        if (value < 10) {
            value = `0${value}`;
        }
        return value;
    }

    const time = () => {
        const Time = new Date();
        const hours = FormatTime(Time.getHours());
        const minutes = FormatTime(Time.getMinutes());
        const seconds = FormatTime(Time.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }

    timer.html(time);
    setInterval(()=>{
        timer.html(time);
    }, 1000);
});