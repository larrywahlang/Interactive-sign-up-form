const password=document.getElementById('password')
const validation=document.getElementById('validation')
const eye=document.getElementById('eye')
const success=document.getElementById('success')
let count=0

const uppercase=document.getElementById('uppercase')
const number=document.getElementById('number')
const lowercase=document.getElementById('lowercase')
const special=document.getElementById('special')
const minimum=document.getElementById('minimum')

const numberPattern=/\d/
const uppercasePattern=/[A-Z]/
const lowercasePattern=/[a-z]/
const specialPattern=/[#?!@$%^&*-]/
const minimumPattern=/.{8,}/
const Pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

password.addEventListener('input', function(){

   if(Pattern.test(password.value)){
      success.innerHTML=`
       <p> ✔️ Your password is secure. You can now sign up.</p>
   `
   }
   else{
   success.innerHTML=``
   }

   
})


eye.addEventListener('click', function(){
    if(password.type=='password'){
        password.type='text'
        // eye.src="images/look.png"
        
    }
    else{
        password.type='password'
        // eye.src='images/eye-crossed.png'
    }
})

password.addEventListener('input', function(){

    if(numberPattern.test(password.value)){
        number.classList.remove('validate')
        number.classList.add('validated')
        
    }else{
        number.classList.remove('validated')
        number.classList.add('validate')
    }
})

password.addEventListener('input', function(){

    if(uppercasePattern.test(password.value)){
        uppercase.classList.remove('validate')
        uppercase.classList.add('validated')
    }else{
        uppercase.classList.remove('validated')
        uppercase.classList.add('validate')
    }
})

password.addEventListener('input', function(){

     if(lowercasePattern.test(password.value)){
        lowercase.classList.remove('validate')
        lowercase.classList.add('validated')
     }else{
        lowercase.classList.remove('validated')
        lowercase.classList.add('validate')
     }
})

password.addEventListener('input', function(){

    if(specialPattern.test(password.value)){
        special.classList.remove('validate')
        special.classList.add('validated')
    }else{
        special.classList.remove('validated')
        special.classList.add('validate')
    }
})
password.addEventListener('input', function(){

     if(minimumPattern.test(password.value)){
        minimum.classList.remove('validate')
        minimum.classList.add('validated')
     }else{
        minimum.classList.remove('validated')
        minimum.classList.add('validate')
     }
 })



 





