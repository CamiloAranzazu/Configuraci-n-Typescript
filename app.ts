
//1) Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


//2) Cree una interfaz que sirva para validar el siguiente objeto
interface Bataman{
   nombre:string;
   artesMarciales: string[];

}

let batman:Bataman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

//3) Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
let funcionflecha = (a:number, b:number) => (a + b) * 2; 


//4) Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma; // diferencia 
     mensaje = `${nombre } tiene el poder de: ${ poder}  y un arma:${ arma}`; //de forma literal
  }else{
    //template litaral
     mensaje = `${nombre} tiene un ${poder}`;
  }
};

//5) Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.


class Rectangulo{
  base:number;
  altura:number;

  calcularArea():number{
    return this.base * this.altura;
  }


}
