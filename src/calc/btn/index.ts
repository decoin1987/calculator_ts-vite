interface ICalculatorButton {
    root: HTMLButtonElement;

    create(text: string): HTMLButtonElement
    onClick(listener: () => void): void
    render(container: HTMLElement): void
}

export abstract class CalculatorButton implements ICalculatorButton {
    root: HTMLButtonElement;

    protected constructor(text: string) {
        this.root = this.create(text)
        this.root.addEventListener('click', () => this.onClick())
    }

    create(text: string) {
        const root = document.createElement("button")
        root.classList.add("calculator_button")
        root.textContent = text
        return root
    }

    abstract onClick(): void

    public render(container: HTMLElement) {
        container.append(this.root)
    }
}