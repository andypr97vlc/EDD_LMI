<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
    <h1 style="display: flex; align-items: center;">
        <img src="https://www.ticarte.com/sites/su/styles/maxxx/public/users/7/teaser/code-markup.jpg?itok=7aKREgQJ" alt="EDD" width="120" height="120" style="margin-right: 15px;">
        <b>TEMA 3 <small>Lenguaje de marcas</small></b>
    </h1>
</div>


## Elementos del lenguaje

### **<u>Declaración de variables y operadores</u>**
>Declara tres variables con tus colores preferidos y muéstralas por consola. A continuación, utiliza operadores para combinarlas en una nueva variable y muestra el resultado.

```js
color1 = "azul";
color2 = "verde";
color3 = "negro";

console.log(color1);
console.log(color2);
console.log(color3);

allcolor = color1 + color2 + color3;

console.log(allcolor);
```

### **<u>Uso de typeof</u>**
>Crea variables de diferentes tipos: un número, una cadena de texto y un valor lógico. Utiliza typeof para mostrar el tipo de cada variable en consola.

```js
num = 2;
text = "Hola";
logic = true;

console.log(typeof num);
console.log(typeof text);
console.log(typeof logic);
```

### **<u>Conversión de tipo automática</u>**
>Declara dos variables, una como número y otra como cadena de texto. Asigna una expresión que involucro las dos variables a una tercera variable y comprueba el resultado y el tipo. Explica por qué se obtiene este resultado.

```js
num = 2;
text = "Hola";

resul = num + text;

console.log(resul);
console.log(typeof resul);
```

Se obtiene este resultado ya que JavaScript es un lenguaje de tipificado débil, por lo que el tipo "string" tiene prioridad sobre "number"

### **<u>Vectores y acceso a elementos</u>**
>Declara un vector con los días de la semana y muestra en consola el segundo y el quinto elemento. Modifica el último elemento del vector para indicar “Día desconocido”.

```js
semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

console.log(semana[1] + " " + semana[4]);

semana[6] = "Día desconocido"

console.log(semana)
```

### **<u>JSON básico</u>**
>Define un objeto JSON con información básica sobre un libro (título, autor y año). Muestra el título del libro utilizando el objeto JSON y después añade una nueva propiedad editorial.

```js
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1997,
};

console.log(libro.titulo);

libro.editorial = "Juan de la cuesta";

console.log(libro)
```

## Programación estructurada

### **<u>Condicionales simples con if/else</u>**
>Escribe una función verificaHora(hora) que tome como parámetro un número entre 0 y 23. Si la hora está entre 6 y 12, muestra "Buenos días"; si es entre 13 y 20, "Buenas tardes"; y en cualquier otro caso, "Buenas noches".

```js
function verificaHora(hora) {
  if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
  } else if (hora >= 13 && hora <= 20) {
    console.log("Bueneas tardes");
  } else {
    console.log("Buenas noches");
  }
}

verificaHora(14)
```

### **<u>Condicional switch</u>**
>Crea una función determinaDia(numDia) que muestro el nombre del día en valenciano (de “Lunes” a “Domingo”) a partir de un número de 1 a 7 utilizando un switch.

```js
function determinaDia(numDia) {
  switch (numDia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sabado");
      break;
    case 7:
      console.log("Domingo");
      break;
  }
}

determinaDia(5)
```

### **<u>Bucle for</u>**
>Escribe un bucle for que muestro los números del 1 al 10. Después, escribe otro for que muestro solo los números pares hasta el 20.

```js
for (i = 1; i <= 10; i++) {
  console.log(i);
}

for (i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

### **<u>Bucle for...of y vectores</u>**
>Declara un vector de tres ciudades valencianas y recórrelo con un for...of para mostrar cada ciudad en consola.

```js
ciudades = ["Valencia", "Alicante", "Castellón"];
for (ciudad of ciudades) {
  console.log(ciudad);
}
```

### **<u>while y do...while </u>**
>Escribe un bucle while que empiezo en 10 y vaya restante 1 hasta llegar a 0, mostrando cada valor en consola. A continuación, hiciera el mismo con un do...while.

```js
numWhile = 10;
while (numWhile >= 0) {
  console.log(numWhile);
  numWhile--;
}

numDoWhile = 10;
do {
  console.log(numDoWhile);
  numDoWhile--;
} while (numDoWhile >= 0);
```

## Funciones

### **<u>Función que devuelve un valor</u>**
>Crea una función doble(num) que devuelvo el doble del número proporcionado. Grítala con diferentes valores y muestra los resultados en consola.

```js
function doble(num) {
  return num * 2;
}
console.log(doble(16));
console.log(doble(52));
```

### **<u>Función con parámetros por defecto</u>**
>Escribe una función saludo(nombre = "amigo") que muestro "Hola, [nombre]!". Si no se pasa ningún nombre, tiene que mostrar "Hola, amigo!".

```js
function saludo(nom = "amigo") {
  console.log("Hola, " + nom + "!");
}
saludo();
saludo("Andy");
```