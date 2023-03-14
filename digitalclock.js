

setInterval(() => {
    const date = new Date();
    const todayDate = date.getDate() + '/ ' + (date.getMonth() + 1)  + '/ ' + date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    
    const hourDisp = document.querySelector('#hours')
    const minDisp = document.querySelector('#minutes')
    const secDisp = document.querySelector('#seconds')
    const dateDisp = document.querySelector('#date')
    

    hourDisp.textContent = addZero(hours) + ':';
    minDisp.textContent = addZero(minutes) + ':';
    secDisp.textContent = addZero(second); 
    dateDisp.textContent = todayDate ;
    
}, 1000);

function addZero(num) {
    return num < 10? '0' + num: num;
}


let dt = new Date()
const todaDay = dt.getDay();

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayDisp  = document.querySelector('#day')
const todayShow = daysOfTheWeek[todaDay];
dayDisp.textContent = todayShow + ': ';
