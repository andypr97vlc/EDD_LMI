// Crear closure creaLibro y pasarle autor título y num_pag
// hacerlo con 2 libros

function creaLibro(título, autor, num_pag) {
    let autor_libro = autor
    let título_libro = título
    let num_pag_libro = num_pag

    function mostrarLibro() {
        console.log("Título: " + título_libro)
        console.log("Autor: " + autor_libro)
        console.log("Número de páginas: " + num_pag_libro)
        console.log()
    }

    function cambiarAutor(nuevo_autor){
        autor_libro = nuevo_autor
    }

    function cambiarNombre(nuevo_título){
        título_libro = nuevo_título
    }
    return { mostrarLibro , cambiarAutor, cambiarNombre }
}

let libro1 = creaLibro("Joanot Martorell", "Tirant lo Blanc", 2000)
let libro2 = creaLibro("Llibre de Meravelles", "Vicent Andrés Estellés", 100)

libro1.mostrarLibro()
libro2.mostrarLibro()

libro1.cambiarNombre("El Quijote")
libro1.cambiarAutor("Miguel de Cervantes")
libro1.mostrarLibro()


