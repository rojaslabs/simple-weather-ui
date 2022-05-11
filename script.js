function dismiss(){
    document.querySelector('.cookies').remove();
}

function loadingWeather(){
    alert("Loading weather report...");
}

function toF(t){
    return Math.round((t * 1.8) + 32);
}

function toC(t){
    return Math.round((t - 32) / 1.8);
}

function tConversor(element){
    for (var i = 1; i < 9; i++) {
        tempLi = document.querySelector('#t'+i);
        tempValue = parseInt(tempLi.innerText);
        if(element.value == '°F'){
            tempLi.innerText = toF(tempValue) + "°";
        } else{
            tempLi.innerText = toC(tempValue) + "°";
        }
    }
}