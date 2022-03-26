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
            result.innerText = result.innerText.substring(0, result.innerText.length - 1);
            break;

        case '=':
            try {
                result.innerText = eval(result.innerText);
                break;
            }
            catch(err){
                result.innerText = "Error"
                break;
            }
        

        default:
            result.innerText += value;
    }
});