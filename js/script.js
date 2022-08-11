//CONSULTOR DE PRECIO
const listasneakers = [
    {
        nombre: "jordan1",
        precio: "2000$",
        talle: "40",
    },
    {
        nombre: "jordan1h",
        precio: "2200$",
        talle: "39",
    },
    {
        nombre: "Nikeairmax ",
        precio: "1800$",
        talle: "43",
    },
    {
        nombre: "Airforce1",
        precio: "1000$",
        talle: "44",
    },
    {
        nombre: "Addidasyezzy",
        precio: "2500$",
        talle: "42",
    },
    {
        nombre: "jordan4",
        precio: "4000$",
        talle: "40",
    },
]


let Sneakers = ""
while (Sneakers != "SALIR") {
    Sneakers = prompt("ingrese CONSULTAR|COMPRAR|SALIR")
    switch (Sneakers) {
        case "CONSULTAR":
            consultarprecios()
            break;
        case "COMPRAR":
            comprasneakers()
            break;
        case "SALIR":
            break;
        default:
            alert("ingrese una accion valida:")
            Sneakers
    }
}
function consultarprecios() {
    alert("Los Sneakers disponibles son: ")
    listasneakers.forEach((sneaker) => {
        alert(sneaker.nombre + " " + sneaker.precio + " talle disponible:" + sneaker.talle)
    })

}
function comprasneakers() {
    let compradesnkeakers = prompt("ingrese el snkeaker que desee:")
    const snkeakerelegido = listasneakers.find((sneaker) => {
        return sneaker.nombre == compradesnkeakers
    })
    if (snkeakerelegido) {
        console.log("sneakers en el carrito")
        console.log(snkeakerelegido)
    } else {
        {
            console.log("no encontramos resultados")
        }
    }
}