import Alert from 'react-s-alert';


export function isRequired(val) {
    let value = val.trim();
    if (value == '' || value == null) {
        return false;
    } else {
        return true;
    }
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

export function isValidOrder(firstName,secondName,officeLocation,email,contactNumber,workLocation,paymentMethod){
if(isRequired(firstName) && isRequired(secondName) && isRequired(officeLocation) && isRequired(email) && isRequired(contactNumber) && isRequired(workLocation) && isRequired(paymentMethod)){
if(validateEmail(email))
    return true
else{
    Alert.error("<h4>Please enter valid email</h4>");  
    return false
}
}else{
    Alert.error("<h4>field marked with * are mandatory</h4>");    
    return false
}

}


