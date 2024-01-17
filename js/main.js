const btnStart = document.querySelector('.btn');
const inputForms = document.querySelectorAll('.input-form');
const results = document.querySelectorAll('.result');


window.onload = start;

function start() {

    btnStart.addEventListener('click', validateForm, false);


}

function validateForm(e) {

    e.preventDefault();

    inputForms.forEach((item, index) => {
        if (!item.checkValidity()) {
            if (item.validity.valueMissing) {
                showError('This field is required', item);
            } else if (item.validity.rangeUnderflow) {
                showError(`Must be a valid ${item.name}`, item)
            } else if (item.validity.rangeOverflow) {
                if (item.name == 'year') {
                    showError('Must be in the past', item)
                } else {
                    showError(`Must be a valid ${item.name}`, item)
                }
            }
        } else if (item.checkValidity()) {

            let day = inputForms[0].value;
            let month = inputForms[1].value;
            let year = inputForms[2].value;

            if (isValidDate(day, month, year)) {

                clearError(item);

                const currentDate = new Date();

                //this produces a result in miliseconds
                const dateResult = currentDate - new Date(year, month - 1, day);
                //convert the miliseconds to normal date
                let ageDate = new Date(dateResult);

                //obtein the results
                let pyear = ageDate.getUTCFullYear() - 1970;
                let pmonth = ageDate.getUTCMonth();
                let pday = ageDate.getUTCDate() - 1;

                results[0].innerHTML = pyear;

                results[1].innerHTML = pmonth;

                results[2].innerHTML = pday;




            } else {
                showError('Must be a valid date', inputForms[0]);
            }
        }
    });

}


function showError(message, elemento) {
    let messageSpan = elemento.nextElementSibling;
    let tagLabel = elemento.previousElementSibling;

    messageSpan.innerHTML = message;

    elemento.style.border = '1px solid red';

    tagLabel.classList.add('error');
}

function clearError(elemento) {
    let messageSpan = elemento.nextElementSibling;
    let tagLabel = elemento.previousElementSibling;

    messageSpan.innerHTML = '';

    elemento.style.border = '1px solid gray';

    tagLabel.classList.remove('error');
}

function isValidDate(day, month, year) {
    month--;

    const date = new Date(year, month, day);

    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true
    } else {
        return false;
    }

}

