alert("hoola, Bienevenid@")

var numero = prompt("ingrese un número por favor")

while (isNaN(numero)){
    numero=prompt("No ingresó un número, intente nuevamente")
}

numeroIngresado= document.getElementById("numeroIngresado")
numeroIngresado.innerHTML=   "Valor sin IVA es: $" + numero;

ivaCalculado= document.getElementById("ivaCalculado")
    
function calcular(){
        totalConIva= (numero * 1.21)
        ivaCalculado.innerHTML= "Valor total con IVA es: $" + totalConIva;
    }