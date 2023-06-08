import {createUserWhitEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
import{auth} from './app/firebase.js'
const signupForm = document.querySelector('#signup-form').

signupForm.addEventListener('submit',async(e) => {
    e.preventDefault()
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    console.log(email, password)

    try {
        const userCredentials =await createUserWhitEmailAndPassword(auth,email, password)
    console.log(userCredentials)
    const signupModal = document.querySelector('#signupModal')
    const modal =bootstrap.modal.getInstance(signupModal)
        modal.hide()
    } 
    catch (error) {
        console.log(error)
    }

    
})