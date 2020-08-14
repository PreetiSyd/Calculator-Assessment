// Select the calculator with the help of class 'calculator'
const calculator = document.querySelector('.calculator');

// Check which key has been pressed on the calculator
const keys = calculator.querySelector('.calculator__keys');

// Select the number that was clicked to find the current number
const display = document.querySelector('.calculator__display')

// Check the value of the Key-click event to see if it's a number or function
keys.addEventListener('click', e => {
    // const key = e.target
    // const action = key.dataset.action
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    
 // If there is 0 on calculator display -> replace it with the clicked number key number
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
 // if display shows a non-zero number -> append the pressed-key number value
            } else {
                display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKey = 'number'
            }
 // if a decimal-key is pressed -> it'll be appended to the displayed number
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator') {
            display.textContent = '0.'
            }
    
            calculator.dataset.previousKeyType = 'decimal'
        }
        
 // If an Operator-key is pressed -> it should be highlighted as 'Pressed'
        if ( action === 'add' || action === 'subtract' ||
            action === 'multiply' || action === 'divide') 
        {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && previousKeyType !== 'operator') {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue

            // Updated calculated value as firstValue
                calculator.dataset.firstValue = calcValue
            } else {
            // if there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }
            key.classList.add('is-depressed')
                // Add custom attribute
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            
        }
        if ( action ==='clear') {
            display.textContent = 0
            calculator.dataset.previousKey = 'clear'
        }
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            calculator.dataset.previousKeyType = 'calculate'
    
            if (firstValue) {
                display.textContent = calculate(firstValue, operator, secondValue)
            }
        }
        const calculate = (firstValue, operator, secondValue) => {
            let result = ''
            
        
            if (operator === 'add') {
                result = parseFloat(firstValue) + parseFloat(secondValue)
                console.log(firstValue, secondValue, result)
            } else if (operator === 'subtract') {
                result = parseFloat(firstValue) - parseFloat(secondValue)
            } else if (operator === 'multiply') {
                result = parseFloat(n1firstValue) * parseFloat(secondValue)
            } else if (operator === 'divide') {
                result = parseFloat(firstValue) / parseFloat(secondValue)
            }
            return result
            }
    }
    })

    

