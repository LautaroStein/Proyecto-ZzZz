const array = [1, 2, 3, 4, 5, 6, 7]

const funcion = (array) => {
    const aux = []
    let cont1 = 0
    let cont2 = 5
    let auxcont
    if (array.length % 5 === 0) {
        auxcont = (Math.floor(array.length / 5))
    } else {
        auxcont = (Math.floor(array.length / 5) + 1)
    }
    array.forEach((element, i) => {

        if (i < auxcont) {

            let retornado = array.slice(cont1, cont2)
            aux.push(retornado)
            cont1 = cont1 + 5
            cont2 = cont2 + 5
        }

    });

    return aux
}

const respuesta = funcion(array)

console.log(respuesta);