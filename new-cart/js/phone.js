function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber ;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1 ;
    }else{
            newPhoneNumber = previousPhoneNumber - 1 ;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}


function updatephoneTotalPrice(newPhoneNumber){
    const PhoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = PhoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatephoneTotalPrice(newPhoneNumber);

    // calculate total
    calculateSubTotal();


});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    
    updatephoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})