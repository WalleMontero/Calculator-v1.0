//#### DEFINIMOS LAS VARIABLES RELACIONADAS A LOS BOTONES
var n0 = document.getElementById("n0");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var productButton = document.getElementById("product");
var devidedButton = document.getElementById("devided");
var resetButton = document.getElementById("reset");

var equalsButton = document.getElementById("equals");
var screen = document.getElementById("screen");
var operations = document.getElementById("operations");


//##### VARIBALES PARA OPERACIONES INTERNAS #####
var value = "";
var valuesList = [];


//##### FUNCIONES INTERNAS #####
function concat(n){
    value = value.concat(n.toString()); //Concatenamos los numeros a una variable
}
function result(lista) {
    resultValue = parseInt(lista[0]);
    for(let i=1 ; i < lista.length ; i = i+2){
        
        if (lista[i] == "+"){    //Estructura de if-else para operaciones.
            resultValue = resultValue + parseInt(lista[i+1]);
        } else if (lista[i] == "-"){
            resultValue = resultValue - parseInt(lista[i+1]);
        } else if (lista[i] == "*"){
            resultValue = resultValue * parseInt(lista[i+1]);
        } else {
            resultValue = resultValue / parseInt(lista[i+1]);
        } 
    }
    return resultValue;
}

// #### BOTONES NUMERICOS ####
n0.addEventListener("click", ()=>{
    concat(0);
    screen.innerHTML = value;
});

n1.addEventListener("click", ()=>{
    concat(1);
    screen.innerHTML = value;
});

n2.addEventListener("click", ()=>{
    concat(2);
    screen.innerHTML = value;
});

n3.addEventListener("click", ()=>{
    concat(3);
    screen.innerHTML = value;
});

n4.addEventListener("click", ()=>{
    concat(4);
    screen.innerHTML = value;
});

n5.addEventListener("click", ()=>{
    concat(5);
    screen.innerHTML = value;
});

n6.addEventListener("click", ()=>{
    concat(6);
    screen.innerHTML = value;
});

n7.addEventListener("click", ()=>{
    concat(7);
    screen.innerHTML = value;
});

n8.addEventListener("click", ()=>{
    concat(8);
    screen.innerHTML = value;
});

n9.addEventListener("click", ()=>{
    concat(9);
    screen.innerHTML = value;
});


// ##### BOTONES OPERACIONES MATEMATICAS #####
plusButton.addEventListener("click", ()=>{
    if (!value == ""){
    valuesList.push(value);
    valuesList.push("+");
    screen.innerHTML = "";
    operations.innerHTML = valuesList.join(" ");
    value = "";
    }
});

minusButton.addEventListener("click", ()=>{
    if (!value == ""){
    valuesList.push(value);
    valuesList.push("-");
    screen.innerHTML = "";
    operations.innerHTML = valuesList.join(" ");
    value = "";
    }
});

productButton.addEventListener("click", ()=>{
    if (!value == ""){
    valuesList.push(value);
    valuesList.push("*");
    screen.innerHTML = "";
    operations.innerHTML = valuesList.join(" ");
    value = "";
    }
});

devidedButton.addEventListener("click", ()=>{
    if (!value == ""){
    valuesList.push(value);
    valuesList.push("/");
    screen.innerHTML = "";
    operations.innerHTML = valuesList.join(" ");
    value = "";
    }
});

equalsButton.addEventListener("click", ()=>{
    if (!value == ""){
    valuesList.push(value);
    let r = result(valuesList)
    screen.innerHTML = r;
    value = r;
    operations.innerHTML = valuesList.join(" ");
    valuesList = [];
    }
});

reset.addEventListener("click", ()=>{
    screen.innerHTML = "RESET";
    operations.innerHTML = "RESET";
    valuesList = [];
    value = "";
    setTimeout(()=>{screen.innerHTML = 0;operations.innerHTML = "";}, 1000);
});



