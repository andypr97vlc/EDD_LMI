<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
    <h1 style="display: flex; align-items: center;">
        <img src="https://elpythonista.com/wp-content/uploads/2020/08/Ides-2020-imagen-principal-1.png" alt="EDD" width="120" height="120" style="margin-right: 15px;">
        <b>TEMA 1 <small>Entornos de desarrollo</small></b>
    </h1>
</div>

## **<u>Ejercicio 1.</u> Desarrollo colaborativo**
>Joan y Miquel son dos desarrolladores del mismo proyecto de software. A pesar de que cada cual trabaja unas funcionalidades concretas de una aplicación, tienen que trabajar con el mismo código fuente. Qué mecanismos y qué procedimiento crees que sería más conveniente utilizar a su trabajo diaria?<br>
Describe en un fichero en formato markdown los mecanismos que utilizarías, justificando el tipo, así como el procedimiento detallado de las operaciones que tendrían que hacer cada vez que van a trabajar con el proyecto.

**Mecanismos a Utilizar**

1. **Control de versiones con Git**

2. **Repositorio Remoto**:
   Un servicio de repositorio remoto centralizado proporcionará un espacio común donde pueden subir y descargar los cambios del código.

3. **Ramas de desarrollo**:
   Utilizar ramas separadas para las distintas funcionalidades. Esto evitará interferencias mientras trabajan en diferentes partes del proyecto.

**Procedimiento Diario de Trabajo**

1. **Clonar el Repositorio**<br>
   Se deberá clonar el repositorio en las máquinas locales.

2. **Crear una Rama de Trabajo**<br>
   Cada desarrollador debe crear una nueva rama para trabajar en su funcionalidad.

3. **Realizar Cambios y Commits**<br>
   Deben realizar commits para guardar el progreso localmente.

4. **Sincronizar con el Repositorio Remoto**<br>
   Antes de subir los cambios al repositorio remoto, deben asegurarse de tener la última versión de la rama principal.

5. **Subir la Rama al Repositorio Remoto**<br>
   Una vez que hayan realizado cambios, deben subir su rama al repositorio remoto.

6. **Crear un Pull Request**<br>
   Crearán Pull Requests para que el código sea revisado e integrado a la rama principal.

7. **Resolver Conflictos (si es necesario)**<br>
   Si hay conflictos entre la rama de trabajo y la rama principal, deben resolverse antes de fusionar el código.

8. **Fusionar la Rama en la Principal**<br>
   Tras la aprobación del Pull Request, los cambios se integrarán en la rama principal.

9. **Actualizar la Rama de Trabajo**<br>
   Finalmente antes de continuar con una nueva tarea, deberán actualizar la rama principal localmente y crear una nueva para evitar trabajar sobre un código desactualizado.

---

## **<u>Ejercicio 2.</u> Control de versiones y modelo iterativo**
>Un equipo de desarrolladores ha decidido abordar un proyecto siguiendo un modelo de desarrollo iterativo e incremental. En la planificación inicial, se ha decidido que se abordará en cinco fases, y cada una tendrá como resultado una versión del producto con la funcionalidad correspondiente a cada iteración.<br><br>
Para el desarrollo y trabajo en equipo utilizarán SCV Subversion.<br><br>
Qué estructura u organización crees que sería más interesante para el equipo al repositorio?<br><br>
Revisa los ejemplos realizados sobre Subversion, y las carpetas que este SCV sugiere que se hagan para guardar, y redacta tu propuesta de estructura/organización en un documento en formato Markdown.

***Organización General del Repositorio***

1. **Trunk**<br>
   La carpeta trunk tendrá el desarrollo principal del proyecto. Este será el espacio donde se gestionará el código de la versión actual. Cada iteración se integrará aquí una vez que haya sido probada y validada.<br>
   <u>Estructura:</u>
      <pre><code>/trunk
       /src         Código fuente principal
       /docs        Documentación técnica y funcional
       /tests       Pruebas
       /resources   Recursos</code></pre>
2. **Branches**<br>
   La carpeta branches se usará para crear ramas de desarrollo separadas para cada iteración. Esto permitirá que el equipo trabaje en nuevas funcionalidades sin afectar el código estable en trunk.<br>
   <u>Para cada fase del proyecto se creará una rama específica:</u>
      <pre><code>/branches
       /fase-1      Rama para la primera iteración
       /fase-2      Rama para la segunda iteración
       /fase-3      Etc...
       /fase-4
       /fase-5</code></pre>
   <u>Cada rama tendrá la misma estructura que trunk para mantener consistencia:</u>
      <pre><code>/branches/fase-1
       /src         Código fuente
       /docs        Documentación técnica y funcional
       /tests       Pruebas
       /resources   Recursos</code></pre>
3. **Tags**<br>
   La carpeta tags se utilizará para almacenar versiones específicas del producto, como las versiones finales de cada iteración que ya han sido completamente probadas y aceptadas.<br>
      <pre><code>/tags
       /v1.0        Tag para la versión 1.0 (final de la fase 1)
       /v2.0        Tag para la versión 2.0 (final de la fase 2)
       /v3.0        Tag para la versión 3.0 (final de la fase 3) Etc...
       /v4.0
       /v5.0</code></pre>

---

## **<u>Ejercicio 3.</u>**
>A modo de síntesis de los dos tipos de SCV vistos, crea un documento en formato Markdown indicando las diferencias entre ellos.<br>

***Diferencias entre RCS y Subversion***

| Característica        | RCS                                                 | Subversion (SVN)                               |
| --------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Tipo de control       | Basado en archivos locales individuales             | Centralizado en un repositorio                 |
| Alcance               | Solo controla versiones de archivos puntuales       | Controla proyectos completos                   |
| Colaboración          | No soporta múltiples usuarios simultáneos           | Soporta trabajo en equipo                      |
| Sistema de revisiones | Cada archivo tiene su propio historial de versiones | Repositorio central con revisiones globales    |
| Manejo de ramas       | Limitado y manual                                   | Robusto y automatizado                         |
| Red                   | No requiere red, trabaja localmente                 | Requiere conexión a un servidor de repositorio |
| Almacenamiento        | Se guarda una copia de cada versión del archivo     | Guarda diferencias entre versiones             |

>Hecho esto, céntrate en rcs y subversion y comenta brevemente y con tus palabras que hacen las siguientes órdenes:

- <u>Para rcs:</u><br>
    * `co`: Extrae un archivo para trabajar localmente.
    * `ci`: Guarda los cambios de un archivo.
- <u>Para svn:</u><br>
    * `svn co`: Para hacer un *checkout*.
    * `svn ci`: Para hacer un *commit* sobre el repositorio.
    * `svn st`: Para comprobar el estado.
    * `svn add`: Para añadir un recurso al control de versiones.
    * `svn up`: Para actualizar nuestra copia de trabajo local desde el repositorio.

>Si te fijas, ambos sistemas tienen las órdenes co o ci. Hacen exactamente el mismo en un sistema que en otro? Qué diferencias tienen?

***Diferencias entre co y ci en RCS y Subversion***
- `co` en RCS: Extrae un archivo para trabajar localmente, bloqueando su edición hasta que se haga un ci.
- `svn co` en Subversion: Extrae una copia completa del repositorio, permite que múltiples usuarios trabajen en paralelo y no bloquea los archivos.
- `ci` en RCS: Guarda los cambios de un archivo específico, desbloqueándolo.
- `svn ci` en Subversion: Sube todos los cambios realizados a un repositorio, permitiendo que otros usuarios los integren en sus copias locales.