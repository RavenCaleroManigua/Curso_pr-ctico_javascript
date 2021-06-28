console.group("Cuadrado");
/* const ladocuadrado = 5;
console.log("los lados del cuadrado miden: "+ladocuadrado+"cm"); */
function perimetrocuadrado(lado){
    return lado*4;
} 
//console.log("el perimetro del cuadrado es: "+perimetrocuadrado+"cm");
function areacuadrado (lado){
    return lado * lado;
}
//console.log("el área del cuadrado es: "+areacuadrado+"cm al cuadrado");
console.groupEnd();

console.group("Triangulo");
/* const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const ladotriangulo3 = 4;
const alturatriangulo= 5.5; 
console.log("los lados del triangulo miden: "+ladotriangulo1+"cm, "+ladotriangulo2+"cm y "+ladotriangulo3+"cm");*/
function perimetrotriangulo(lado1,lado2,lado3){

    return lado1+lado2+lado3;
}
/* console.log("el perimetro del triangulo es: "+perimetrotriangulo+"cm"); */
function areatriangulo(lado3,altura){

    return (lado3*altura)/2;
}
/* console.log("el área del triangulo es: "+areatriangulo+"cm al cuadrado"); */
console.groupEnd();

console.group("Circulo");
/* const radiocirculo = 4;
const diametro = radiocirculo*2;*/
function diametrodelcirculo(radio){

    return radio*2
}
const pi = Math.PI; 
function perimetrodelcirculo(radio){
    const diametro = diametrodelcirculo(radio);
    return diametro*pi;
}
function areacirculo(radio){

    return (radio*radio)*pi ;
}
/* console.log("el radio del circulo mide: "+radiocirculo+"cm");
console.log("el diametro del circulo mide: "+diametro+"cm");
console.log("pi es: "+pi);
console.log("el perimetro del circulo mide: "+perimetrodelcirculo+"cm");
console.log("el área del circulo es: "+areacirculo+"cm al cuadrado"); */
console.groupEnd();
