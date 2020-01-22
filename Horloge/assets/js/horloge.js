const secondsDiv = document.querySelector("#secondes");
const minutesDiv = document.querySelector("#minutes");
const hoursDiv = document.querySelector("#heures")

function setdate(){
    var now = new Date();

    const seconds = now.getSeconds();
    const secDeg = ((seconds/60)*360);
    $(secondsDiv).css({'transform' : 'rotate('+ secDeg +'deg)'});

    const minutes = now.getMinutes();
    const minDeg = ((minutes/60)*360) + ((minutes/60)*6)+180;
    $(minutesDiv).css({'transform' : 'rotate('+ minDeg +'deg)'});

    const hours = now.getHours();
    const hourDeg = ((hours/12)*360) + ((minutes/60)*30+180)
    $(hoursDiv).css({'transform' : 'rotate('+ hourDeg +'deg)'});

}
setInterval(setdate,1000);
