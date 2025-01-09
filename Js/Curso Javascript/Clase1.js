//let Frase = prompt("Escribe algo");
//document.write(Frase)
nombre = prompt("Ingrese su nombre");

saludo = `¡Hola, ${nombre}!`;
pregunta = " ¿Como estas?";

//frase= saludo + pregunta;
frase = saludo.concat(pregunta)  ;
document.write(frase);