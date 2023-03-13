var numero1 = 5; var numero2 = 8;
if(numero1<=numero2) { console.log("numero1 no es mayor que numero2"); } 
if(numero2>0) { console.log("numero2 es positivo"); } 
if(numero1<0) { console.log("numero1 es negativo y distinto de cero"); } 
if(numero1+1<numero2) { console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"); }
function ParoImpar(num){
    if(num%2==0)
    console.log("El numero es par")
    else
    console.log("El Numero es impar")
}
function Pyramid() {
    var a = ""
    for(var i=1; i<10; i++){
    a=a+"#"
    console.log(a);
}
}
function RevPyramid(){
    var b = "##########"
    for(var i=1; i<10; i++){
    let c = b.substring(1) 
    b=c
    console.log(b);
}
}
Pyramid();
RevPyramid();
