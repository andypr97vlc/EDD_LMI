# Tema 3

## Sistemas de control de versiones

La orden `diff` nos muestra la diferencia entre dos archivos

## Sistemas de control de versiones locales

Para rcs:

- `co`: Extrae un archivo para trabajar localmente.
- `ci`: Guarda los cambios de un archivo.

## Sistemas de control de versiones centralizados

Para svn:

- `svn co`: Para hacer un *checkout*.
- `svn ci`: Para hacer un *commit* sobre el repositorio.
- `svn st`: Para comprobar el estado.
- `svn add`: Para añadir un recurso al control de versiones.
- `svn up`: Para actualizar nuestra copia de trabajo local desde el repositorio.

## Sistemas de control de versiones distribuidos GIT

- `git config`: Para configurar cualquier parámetro de git (usuario o e-mail)
- `git init`: Para inicializar un repositorio.
- `git status`: Para ver el estado del repositorio.
- `git add`: Para hacer el seguimiento del archivo.
- `git commit`: Para añadir el fichero al repositorio.
  - `-m` "mensaje": -m sirve para agregar un mensaje al commit.
- `git log`: Para ver el registro de los commit.
  - `--oneline`: para verlo de forma ams simplificada.
- `git rm`: Para eliminar del repositorio directamente.
- `git restore`: Para descartar los canvios y dejar el archivo original.

Mediante la cración de un archivo `.gitignore` podemos añadir archivos/carpetas que no queremos que se añadan al repositorio.

## Trabajando con ramas

- `git brach [rama]`: Creación de rama.
- `git checkout [rama]`: Para entrar en una rama concreta.
  - master: Para volver a la rama principal.
- `git merge [rama]`: Podemos combinar ambas ramas.
- `git reset --hard [identificador]`: Para restaurar antes de hacer la bifurcación.
- `git brach -r [rama]`: Eliminación de rama.

## Repositorios remotos con GIT. GitHub

1. Creación del repositorio de tipo bare en el servidor. (`git init --bare`)
2. Clonación del repositorio en cada equipo de trabajo. (`git clone [url del repositorio]`)
3. Trabajo en la copia local del repositorio y el directorio de trabajo. Aquí se añaden o eliminan recursos (`add/rm`), se confirman en el repositorio local (`commit`), etcétera.
4. Sincronización entre el repositorio local y el del servidor. Cuando se envían datos al servidor se realiza una operación de PUSH (`git push`), y cuando deseamos obtener datos del servidor se usa FETCH (`git fetch`) y PULL (`git pull`).

## Trabajando en remoto con GIT y GitHub

- `git fetch [url del repositorio]`: Permite obtener los cambios realizados del proyecto desde que lo clonamos o desde que obtuvimos los cambios por última vez.
- `git pull [url del repositorio]`: Hace lo mismo que fetch, pero además combina estos con nuestro directorio de trabajo.
