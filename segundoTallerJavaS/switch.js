function mostrar() {
    // se le solicita al usuario que elija una opcion(1-4)
    opc = parseInt(prompt("hola joven! ingresa la opcion 1: para area rectangulo, opcion 2: para area cuadrado, opcion 3: para area triangulo y opcion 4: para salir"));

    // la funcion utiliza un switch para realizar diferentes operaciones segun la entrada u opcion que ingrese el usuario
    switch (opc) {
        case 1: // la sentencia case selecciona la opcion de sentencia a evaluar
            // el usuario ingresa dos numeros los cuales correspondan uno a la base y el otro a la altura para asi calcular el area del rectangulo 
            b = parseInt(prompt("ingrese la base"));
            a = parseInt(prompt("ingrese la altura"));
            var resultado = b * a; //multiplica la base por la altura
            //si la base o altura es 0 muestra un mensaje de verificacion de datos
            if (b != 0 && a != 0) {
                document.write(" el resultado del area del rectangulo es: " + resultado)
            } else {
                document.write("verifica los datos de base por altura")
            }
            break; //termina la secuencia

        case 2:
            // se le solicita al usuario que ingrese dos números (longitud del lado) y calcule el área de un cuadrado
            l1 = parseInt(prompt("ingrese el lado uno:"));
            l = parseInt(prompt("ingrese el lado dos:"));
            var resultado = l1 * l; //multiplica los lados
            //realiza la multiplicacion y nos imprime el resultado mediante el document.write
            if (l1 != 0 && l != 0) {
                document.write(" el resultado del area del cuadrado es: " + resultado)
            //si no cumple o ingresa datos iguales a 0 muestra mensaje de verificacion de datos
            } else {
                document.write("verfica los datos de altura por altura")
            }
            break; //termina la secuencia

        case 3:
            //Se le solicita al usuario que ingrese dos números (base y altura) para calcular el área de un triángulo dividiendo en 2
            b = parseInt(prompt("ingrese la base"));
            a = parseInt(prompt("ingrese la altura"));
            var resultado = (b * a) / 2; //multiplica la base por la altura y el resultado lo divide en 2
            if (b != 0 && a != 0) {
                document.write(" el resultado del area del triangulo es: " + resultado)
            } else {
                document.write("verfica los datos de base por altura")
            }
            break; //termina la secuencia

        case 4:
            //si selecciona la opcion 4 sale del programa y se termina el codigo
            document.write("saliste")
            break; //terminar o romper la secuencia
    }
};