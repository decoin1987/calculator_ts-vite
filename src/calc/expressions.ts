export class CalculatorExpressions {
    root: HTMLElement

    constructor() {
        this.root = this.create()
    }

    render(container: HTMLElement) {
        container.append(this.root)
    }

    create() {
        const root = document.createElement("p")
        root.classList.add("calculator_expressions")
        return root
    }

    setExpression(expressionText: string) {
        this.root.textContent = expressionText
    }

    clear() {
        this.root.textContent = ''
    }

}