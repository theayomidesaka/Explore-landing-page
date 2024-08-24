let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumberInput = document.getElementById("phone-number")
let fullNameAlert = document.getElementById("fullname-alert")
let emailAlert = document.getElementById("email-alert")
let phoneNumAlert = document.getElementById("phone-number-alert")
let button = document.getElementById("submit-button")

fullNameInput.addEventListener("keyup", () => {
    validateFullNameInput()
})


//Name Input Field Validation
function validateFullNameInput(){
    let userFullName = fullNameInput.value
    if(userFullName.length == 0){
        fullNameAlert.innerText = "Enter full name"
        fullNameInput.style.border = "1px solid red"
        
    }else if(!userFullName.match(/^[a-zA-Z\s]+$/)){
        fullNameAlert.innerText = "You cannot enter numbers in this field"
    }else{
        fullNameAlert.innerText = ""
        fullNameInput.style.border = "2px solid green"
    }
}


//Email Input Field Validation
emailInput.addEventListener("keyup", function(){
    validateEmailInput()
})

const validateEmailInput = () => {
    let userEmail = emailInput.value
    if(userEmail.length == 0){
        emailAlert.innerText = "Enter Your Email Address"
        emailInput.style.border = "1px solid red"

    }else if(!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert.innerText = "Enter a valid email address"
        
    }else{
        emailAlert.innerText = ""
    }
}

//Phone Number Input Validation

phoneNumberInput.addEventListener("keyup", () =>{
    validatePhoneNumber()
})

let validatePhoneNumber = () =>{
    let userPhoneNumber = phoneNumberInput.value
    if(userPhoneNumber.length !== 11){
        phoneNumAlert.innerText = "Phone number must be 11 digits"
        phoneNumberInput.style.border = "1px solid #F7C75D"
    }else{
        phoneNumAlert.innerHTML = ""
        phoneNumberInput.style.border = "2px solid green"
    }
}