//CONSULTOR DE PRECIO
class Productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    precio2() {
        alert("el precio del " + this.nombre + " es de: " + this.precio)
    }
}

//lista de productos

const producto1 = new Productos("producto1", 2000, true)
const producto2 = new Productos("producto2", 3000, true)
const producto3 = new Productos("producto3", 4000, false)
const producto4 = new Productos("producto4", 670, true)
const producto5 = new Productos("producto5", 3500, true)
const producto6 = new Productos("producto6", 4760, false)
const producto7 = new Productos("producto7", 2070, true)
const producto8 = new Productos("producto8", 3000, true)
const producto9 = new Productos("producto9", 4450, false)
const producto10 = new Productos("producto10", 200, true)

let consulta = parseInt(prompt("ingrese el numero de un producto:"))

switch (consulta) {
    case 1:
        console.log(producto1)
        producto1.precio2();
        break;
    case 2:
        console.log(producto2)
        producto2.precio2();
        break;
    case 3:
        console.log(producto3)
        producto3.precio2();
        break;
    case 4:
        console.log(producto4)
        producto4.precio2();
        break;
    case 5:
        console.log(producto5)
        producto5.precio2();
        break;
    case 6:
        console.log(producto6)
        producto6.precio2();
        break;
    case 7:
        console.log(producto7)
        producto7.precio2();
        break;
    case 8:
        console.log(producto8)
        producto8.precio2();
        break;
    case 9:
        console.log(producto9)
        producto9.precio2();
        break;
    case 10:
        console.log(producto10)
        producto10.precio2();
        break;
    default:
        alert("Producto encontrado")
        break;
}