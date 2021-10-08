
// TRIANGULO


document.getElementById("submitOperation_perimeter").addEventListener("click", operation);

function operation(){
    
    const sideA_perimeter = document.querySelector('#inputsideA_perimeter').value;
    const sideB_perimeter = document.querySelector('#inputsideB_perimeter').value;
    const sideC_perimeter = document.querySelector('#inputsideC_perimeter').value;
    const selector_perimeter = document.querySelector('#selector_perimeter').value;
    
    let result = parseInt(sideA_perimeter) + parseInt(sideB_perimeter) + parseInt(sideC_perimeter);

    const showResults = document.querySelector('#showResults_perimeter');

    switch(selector_perimeter){
        case 'Millimeters':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Centimeters':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Decimeter':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Meters':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Decameters':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Hectometers':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        case 'Kilometers':
            showResults.innerHTML = `The perimeter of your perimeter is ${result} ${selector_perimeter}`;
            break;
        default:
            showResults.innerHTML = `You must choose a measure to complete the form.`;
    }
    // const inputs = document.querySelector('.input_app').value;
    if(sideA_perimeter == ''){
        showResults.innerHTML = 'You have not completely filled in the fields';
    }
    else if(sideB_perimeter == ''){
        showResults.innerHTML = 'You have not completely filled in the fields';
    }
    else if(sideC_perimeter == ''){
        showResults.innerHTML = 'You have not completely filled in the fields';
    }
 
}

