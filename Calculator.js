'use strict'
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const previousButtons = document.querySelectorAll('[data-previous]')
const currentButtons = document.querySelectorAll('[data-current]')
const Calculator = new Calculator(previousButtonsElement, currentButtonsElement)
numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        Calculator.addNumber(button.innerText)
        Calculator.updateDisplay()
    })
});

class Calculator {
    constructor(previousButtons, currentButtons){
        this.previousButtons = previousButtons
        this.currentButtons = currentButtons
    }
    clear(){
        this.currentButtons = ""
        this.previousButtons = ""
        this.operation = undefined
    }
    delete(){

    }
    addNumber(number){
        this.currentButtons = number
    }
    operation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentButtonsElement.innerText = this.currentButtons
    }
}
