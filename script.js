const calc = document.querySelector('.calc');
const result = document.querySelector('.calc-result')

calc.addEventListener("click", function(event) {
    
    if(!event.target.classList.contains('calc-btn')) return;

    const value = event.target.innerText;

    switch(value) {
        case 'AC':
            result.innerText = "";
            break;

        case 'BS':
            result.innerText = result.innerText.substring(0, value.length - 1);
            break;

        case '=':
            result.innerText = eval(result.innerText);
            break;
        

        default:
            result.innerText += value;
    }

});