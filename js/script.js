
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintaCards()
    }
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        pintaCards(data)
    } catch (error) {
        console.log(error)
    }
}

items.addEventListener('click', e => {
    addCarrito(e)
})

const pintaCards = data => {
    data.forEach(prodcuto => {
        templateCard.querySelector('h5').textContent = prodcuto.title
        templateCard.querySelector('p').textContent = prodcuto.precio
        templateCard.querySelector('img').setAttribute("src", prodcuto.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = prodcuto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
}

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classlist.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)

    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    //console.log(objeto)
    const prodcuto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent
    }
    Swal.fire({
        title: 'LISTO',
        text: 'Se a añadido el producto' + prodcuto.title + ' al carrito',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
}

