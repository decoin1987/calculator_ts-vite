import {CalculatorExpressions} from "./expressions";

export class CalculatorDisplay {
    root: HTMLElement
    display: HTMLElement
    expressions: CalculatorExpressions

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

    addFloat() {
        this.display.textContent = `${this.display.textContent}.`
    }
}