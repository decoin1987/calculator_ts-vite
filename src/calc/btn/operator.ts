export interface IOperator {
    calculate(firstOperand: number, secondOperand: number): number
    getExpression(firstOperand: number): string
}

export class AddOperator implements IOperator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand + secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} + `;
    }
}

export class SubtractOperator implements IOperator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand - secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} - `;
    }
}

export class MultiplyOperator implements IOperator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand * secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} × `;
    }
}

export class DivideOperator implements IOperator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand / secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} / `;
    }
}