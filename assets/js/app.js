// Selecting DOM
const input = document.querySelector('#input[type="password"]')
const checkbox = document.querySelector('#checkbox')
const warningNum = document.querySelector('.number')
const warningSym = document.querySelector('.symbol')
const warningCapLett = document.querySelector('.capLett')
const warningSmallLett = document.querySelector('.smallLett')
const warningPassLength = document.querySelector('.passLength')

// Event Listeners
checkbox.addEventListener('click',() =>{
    input.getAttribute('type') === 'password' ? input.setAttribute('type','text') : input.setAttribute('type','password')
})

const numRegex = /([0-9])/
const symbRegex = /[-#!$%^@&*()_+|~=`{}\[\]:";'<>?,\.\/]/
const capLettRegex = /[A-Z]/
const smallLettRegex = /[a-z]/

input.addEventListener('input',checkValue)

function checkValue(){

    const numMatch = input.value.match(numRegex) ? warningNum.innerText = '' : warningNum.innerText = 'Password must contain Numbers.(0-9)' 

    const symbMatch = input.value.match(symbRegex) ? warningSym.innerText = '' : warningSym.innerText='Password must contain Symbols.($%^@&*())' 

    const capLettMatch = input.value.match(capLettRegex) ? warningCapLett.innerText = '' : warningCapLett.innerText='Password must contain at least one Capital letter.(ABC)' 

    const smallLettMatch = input.value.match(smallLettRegex) ? warningSmallLett.innerText = '' : warningSmallLett.innerText='Password must contain at least one Small letter.(abc)' 

    const passLength = input.value.length >= 8 ? warningPassLength.innerText = '' : warningPassLength.innerText='Password must at least 8 letters.' 

}

