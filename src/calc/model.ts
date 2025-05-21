import {CalculatorDisplay} from "./display";
import type {Operator} from "./btn/operator";

export class CalculatorModel {
    private display: CalculatorDisplay

    private firstOperand: number | null = null
    private secondOperand: number | null = null
    private operator: Operator | null = null
    private operationComplete: boolean = false

    constructor(display: CalculatorDisplay) {
        this.display = display
    }

    public addDigit(digit: number) {
        if (this.operationComplete) {
            this.operationComplete = false
            this.firstOperand = digit
            this.display.setDigit(this.firstOperand)
        } else {
            if (this.operator === null) {
                this.firstOperand = parseInt(`${this.firstOperand ?? ''}${digit}`)
                this.display.setDigit(this.firstOperand)
            } else {
                this.secondOperand = parseInt(`${this.secondOperand ?? ''}${digit}`)
                this.display.setDigit(this.secondOperand)
            }
        }

    }

    public calculation() {
        if (this.firstOperand !== null &&
            this.secondOperand !== null && this.operator !== null) {
            let result = this.operator.calculate(this.firstOperand, this.secondOperand)
            this.operationComplete = true
            this.firstOperand = result
            this.operator = null
            this.secondOperand = null

            this.display.setDigit(this.firstOperand as number)
            this.display.expressions.clear()
        }
    }

    public addOperation(operator: Operator) {
        if (this.firstOperand !== null) {
            this.operator = operator
            this.display.expressions.setExpression(`${operator.getExpression(this.firstOperand)}`)
            this.operationComplete = false
        }
        if (this.firstOperand !== null &&
            this.secondOperand !== null && this.operator !== null) {
            this.calculation()
            this.addOperation(operator)
        }
        this.display.clear()
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