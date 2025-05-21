import {CalculatorDisplay} from "./display";
import type {IOperator} from "./btn/operator";
import type {ICalculatorSubscriber} from "./subscriber";

export class CalculatorModel {
    private display: CalculatorDisplay

    private firstOperand: number | null = null
    private secondOperand: number | null = null
    private operator: IOperator | null = null
    private operationComplete: boolean = false
    private subscribers: ICalculatorSubscriber[] = []

    constructor(display: CalculatorDisplay) {
        this.display = display
    }

    public addSubscriber(subscriber: ICalculatorSubscriber) {
        this.subscribers.push(subscriber)
    }

    public addDigit(num: number) {
        if (this.operationComplete) {
            this.operationComplete = false
            this.firstOperand = num
            this.subscribers.forEach(s => s.addDigit({digit: num}))
        } else {
            if (this.operator === null) {
                const digit = parseInt(`${this.firstOperand ?? ''}${num}`)
                this.firstOperand = digit
                this.subscribers.forEach(s => s.addDigit({digit: digit}))
            } else {
                const digit = parseInt(`${this.secondOperand ?? ''}${num}`)
                this.secondOperand = digit
                this.subscribers.forEach(s => s.addDigit({digit: digit}))
            }
        }

    }

    public calculation() {
        if (this.firstOperand !== null &&
            this.secondOperand !== null && this.operator !== null) {
            const first = this.firstOperand
            const second = this.secondOperand
            const operator = this.operator
            let result = this.operator.calculate(this.firstOperand, this.secondOperand)

            this.subscribers.forEach(s => s.calculated({
                firstOperand: first,
                secondOperand: second,
                operator: operator,
                result: result
            }))

            this.firstOperand = result
            this.operationComplete = true
            this.operator = null
            this.secondOperand = null
        }
    }

    public addOperation(operator: IOperator) {
        if (this.firstOperand !== null) {
            this.operator = operator
            const first = this.firstOperand
            this.subscribers.forEach(s => s.addOperator({
                firstOperand: first,
                operator,
            }))
            this.operationComplete = false
        }
        if (this.firstOperand !== null &&
            this.secondOperand !== null && this.operator !== null) {
            this.calculation()
            this.addOperation(operator)
        }
    }

    public clear() {
        this.firstOperand = null
        this.secondOperand = null
        this.operator = null
        this.operationComplete = false
        this.display.expressions.clear()
        this.display.clear()
    }
}