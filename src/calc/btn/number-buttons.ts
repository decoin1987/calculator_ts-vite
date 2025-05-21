import {CalculatorButton} from "./index";
import {CalculatorModel} from "../model";

export class NumberButton extends CalculatorButton {
    constructor(private model: CalculatorModel, private text: string) {
        super(text);
    }

    onClick(): void {
        this.model.addDigit(parseInt(this.text))
    }
}