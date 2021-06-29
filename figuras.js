console.group("Cuadrado");
/* const ladocuadrado = 5;
console.log("los lados del cuadrado miden: "+ladocuadrado+"cm"); */
function perimetrocuadrado(lado){
    return lado * 4;
} 
//console.log("el perimetro del cuadrado es: "+perimetrocuadrado+"cm");
function areacuadrado (lado){
    return lado*lado;
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

    return (lado1+lado2+lado3);
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

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


function calcularperimetrocuadrado(){
    const input= document.getElementById("cuadrado");
    const value = input.value;
    const perimetro = perimetrocuadrado(value);
    const perimetro2 = "El perimetro es: ";
    alert(perimetro2+perimetro);
}

function calcularareacuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const area = areacuadrado(value);
    const area2 = "El area es: " ;
    alert(area2+area);
}
function calcularperimetrotriangulo(){
    const input= document.getElementById("lado1");
    const input1= document.getElementById("lado2");
    const input2= document.getElementById("base");
    const value1 = input.value;
    const value12 = Number(value1)
    const value2 = input1.value;
    const value21 = Number(value2);
    const value3 = input2.value;
    const value31 = Number(value3);
    const perimetrotria = perimetrotriangulo(value12,value21,value31);
    const perimetrotria2 = "El perimetro es: ";
    alert(perimetrotria2+perimetrotria); 
    /* console.log(perimetrotria2+perimetrotria); */
}

function calcularareatriangulo(){
    const input2= document.getElementById("base");
    const input3= document.getElementById("altura");
    const value1 = input2.value;
    const value2 = input3.value;
    const areatria=areatriangulo(value1,value2);
    const areatria2 = "El area es: " ;
    alert(areatria2+areatria);
}
function calcularperimetrocirculo(){
    const input= document.getElementById("radio");
    const value = input.value;
    const perimetrocirc = perimetrodelcirculo(value);
    alert(perimetrocirc);
}

function calcularareacirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    const areacirc = areacirculo(value);
    alert(areacirc);
}

function calcularperimetrotrianguloiso(){
    const input= document.getElementById("lado4");
    const input1= document.getElementById("lado5");
    const input2= document.getElementById("base2");
    const value1 = input.value;
    const value12 = Number(value1)
    const value2 = input1.value;
    const value21 = Number(value2);
    const value3 = input2.value;
    const value31 = Number(value3);
    if (value12 === value21){
        const perimetrotria = perimetrotriangulo(value12,value21,value31);
        const perimetrotria2 = "El perimetro es: ";
        alert(perimetrotria2+perimetrotria);        
    } else{         
        const alerta="no es un triangulo isóceles"
        alert(alerta)
    }
}
function calcularareatrianguloiso(){
    const input= document.getElementById("lado4");
    const input1= document.getElementById("lado5");
    const input2= document.getElementById("base2");    
    const value1 = input.value;
    const value12 = Number(value1)
    const value2 = input1.value;
    const value21 = Number(value2);
    const value3 = input2.value;
    const value31 = Number(value3);
    if (value12 === value21){
        const altura=alturaTrianguloIsosceles(value12,value21,value31);
        const areatria=areatriangulo(value31,altura);
        const areatria2 = "El area es: " ;
        alert(areatria2+areatria);      
    } else{         
        const alerta="no es un triangulo isóceles"
        alert(alerta)
    }   
}
//
