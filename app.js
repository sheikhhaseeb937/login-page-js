

function onSubmit (){
    console.log('chala')
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    
    console.log(email,pass)
   
    if(!email || !pass){
alert('required fields are missing')
    }
    var isValid = email.indexOf('@gmail.com')
        console.log(isValid)
        
        if(isValid == -1 ){
       alert('Wrong Email')

        }
     
        
       
  


        if(email === "sheikhhaseeb937@gmail.com" && pass === "haseeb123"){
            // alert("successfully")
         window.location.href = './home.html'
        }else{
            alert('invalid email and password')
        }

 

}