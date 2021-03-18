//Funciòn para realizar la suma
const sumar = (n1,n2) => {
    document.write(`La suma de ${n1} + ${n2} es: ${parseInt(n1)+parseInt(n2)}`);
}
//Funciòn para realizar la resta
const restar = (n1,n2) => {
    document.write(`La resta de ${n1} - ${n2} es: <b>${parseInt(n1)-parseInt(n2)}</b>`);}
//Funciòn para realizar la divisiòn
const dividir = (n1,n2) => {
    document.write(`La division de ${n1} / ${n2} es: ${parseInt(n1)/parseInt(n2)}`);}
//Funcion para realizar la multiplicacion
const multiplicar = (n1,n2) => {
    document.write(`La multiplicaciòn de ${n1} * ${n2} es: ${parseInt(n1)*parseInt(n2)}`);}

alert("**********Bienvenido a la Calculadora Basica**********");
let eleccion = prompt("1: suma, 2: resta, 3: divisiòn, 4: multiplicaciòn");

if (eleccion == 1){
    let n1 = prompt("Ingrese el primer numero para sumar: ");
    let n2 = prompt("Ingrese el segundo numero para sumar: ");
    sumar(n1,n2);
}
else if (eleccion == 2){
    let n1 = prompt("Ingrese el primer numero para restar: ");
    let n2 = prompt("Ingrese el segundo numero para restar: ");
    restar(n1,n2);
}
else if (eleccion == 3){
    let n1 = prompt("Ingrese el primer numero para dividir: ");
    let n2 = prompt("Ingrese el segundo numero para dividir: ");
    dividir(n1,n2);
}
else if (eleccion == 4){
    let n1 = prompt("Ingrese el primer numero para multiplicar: ");
    let n2 = prompt("Ingrese el segundo numero para multiplicar: ");
    multiplicar(n1,n2);
}
else {
    alert("Dato ingresado incorrecto");
}
