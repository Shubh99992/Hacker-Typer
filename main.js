let array_script = [];
let count = 0;
let text = document.querySelector("#text");
let container = document.querySelector("#container");

for(h of hacking_script){
    array_script.push(h);
};

console.log(array_script);

window.addEventListener("keypress",()=>{
    // auto scroll
    container.scrollTop = container.scrollHeight;
    count++;
    if((array_script[count-1]== "{" || array_script[count-1] == "}" || array_script[count-1] == ";" || array_script[count-1] == ")" || array_script[count-1] == "/") && array_script[count] == " "){
        text.innerHTML += array_script[count-1] + '<br><br>';
        array_script[count] = '';
    }else{
        text.innerHTML += array_script[count-1]
    }
});