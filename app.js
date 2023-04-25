// lisent for submit
document.getElementById('card').addEventListener("submit", function(e){

// hide result
document.getElementById('result').style.display = 'none';
// show loader
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResult,2000);
    e.preventDefault();
});

// calculating result
function calculateResult() {

    // UI var
    const amount = document.querySelector('.Loan-inputTag');
    const interest = document.querySelector('.interestInputTag');
    const years = document.querySelector('.repayment-yr');
    const montlyPayment = document.querySelector('.Monthly-payment');
    const totalPayment = document.querySelector('.Total-payment');
    const totalInterest = document.querySelector('.Total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    //compute the monthly payments

    const x = Math.pow(1 + calculatedInterest, calculatePayment);
    const monthly = (principle * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        montlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);

        // show result
        document.getElementById('result').style.display = 'block';

        // hide loader

        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Please check your numbers');
    }
}
//show Error
function showError(error) {

    // hide result
    document.getElementById('result').style.display = 'none';

    // hide loader
    document.getElementById('loading').style.display = 'none';
    
    // create a div
    const errorDiv = document.createElement('div');

    //get element
    const container = document.getElementById('card');
    const heading = document.querySelector('.loan');


    // add a id
    errorDiv.id = 'alert';

    // create a textNode and append to dic

    errorDiv.appendChild(document.createTextNode(error));

    //insert error before heading

    container.insertBefore(errorDiv, heading)

    // clear erro after 3 sec

    setTimeout(clearError, 3000);

}

//create clear error

function clearError(){
    document.querySelector('#alert').remove();

}