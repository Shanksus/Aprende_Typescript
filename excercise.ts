

interface ProcessIdentity<T, U> {
    (value: T, message: U): T
}

// const identity1: Identity<number, string> = {
//     value: 1,
//     message: 'Hola'
// }

// const identity2: Identity<string, string> = {
//     value: 'valor',
//     message: 'Mensaje'
// }

const processIdentity: ProcessIdentity<number, string> =  (value, message) => {
    console.log(message)
    return value
}

// processIdentity(1, 's')

interface Identity<T, U> {
    value: T
    message: U
    process(): T;
}

class ClassIdentity<X, Y> implements Identity<X, Y>{
    value: X
    message: Y

    constructor(value: X, message: Y) {
        this.value = value
        this.message = message
    }

    process(): X {
        return this.value
    }
}

const process1 = new ClassIdentity('Hola', 'Juan')
process1.process()