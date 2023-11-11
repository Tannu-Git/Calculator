a = document.getElementsByClassName('button')
b = document.getElementsByTagName('h2')

const readyDoc = () =>{alert('Check console to switch to dark mode (press ctrl+shift+i)')}
console.log('14789632 --> Dark mode\n74123 --> Light mode')
const operators =    ['%','/','*','+','-','=']
let flag = false
let flag2 = false
function checkop(inputvalue){
    for (let o = 0;o < operators.length ;o++)
    if (inputvalue == operators[o]){
        flag = true
        break
    }else{
        flag = false
    }
    return flag
}

function check_dot_start(calc_bar) {
    for(let i =0; i<a[0].innerText.length;i++){
        if(checkop(calc_bar[i]) == true || calc_bar[i] == '.'){
            flag2 = false
            break
        }else{
            flag2 = true
        }
    }
    return flag2
}

function check_dot(calc_bar){
    

    for(let i =a[0].innerText.length ; i>0;i--){
        // for first that there must be a sign 
        if (calc_bar[i] == '.'){
            return false
            break
        }else if(checkop(calc_bar[i])){
            return true
            break
        }
    }
}

for (let i=1;i<a.length;i++){
    a[i].addEventListener('click',()=>{
        // console.log(a[i].innerText)
        if (a[i].innerText != 'AC' && a[i].innerText != 'DEL' && a[i].innerText != '=' && a[i].innerText != 'Spider'  && a[i].innerText != '.'   ){
            if (checkop(a[i].innerText) == true && b[0].innerText == '0') {
                b[0].innerText = 0
            }else if(b[0].innerText == '0' ) {
                b[0].innerText = a[i].innerText
            }
            // replace the old operator if we input another operator
            // if the input is operator and last is input is also a operator then it replace the operator
            else if(checkop(a[0].innerText.charAt(b[0].innerText.length-1)) == true && checkop(a[i].innerText) == true ){
                b[0].innerText = a[0].innerText.slice(0, -1);
                b[0].innerText = a[0].innerText + a[i].innerText
            }else if(b[0].innerText != '0'){
                b[0].innerText = a[0].innerText + a[i].innerText}
            
    }else if(check_dot(a[0].innerText) == true && check_dot_start(a[0].innerText)== false && a[i].innerText != 'AC' && a[i].innerText != 'DEL' && a[i].innerText != '=' && a[i].innerText != 'Spider' ){
        b[0].innerText = a[0].innerText + a[i].innerText
    }else if (check_dot_start(a[0].innerText)== true && a[i].innerText != 'AC' && a[i].innerText != 'DEL' && a[i].innerText != '=' && a[i].innerText != 'Spider'  ){
        b[0].innerText = a[0].innerText + a[i].innerText
    }else if (a[i].innerText == 'AC'){
        if(b[0].innerText == '14789632'){
            window.location = "main.html";
        }else if(b[0].innerText == '74123'){
            window.location = "2L.html";
        }
        else{
            b[0].innerText = 0
        }
        }else if (a[i].innerText == 'DEL'){
            b[0].innerText = a[0].innerText.slice(0, -1);
        }else if (a[i].innerText == '='){
            // if last character is a operator remove it and eval
            if(checkop(a[0].innerText.charAt(b[0].innerText.length-1)) == true){
                b[0].innerText = a[0].innerText.slice(0, -1);
                let c = eval(a[0].innerText) 
                b[0].innerText = c;
            }else{
                let c = eval(a[0].innerText) 
                b[0].innerText = c;
            } 
        }
    })
}

addEventListener("keypress", (event) => {
    for (let i=1;i<a.length;i++){
        if (event.key == a[i].innerText){
            a[i].click()
        }else if (event.key == 'Enter'){
            a[20].click()
        }
    }
});

