function mostrar(){
    //se le solicita al usuaria que ingrese una opcion (1-5)
    opc=parseInt(prompt("hola joven ingresa la opcion 1: para sumar, opcion 2: para resta, opcion 3: para multiplicar, opcion 4: para dividir y opcion 5: cual es el numero mayor"));
    switch(opc){//se utiliza para realizar diferentes operaciones segun la entrada del usuario
        //al ingresar cualquier opcion la funcion le va a solicitar que ingrese 2 numeros 
        case 1: //opcion 1 suma
            var num1=parseInt(prompt("ingrese un digito"));//prompt es un metodo del objeto window  que se usa para mostrar un cuadro de dialogo con el mensaje ingresado para el usuario
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1+num2 //realiza la suma entre los dos numeros
            document.write("el resultado es: " +resultado)//imprime el resultado utilizando document.write
            break; //terminar o romper la secuencia

        case 2: //opcion 2 resta
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1-num2 //realiza la resta entre los dos numeros anteriormente ingresados por el usuario
            document.write("el resultado es: " +resultado)//imprime el resultado
            break; //terminar o romper la secuencia

        case 3: //opcion 3 multiplicacion
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1*num2 //realiza una multiplicacion entre los dos numeros ingresados
            document.write("el resultado es: " +resultado) //imprime
            break; //terminar o romper la secuencia

        case 4: //opcion 4 division
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1/num2 //realiza una division entre los dos numeros ingresados
            document.write("el resultado es: " +resultado) //imprime
            break; //terminar o romper la secuencia

        case 5: //opcion 5 calcula el numero mayor
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            if (num1>num2){
                document.write(" el  mayor es: "+num1)
                }//imprime si se cumple con esta condicion
            // con la condicion if valida si el num1 es mayor qu el num2 si no se cumple pasa a la funcion else la cual daria como resultado que el num2 es el mayor
            else
                document.write (`el numero ${num2} es mayor`)//imprime si se cumple con la condicion y si con el if no cumple
       };
    };