$(document).ready(function() {
    
    const runLine = $(".run-line");
    const timer = $(".time");
    const pages = [$('.resume'), $('.advertisement'), $('.educational'), $('.entertaining')]
    const totalClass = ['t-resume', 't-advertisement', 't-educational', 't-entertaining']

    const ChangeClass = (el, array) => {
        setInterval(()=>{
            if (el.hasClass(array[0])) {
                el.removeClass(array[0])
                el.addClass(array[1])
            } else if (el.hasClass(array[1])) {
                el.removeClass(array[1])
                el.addClass(array[2])
            } else if (el.hasClass(array[2])) {
                el.removeClass(array[2])
                el.addClass(array[3])
            } else {
                el.removeClass(array[3])
                el.addClass(array[0])
            }
        }, 60000);    
    }

    ChangeClass(timer, totalClass)
    ChangeClass(runLine, totalClass)
    
    setInterval(()=>{
        if (pages[0].hasClass('open')) {
            pages[0].removeClass('open')
            pages[1].addClass('open')
        } else if (pages[1].hasClass('open')) {
            pages[1].removeClass('open')
            pages[2].addClass('open')
        } else if (pages[2].hasClass('open')) {
            pages[2].removeClass('open')
            pages[3].addClass('open')
        } else {
            pages[3].removeClass('open')
            pages[0].addClass('open')
        }
    }, 60000); 
});