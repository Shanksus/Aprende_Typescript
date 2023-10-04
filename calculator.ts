type Operation = 'multiply' | 'add' | 'minum' | 'divide';
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
        case 'multiply':
            return a * b;
        case 'add':
            return a + b;
        case 'minum':
            return a - b;
        case 'divide':
            if (b === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return a / b;
        default:
            throw new Error(`Operation "${op}" not supported.`);
    }
}

/**
 * Output through process argv
 */
const args = process.argv.slice(2); // Elimina los dos primeros argumentos (node y nombre del script)
if (args.length !== 3) {
    console.error('Usage: node calculator.js <number> <number> <operation>');
    process.exit(1);
}

const [aStr, bStr, op] = args;
const a = parseFloat(aStr);
const b = parseFloat(bStr);

if (isNaN(a) || isNaN(b)) {
    console.error('Invalid numbers provided.');
    process.exit(1);
}

try {
    const result = calculator(a, b, op as Operation);
    console.log(`The result of the operation "${op}" is: ${result}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

/**
 * Output through console.log
 */
// console.log(calculator(4,2, 'multiply'))
// console.log(calculator(4,2, 'add'))
// console.log(calculator(4,2, 'minum'))
// console.log(calculator(4,2, 'divide'))