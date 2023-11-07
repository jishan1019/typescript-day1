// Function

function add(num1 : number, num2 : number) {
    return num1 + num2;
}

const result = add(50, 10)

console.log(result);

// Arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2
addArrow(67, 202)

// funcion -> method
const poorUser = {
    name: "Jishan",
    balance: 0,
    addBalance(balance: number): string{
        return `My New Balance is ${this.balance + balance}`
    }
}

// Map in ts

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8] 

const newArr : number[] = arr.map((ele: number): number => ele * ele )
