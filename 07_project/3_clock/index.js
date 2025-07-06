const clock = document.getElementById('clock')

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();        // for time 
    //clock.innerHTML = date.toLocaleDateString();      for date
 }, 1000);

