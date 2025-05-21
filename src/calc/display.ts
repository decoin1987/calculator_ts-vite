import {CalculatorExpressions} from "./expressions";
import type {ICalculatorSubscriber} from "./subscriber";
import type {IOperator} from "./btn/operator";

export class CalculatorDisplay {
    root: HTMLElement
    display: HTMLElement
    expressions: CalculatorExpressions

    public subscriber = new DisplayCalculatorSubscriber(this)

    constructor() {
        this.expressions = new CalculatorExpressions()
        this.display = document.createElement("p")
        this.root = this.create()
    }

    render(container: HTMLElement) {
        container.append(this.root)
    }

    create() {
        const root = document.createElement("div")
        root.classList.add("calculator_display_wrapper")

        this.expressions.render(root)

        this.display = document.createElement("p")
        this.display.classList.add("calculator_display")
        this.display.textContent = "0"
        root.append(this.display)

        return root
    }

    setDigit(textDigit: number) {
        this.display.textContent = `${textDigit}`
    }

    clear() {
        this.display.textContent = '0'
    }
}

class DisplayCalculatorSubscriber implements ICalculatorSubscriber {
    private display: CalculatorDisplay
    constructor(display: CalculatorDisplay) {
        this.display = display
    }

    addDigit(event: { digit: number }): void {
        this.display.setDigit(event.digit)
    }

    addOperator(event: { firstOperand: number; operator: IOperator }): void {
        this.display.expressions.setExpression(`${event.operator.getExpression(event.firstOperand)}`)
        this.display.clear()
    }

    calculated(event: { firstOperand: number; secondOperand: number; operator: IOperator; result: number }): void {
        this.display.setDigit(event.result)
        this.display.expressions.clear()
    }

    cleared(): void {
        this.display.clear()
        this.display.expressions.clear()
    }
}