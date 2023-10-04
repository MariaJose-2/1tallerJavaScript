nacimiento=parseInt(prompt("ingresa tu año de nacimiento"));
const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento;
//console.log(typeof(nacimiento));

var nombres=prompt("ingresa tu nombre");
//var Edad=parseInt(prompt("ingresa la edad"));

if(edad<=8){
    document.write("Bienvenido niño "+nombres+" usted tiene "+edad+" años de edad y eres un niño")

}else if(edad>=9 && edad<=17){
    document.write("Bienvenido joven "+nombres+" usted tiene "+edad+" años de edad y eres joven")}

else{
    document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad y eres mayor de edad")
}