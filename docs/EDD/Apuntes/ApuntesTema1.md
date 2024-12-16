# Tema 1

## Programas informáticos

### Programa informático

> Combinación de instrucciones de datos que permiten a un ordenador realizar funciones computacionales o de control.

### Software

> Programa o conjunto de programas utilizados para hacer funcionar un ordenador.

### Algoritmo

> Secuencia de operaciones para ralizar una tarea específica.

## Lenguajes de programación

### Lenguaje de programación

> Un lenguaje artificial diseñado para expresar programas informáticos.

### Clasificación de los lenguajes de programación

#### Clasificación segun el nivel de abstracción

- Lenguajes de nivel bajo: Lenguaje más próximos al ordenador.
    - Lenguaje ensamblador
- Lenguajes de nivel alto: Lenguajes más próximos al usuario.
    - Java o Python
- Lenguajes de nivel intermedio: Lenguajes con capacidades de alto nivel, pero que mantienen algunas capacidades del lenguaje de bajo nivel.
    - C

#### Clasificación según su proposito

- Lenguajes de proposito general: Diseñados para realizar cualquier tipo de tarea.
    - C, C++, C#, Python o Java
- Lenguajes de proposito específico: Pensados para una tarea más específica.
    - PHP: Para desarrollo web o R: orientado a la estadísitica.

#### Clasificación segun la forma de ejecutarse

- Lenguajes compilados: Pasan por un proceso de traducción.
    - C, C++
- Lenguajes interpretados: Requieren un interprete para la traducción a código máquina.
    - Python

#### Clasificación según el estilo o paradigma de la programación

- Programación imperativa: Se indica como realizar una tarea.
    - Programación estructurada
    - Programación Procedimental/modular
    - Programación orientada a objetos
- Programación declarativa: Se indica que hacer, sin preocuparse de como.
    - Programación funcional
    - Programación lógica

#### Clasificación segun el lugar de ejecución

- Lenguajes de servidor (server-side o backend): Usados en aplicaciones de servidor, como puede ser PHP.
- Lenguajes de cliente (client-side o frontend): Usados desde el cliente (el navegador), como puede ser JavaScript.

## Ejecución de programas: De código fuente a ejecutable

### Traductores, compiladores y intérpretes

- Compiladores: Traducen un programa en lenguaje de alto nivel a código máquina.
- Intérpretes: Realizan la traducción y ejecución línea a línea . por lo cual no genera un nuevo fichero.

### Código fuente, código objeto y código ejecutable

- Código fuente: Instrucciones expresadas de una forma adecuada para un ensamblador, compilador u otro traductor.
- Lenguaje fuente: Idioma por el cual se representa la entrada de un proceso de tracucción asistida para la máquina.
- Programa fuente: Programa de ordenador que ha de ser compilado.
- Código objeto: Instrucciones y definiciones de datos producidas por un ensamblador o compilador.

Proceso para objeter ejecutable:

![proceso](https://joamuran.net/curs24_25/edd/u1/img/edicio_traduccio_enlla%C3%A7at.png)

1. Fase de edición: Genera el código fuente del programa en un lenguaje de alto nivel usando un editor de código.
2. Fase de traducción o compilación: Un compilador genera el código objeto a partir del código fuente.
3. Fase de enlace: Se combinan los diferentes ficheros en código objeto, enlazando las bibliotecas necesarias y generando el ejecutable.

### Tecnologias de virtualización:: JAVA y .NET

![bytecode](https://joamuran.net/curs24_25/edd/u1/img/edicio_traduccio_execucio.png)

El resultado de esta compilación es el código intermedio o bytecode, el código intermedio es el mismo para cualquier plataforma, siendo la propia máquina virtual la que se encarga de interpretarlo.

### Sobre código fuente y software libre

En sistemas informáticos se habla sobre software libre y propietario.
> El **software** libre es aquel que se base en 4 libertades:
>
> 1. Ejecución
> 2. Adaptación
> 3. Redistribución
> 4. Mejora

## Desarrollo de aplicaciones

### Fases de desarrollo de una aplicación

Existen 5 fases: Análisis, diseño, codificación, implantación y mantenimiento.

#### Fase de análisis

Se determinan los requisitos que tendrá la aplicación, a través de un  análisis del problema.

#### Fase de diseño

A partir de los requerimientos de la fase de análisis, tendremos en cuenta los recursos del sistema y crearemos la solución al problema.

#### Fase de codificación o implementación

Tranformamos los algoritmos diseñados en la fase anterior en programas expresados en determinados leguajes de programación.

#### Fase de implantación

Implica la puesta a punto en producción del producto software.

#### Fase de mantenimiento

Donde se corrigen errores no detectados previamente, se realizan mejoras de funcionalidades o se añaden nuevas.

### Modelos de desarrollo de software

#### Ciclo de vida en cascada

![cascada](https://joamuran.net/curs24_25/edd/u1/img/cascada.png)

#### Modelos de desarrollo evolutivo

##### Construcción de prototipos

![construcción de prototipos](https://joamuran.net/curs24_25/edd/u1/img/cascada_prototipat.png)

##### Modelo iterativo e incremental

![Iterativo e incremental](https://joamuran.net/curs24_25/edd/u1/img/iteracions.png)

##### Modelo en espiral

![modelo espiral](https://joamuran.net/curs24_25/edd/u1/img/espiral.png)

## Metodologías ágiles de desarrollo

### Scrum

1. **Cómo funciona Scrum?** Funciona dividiendo el proyecto en pequeñas fases, cada una con un objetivo muy concreto.

2. **Organización del equipo de trabajo:**
      - Scrum Master: Es el que se asegura de que el framework se aplica correctamente.
      - Product Owner: Es el representante del cliente, define las necesidades del producto.
      3- Equipo de desarrollo: El encargado de entregar las distintas partes del producto a cada sprint.

3. **Reuniones:**
      - Sprint planning: Se realiza antes de empezar el sprint, en ella se plantean las tareas y objetivos.
      - Daily Scrum: Realizado al inicio de cada día, se sincronizan las tareas del equipo comentando que se hizo el día anterior.
      - Sprint Review: Al finalizar cada sprint se hace una revisión de todo el proceso.
      - Sprint retrospective: Realizada también al finalizar cada sprint, tiene como objetivo mejorar el flujo de trabajo del equipo.
