 const display = document.getElementById('display');

const buttons = document.querySelectorAll("button");

let contador = true;
buttons.forEach((items)=>{
    items.onclick=()=>{
        if(items.id == 'clear'){
            display.innerText="";
        }else if(items.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText=string.substring(0, string.length-1); //Eliminar un numero (en caso nos equivoquemos de numero)
        }else if(display.innerText != "" && items.id == 'equal'){ //Simbolo igual{
            display.innerText = eval(display.innerText); //eval= ayuda a interpretar operaciones matematicas que fueron convertidas en String, ejemplo: let cadena = "2+2" => 4

        }else if(display.innerText == '' && items.id == 'equal'){
            display.innerText = 'NULL';
            setTimeout(() => (display.innerText = ''), 2000);

        }else if(items.id == 'numero'){

            if(display.innerHTML == 23){
                console.log('23');
            }

            display.innerText+=items.value;
            
            contador = true;

            


        }else if(items.id == 'simbolo'){
            

            if(contador==true){
                display.innerText+=items.value;
                console.log('Imprimiendo simbolo');
                contador = false;
            }


            

            

        };
    }
}) 


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const icono = document.querySelector('.fa-solid.fa-moon');


let isDark = true;

themeToggleBtn.onclick = () =>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');

    if(icono.classList.contains('fa-moon')){
        console.log('Luna');
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
        
    }else if(icono.classList.contains('fa-sun')){
        console.log('Sol');
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
    }
    



   


    console.log(icono);
    isDark = !isDark;
}




/* const palabra = 'Bombero';

console.log(palabra.length)

const pal = palabra.substring(0,palabra.length-1); 

console.log(pal); */