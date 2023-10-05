// Con interfaces podemos extender
interface Producto {
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface Zapatilla extends Producto {
    size: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatilla)[]
}

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            name: 'Zapatilla 1',
            price: 100,
            quantity: 1,
            size: 40
        },
        {
            id: 2,
            name: 'Producto 2',
            price: 50,
            quantity: 2
        }
    ]
}