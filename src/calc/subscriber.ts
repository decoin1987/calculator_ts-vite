import type {IOperator} from "./btn/operator";

export interface ICalculatorSubscriber {
    addOperator(event: {firstOperand: number, operator: IOperator}): void
    addDigit(event: {digit: number}): void
    calculated(event: {firstOperand: number, secondOperand: number, operator: IOperator, result: number}): void
    cleared(): void
}