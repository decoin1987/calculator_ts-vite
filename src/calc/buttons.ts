import {NumberButton} from "./btn/number-buttons";
import {AddButton, DivideButton, MultiplyButton, SubtractButton} from "./btn/operation-buttons";
import {ClearButton, EqualsButton} from "./btn/functional-button";
import {CalculatorModel} from "./model";
import {CalculatorButton} from "./btn";
import {CalculatorDisplay} from "./display";

export class Buttons {
    model: CalculatorModel
    buttons: CalculatorButton[]
    root: HTMLElement

    constructor(display: CalculatorDisplay) {
        this.model = new CalculatorModel(display)
        this.buttons = [
            new NumberButton(this.model, '7'),
            new NumberButton(this.model, '8'),
            new NumberButton(this.model, '9'),
            new SubtractButton(this.model),
            new NumberButton(this.model, '4'),
            new NumberButton(this.model, '5'),
            new NumberButton(this.model, '6'),
            new AddButton(this.model),
            new NumberButton(this.model, '1'),
            new NumberButton(this.model, '2'),
            new NumberButton(this.model, '3'),
            new DivideButton(this.model),
            new ClearButton(this.model, ),
            new NumberButton(this.model, '0'),
            new EqualsButton(this.model, ),
            new MultiplyButton(this.model),
        ]
        this.root = this.create()
    }

    private create() {
        const root = document.createElement("div")
        root.classList.add("calculator_buttons_wrapper")
        this.buttons.forEach((button: CalculatorButton) => button.render(root))
        return root
    }

    render(container: HTMLElement) {
        container.append(this.root)
    }

}