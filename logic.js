const display = document.getElementById("display");

function appendToDisplay(input) {

    display.value += input;
   

}
function calculate() {
    try {
        display.value = eval(display.value);
        setTimeout(() => {
            display.value = "";
        }, 1000);
        
    }
    catch (error) {
        display.value = "Error";
     
    
        if(display.value === "Error"){

            setTimeout(() => {
                display.value = "";
            }, 800);

        }
        
    }
}

function allclear() {
    display.value = "";
}