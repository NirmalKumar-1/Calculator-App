let input = document.getElementById("input");
let inputBtns = document.querySelectorAll(".input-button");
let arthOpps = document.querySelectorAll(".arth-opp");
let clearBtn = document.getElementById("clear");
let deleteBtn = document.getElementById("erase");
let equalBtn = document.getElementById("equal");
let dotOpp = document.getElementById("dot-opp");
let equalPressed = 0

window.onload = ()=> {
    input.value = "";
}

// delete last value 
function deleteLastVal(){
    equalPressed = 0;
    let val = input.value;
    let deletedVal = val.substr(0, val.length-1)
    input.value = deletedVal;
}

// numbers add
inputBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(equalPressed==1){
            input.value = "";
            equalPressed = 0;
        }
        input.value += btn.value;
    })
})

// operators add
arthOpps.forEach(btn => {
    btn.addEventListener('click', () => {
        equalPressed = 0;
        if(input.value!==""){
           if((input.value.charAt(input.value.length-1) == '+') || (input.value.charAt(input.value.length-1) == '-') || (input.value.charAt(input.value.length-1) == '/') || (input.value.charAt(input.value.length-1) == '*')){
                deleteLastVal();
                input.value+=btn.value;
           }else {
                input.value += btn.value;
           }
        }else {
            alert("Invalid format used.")
        }
    })
})

// all clear
clearBtn.addEventListener('click', ()=> {
    equalPressed = 0;
    input.value = "";
})

// delete 
deleteBtn.addEventListener('click', deleteLastVal);

// dot add
dotOpp.addEventListener('click', ()=> {
    if(equalPressed==1){
        input.value = "";
        equalPressed = 0;
    }
    let isValid = false;

    if((input.value.charAt(input.value.length-1)=='/') || (input.value.charAt(input.value.length-1)=='*') || (input.value.charAt(input.value.length-1)=='+') || (input.value.charAt(input.value.length-1)=='-') || (input.value == "")){
        input.value+='0.'
    }else{
        for(let i=input.value.length-1; i>=0; i--){
            if(input.value.charAt(i)=='/' || input.value.charAt(i)=='*' || input.value.charAt(i)=='+' || input.value.charAt(i)=='-'){
                isValid = true;
                break;
            }else if(input.value.charAt(i)== '.'){
                isValid = false;
                break;
            }else {
                isValid = true;
            }
        }
    }
    if(isValid==true){
        input.value += '.';
    }
})

// calculate
equalBtn.addEventListener('click', () => {   
    try {
        let res = eval(input.value);
        res = res.toString();
        
        if(res.length>15){
            res = res.substr(0, 15);
        }
        input.value = res;
        equalPressed = 1;
    }catch(error){
        alert("Invalid format used.")
    }
})