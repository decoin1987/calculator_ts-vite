import './style.css'
import Calculator from './calc'

const calc = new Calculator()
const element: HTMLElement | null = document.getElementById('app')
if (element) {
    calc.render(element)
}
