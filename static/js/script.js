const room_type = document.getElementById('room_type')
const air_conditioning = document.getElementById('air_conditioning')
const accomodates = document.getElementById('accomodates')
const neighbourhood_cleansed = document.getElementById('neighbourhood_cleansed')

neighbourhood_cleansed.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    // get the values from the inputs
    const room_typeValue = room_type.Value.trim();
    const bedroomsValue = air_conditioning.Value.trim();
    const accomodatesValue = accomodates.Value.trim();

    if(room_typeValue.length >= 6) {
        //show error
        //add error class
        setErrorFor(room_type, 'Please enter valid Room Type');
    } else {
        //add success class
        setSuccessFor(room_type);
    }
}

function setErrorFor(input, message) {
    const neighbourhood_cleansedControl = input.parentElement; //.neighbourhood_cleansed-control
    const small = neighbourhood_cleansedControl.querySelector('small');


    // add error class
    neighbourhood_cleansedControl.className = 'neighbourhood_cleansed-control error';
    //add error message inside small
    small.innerText = message;

}

function setSuccessFor(input) {
    const neighbourhood_cleansedControl = input.parentElement;
    neighbourhood_cleansedControl.className = 'neighbourhood_cleansed-control success';
}
