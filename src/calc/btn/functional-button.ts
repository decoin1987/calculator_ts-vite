import {CalculatorButton} from "./index";
import {CalculatorModel} from "../model";

export class ClearButton extends CalculatorButton {
    constructor(private model: CalculatorModel) {
        super('C');
    }

    onClick(): void {
        this.model.clear()
    }
}

export class EqualsButton extends CalculatorButton {
    constructor(private model: CalculatorModel) {
        super('=');
    }

    onClick(): void {
        this.model.calculation()
    }
}