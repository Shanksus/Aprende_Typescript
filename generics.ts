function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray([1, 2, 3, 4])
let stringArray = getArray(['Cats', 'Dogs'])

// numberArray.push('hola')

// Multiple types can be used
function identity<T, U>(value: T, message: U): T { 
    console.log(message);
    return value
}

const value = identity<string, string>('hola', 'mensaje')

type ValidTypes = string | number

function sum<T extends ValidTypes, U>(value: T, message: U): T {
    let result: ValidTypes = ''
    if (typeof value === 'number') {
        result = value + value // Suma
    }
    else if (typeof value === 'string') {
        result = value + value // Concatenacion
    }

    console.log(message);
    return value
}