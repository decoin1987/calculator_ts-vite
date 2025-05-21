import {CalculatorButton} from "./index";
import {CalculatorModel} from "../model";
import {AddOperator, DivideOperator, MultiplyOperator, SubtractOperator} from "./operator";

export class AddButton extends CalculatorButton {
    operator
    constructor(private model: CalculatorModel) {
        super('+');
        this.operator = new AddOperator()
    }
    onClick(): void {
        this.model.addOperation(this.operator)
    }
}

export class SubtractButton extends CalculatorButton {
    operator
    constructor(private model: CalculatorModel) {
        super('-');
        this.operator = new SubtractOperator()
    }
    onClick(): void {
        this.model.addOperation(this.operator)
    }
}

export class MultiplyButton extends CalculatorButton {
    operator
    constructor(private model: CalculatorModel) {
        super('×');
        this.operator = new MultiplyOperator()
    }
    onClick(): void {
        this.model.addOperation(this.operator)
    }
}

export class DivideButton extends CalculatorButton {
    operator
    constructor(private model: CalculatorModel) {
        super('/');
        this.operator = new DivideOperator()
    }
    onClick(): void {
        this.model.addOperation(this.operator)
    }
}