import './css/calc.css'

import {CalculatorDisplay} from "./display";
import {Buttons} from "./buttons";

export default class Calculator {
    root: HTMLElement
    display: CalculatorDisplay
    buttons: Buttons

    constructor() {
        this.root = document.createElement('div')
        this.root.classList.add('calculator_wrapper')
        this.root.innerHTML = `<h1>Калькулятор</h1>`

        this.display = new CalculatorDisplay()
        this.buttons = new Buttons(this.display)
    }

    render(container: HTMLElement) {
        this.display.render(this.root)
        this.buttons.render(this.root)
        container.append(this.root)
    }

}



