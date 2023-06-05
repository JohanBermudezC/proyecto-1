
let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(ico_hamburguer){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        ico_hamburguer= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        ico_hamburguer= true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color ="#000";
})
         

//VARIABLES
const nameuno="cualquier cosa texto, num, obj, array";
var name_dos="cualquier cosa texto, num, obj, array"+" variables globales";
let nameTres="cualquier cosa texto, num, obj, array, trabaja por bloques";

alert(nameuno);
console.log(name_dos);
console.log(nameTres);

//TIPOS DE DATOS 
let num_a = 5; //Número entero
let num_b = 10.2; //Número décimal
let boolean = false ; // o true
let Stringvar = "Hola soy un string";
let arraynum = [1,2,3,4,5,"6","7","8"];
let dias_semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
let users = [
    {name:"Johan", last_name:"Bermúdez", age:31},
    {name:"Samuel", last_name:"Bermúdez", age:32},
    {name:"Jose", last_name:"Bermúdez", age:33}

]
//OPERACIONES MATEMATICAS: + - * / % ^ 
let suma = num_a + num_b;
let resta = num_b - num_a;
let multi = num_a * num_b;
let divid = num_a / num_b;
let modulo = num_a % num_b;
let expo = num_a ^ num_b;
resta = Math.round(resta);
console.log("suma: "+suma + "\nResta: "+resta+"\nMultiplicacion: "+multi);

//OPERADORES DE COMPARACIÓN: < / > / <> / >= / <= / = / == / ===
//OPERADORES LÓGICOS: Ternario / and && / or || / Negación, Diferente, Contrario
let varboo = true;
console.log(!varboo);

//ESTRUCTURAS REPETITIVAS: IF / ELSE / ELSEIF
//ESTRUCTURAS CICLICAS: FOR / WHILE / DO WHILE

if (arraynum.length > 7){
    console.log(arraynum);
    console.log(users[0].name)
}
for(let i =0; i<dias_semana.length;i++){
    console.log(dias_semana[i]);
}
let i=0;
while(i<users.length){
    console.log(users[i].name);
    i++;
}
//FUNCIONES Y EVENTOS
function funcion(){
    let variable = document.getElementById("variable").value;
    document.getElementById("titulo").innerText = variable;
    console.log(variable);
}
document.getElementById("evento").addEventListener("click", function(){
    let variable = document.getElementById("variable").value;
    document.getElementById("variable").style.background="blue";
    console.log(variable);
})

document.getElementById("cambiar_fondo").addEventListener("dblclick", function(){
    document.getElementById("contenedor").style.background="aquamarine"
})
