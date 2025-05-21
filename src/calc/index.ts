import './css/calc.css'

import {CalculatorDisplay} from "./display";
import {Buttons} from "./buttons";
import {CalculatorModel} from "./model";

export default class Calculator {
    root: HTMLElement
    display: CalculatorDisplay
    buttons: Buttons
    models: CalculatorModel

    constructor() {
        this.root = document.createElement('div')
        this.root.classList.add('calculator_wrapper')
        this.root.innerHTML = `<h1>Калькулятор</h1>`
        this.display = new CalculatorDisplay()
        this.models = new CalculatorModel(this.display)
        this.buttons = new Buttons(this.models)

        this.models.addSubscriber(this.display.subscriber)
    }

    render(container: HTMLElement) {
        this.display.render(this.root)
        this.buttons.render(this.root)
        container.append(this.root)
    }

}



