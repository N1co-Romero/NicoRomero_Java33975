//CONSULTOR DE PRECIO
/*
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
*/
//EVENTOS
(function () {
    //CONSTRUCTOR REMERAS
    function Remeras(precio, talle) {
        this.precio = precio
        this.talle = talle
    }

    let remera1 = new Remeras(500, "XL")
    let remera2 = new Remeras(650, "L")
    let remera3 = new Remeras(800, "S")

    let agregar1 = function () {
        alert("haz añadido el producto a tu carrito")
    }

    let boton1 = document.getElementById('boton1');
    boton1.addEventListener("click", agregar1)

    let info1 = function () {
        alert("Remera gucci $" + remera1.precio + " talle: " + remera1.talle)
    }

    let boton4 = document.getElementById('boton4');
    boton4.addEventListener("click", info1)

    let agregar2 = function () {
        alert("haz añadido el producto a tu carrito")
    }

    let boton2 = document.getElementById('boton2');
    boton2.addEventListener("click", agregar2)

    let info2 = function () {
        alert("Remera gucci tiger $" + remera2.precio + " talle: " + remera2.talle)
    }

    let boton5 = document.getElementById('boton5');
    boton5.addEventListener("click", info2)

    let info3 = function () {
        alert("Remera gucci wolf $" + remera3.precio + " talle: " + remera3.talle)
    }

    let boton6 = document.getElementById('boton6');
    boton6.addEventListener("click", info3)

    let agregar3 = function () {
        alert("haz añadido el producto a tu carrito")
    }
    let boton3 = document.getElementById('boton3');
    boton3.addEventListener("click", agregar3)
})()




