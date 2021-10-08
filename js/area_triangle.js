
// TRIANGULO


document.getElementById("submitOperation_area").addEventListener("click", operation);

function operation(){
    
    const base_area = document.querySelector('#inputBase_area').value;
    const height_area = document.querySelector('#inputHeight_area').value;
    const selector_area = document.querySelector('#selector_area').value;
    
    let result = parseFloat(base_area) * parseFloat(height_area) / 2;

    const showResults = document.querySelector('#showResults_area');

    switch(selector_area){
        case 'Millimeters':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Centimeters':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Decimeter':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Meters':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Decameters':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Hectometers':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        case 'Kilometers':
            showResults.innerHTML = `The area of your triangle is ${result} ${selector_area}`;
            break;
        default:
            showResults.innerHTML = `You must choose a measure to complete the form.`;
    }
    // const inputs = document.querySelector('.input_app').value;
    if(height_area == ''){
        showResults.innerHTML = 'You have not completely filled in the fields';
    }
    else if(base_area == ''){
        showResults.innerHTML = 'You have not completely filled in the fields';
    }
 
}

