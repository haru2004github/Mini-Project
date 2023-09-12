

let form = document.querySelector("form")
let name_message = document.querySelector(".name_alert_message")
let name_error = document.querySelector(".name_alert_message small")

let email_message = document.querySelector(".email_alert_message")
let email_error = document.querySelector(".email_alert_message small")

let password_message = document.querySelector(".password_alert_message")
let password_error = document.querySelector(".password_alert_message small")

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const namePattern = /^(?=.*[a-z])(?=.*[A-Z]).{9,}$/
    const emailPattern = /[a-z]/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{9,}$/

    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    let name_status = false;
    let email_status = false;
    let passworde_status = false;


    
    // name 
    if(name.value.trim() == ""){
        
        name_message.classList.remove("hidden")
        name_error.innerHTML="Name must be filled"
        name.classList.add('border-red')

    }else if(!/[a-z]/.test(name.value.trim())){

        name_message.classList.remove("hidden")
        name_error.innerHTML="Contains at least one lowercase letter (a-z)."
        name.classList.add('border-red')

    }else if(!/[A-Z]/.test(name.value.trim())){

        name_message.classList.remove("hidden")
        name_error.innerHTML="Contains at least one uppercase letter (A-Z)."
        name.classList.add('border-red')

    }else if(name.value.length < 5 ){
        name_message.classList.remove("hidden")
        name_error.innerHTML="Name must be greater than 5."
        name.classList.add('border-red')
    }else{
        name_message.classList.add("hidden")
        name.classList.add('border-green')
        name_status = true;
    }

    // for email
    if(email.value.trim() == ""){

        email_message.classList.remove("hidden")
        email_error.innerHTML="Email must be filled"
        email.classList.add('border-red')

    }else{

        email_message.classList.add("hidden")
        email.classList.add('border-green')
        email_status = true; 

    }

    


    // for password 
    if(password.value.trim() == ""){

        password_message.classList.remove("hidden")
        password_error.innerHTML="Password must be filled"
        password.classList.add('border-red')

    }else if(!/[a-z]/.test(password.value.trim())){

        password_message.classList.remove("hidden")
        password_error.innerHTML="Contains at least one lowercase letter (a-z)."
        password.classList.add('border-red')

    }else if(!/[A-Z]/.test(password.value.trim())){

        password_message.classList.remove("hidden")
        password_error.innerHTML="Contains at least one uppercase letter (A-Z)."
        password.classList.add('border-red')

    }else if(!/[0-9]/.test(password.value.trim())){

        password_message.classList.remove("hidden")
        password_error.innerHTML="Contains at least one number (0-9)."
        password.classList.add('border-red')

    }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password.value.trim())){
        password_message.classList.remove("hidden")
        password_error.innerHTML="Contains at least one special character."
        password.classList.add('border-red')
    }else if(password.value.length < 8 ){
        password_message.classList.remove("hidden")
        password_error.innerHTML="Password must be greater than 8."
        password.classList.add('border-red')
    }else{
        password_message.classList.add("hidden")
        password.classList.add('border-green')
        password_status = true;

    }


    //fianl check
    if(name_status && email_status && password_status ){
        setTimeout(alert("Login Success."), 2000);
        
    }



    

    
})


