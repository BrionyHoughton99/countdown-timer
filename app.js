const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const demo = document.getElementById("demo");
const reset = document.getElementById("reset");
const start = document.getElementById("start");

let endTimer = new Audio("sounds/alarm.mp3")


const userTime = () => {
   
     timer = () => {

    let inputHours = parseInt(hours.value) * 3600;
    console.log(inputHours)
    let inputMinutes = parseInt(minutes.value) * 60;
    console.log(inputMinutes)
    let inputSeconds = parseInt(seconds.value) + 1;
    console.log(inputSeconds)
    let userInput = inputHours + inputMinutes + inputSeconds;
    console.log(userInput)

    let second = 1;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

      display = () => {

        if (userInput == 0){
          clearInterval(stopTimer)
          demo.innerHTML = "The end";
          start.disabled = false;
          endTimer.play();
          return;
        }else {
          userInput--
          start.disabled = true;
          
        }
        

        
      let hrs = Math.floor((userInput % day) / hour);
      let mins = Math.floor((userInput % hour) /  minute);
      let secs = Math.floor((userInput % minute) / second);

      if (userInput == 0){
        secs = secs < 10 ? "0" + mins : mins
      }else {
        secs = secs < 10 ? "0" + secs : secs;
      }
  

      if (hrs == 1 ){
        demo.innerHTML = `${hrs} hours`;
        demo.innerHTML = `${mins} minutes`;
        demo.innerHTML = `${secs} seconds`;
      } else if (mins == 1){
        demo.innerHTML = `${hrs} hours`;
        demo.innerHTML = `${mins} minutes`;
        demo.innerHTML = `${secs} seconds`;
      } else if ( secs == 1){
        demo.innerHTML = `${hrs} hours`;
        demo.innerHTML = `${mins} minutes`;
        demo.innerHTML = `${secs} seconds`;
      } else {
        demo.innerHTML = `${hrs} hours`;
        demo.innerHTML = `${mins} minutes`;
        demo.innerHTML = `${secs} seconds`;
      }
        document.getElementById("demo").innerHTML = hrs + "h "
    + mins + "m " + secs + "s ";


        document.getElementById('reset').addEventListener('click', () => {
        if (userInput != 0){
        usderInput.value = 0;
        }
          demo.innerHTML = userInput
  
      })
    }
      stopTimer = setInterval(display, 1000);

 

      document.getElementById('stop').addEventListener('click', () => {
        clearInterval(stopTimer);
        start.disabled = false;
      })

      document.getElementById('reset').addEventListener('click', () => {
        userInput = "0";
      })

    }
    timer();
 
  } 