export interface Operator {
    calculate(firstOperand: number, secondOperand: number): number
    getExpression(firstOperand: number): string
}

export class AddOperator implements Operator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand + secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} + `;
    }
}

export class SubtractOperator implements Operator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand - secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} - `;
    }
}

export class MultiplyOperator implements Operator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand * secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} × `;
    }
}

export class DivideOperator implements Operator{
    calculate(firstOperand: number, secondOperand: number): number {
        return firstOperand / secondOperand;
    }
    getExpression(firstOperand: number): string {
        return `${firstOperand} / `;
    }
}