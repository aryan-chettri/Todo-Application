function getCurrentDay(){

    let now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    const day = days[now.getDay()];

    document.querySelector('.currentDay').innerHTML = day;
}


function getCurrentDate(){

    let now = new Date();
    
    // document.querySelector('.currentDate').innerHTML= now.toLocaleString();

    return now.toLocaleDateString()
}

let currentDate = getCurrentDate();

document.querySelector('.currentDate').innerHTML = currentDate ; 

getCurrentDay();