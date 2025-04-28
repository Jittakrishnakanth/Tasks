let  red = document.getElementById("red");
let  yellow = document.getElementById("yellow");
let  green = document.getElementById("green");

function changeLight(color) {
    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');
  
    if (color === 'red') {
     red.classList.add('active');
    } 
    else if (color === 'yellow') {
      yellow.classList.add('active');
    } 
    else   {
        green.classList.add('active');
    }
}



  