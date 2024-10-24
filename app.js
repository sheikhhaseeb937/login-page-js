

function onSubmit() {
  console.log("chala");
  var email = document.getElementById("email").value;

  var pass = document.getElementById("password").value;

  console.log(email, pass);




  if (!email || !pass) {
    alert("required fields are missing");

    return;
  }

//   if(pass.length<8){
//     alert('Password should be atleast 8 character')
//     return
// }
if(pass.length <=8){
    alert('Password should be atleast 8 character')
    return
}


  var isValid = email.indexOf("@gmail.com");
  // console.log(isValid)

  if (isValid == -1) {
    alert("Wrong Email");
    return;
  }

  if (email === "sheikhhaseeb937@gmail.com" && pass === "haseeb123") {
    // alert("successfully")
    window.location.href = "./home.html";
  } else {
    alert("invalid email and password");
  }
}

function passShow() {
  console.log("chla");
  var inp = document.getElementById("password");
  var imgeye = document.getElementById("img");
  console.log(inp);
  if (inp.getAttribute("type") === "password") {
    inp.setAttribute("type", "text");
    imgeye.setAttribute(
      "src",
      "images/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    );
  } else {
    inp.setAttribute("type", "password");
    imgeye.setAttribute(
      "src",
      "images/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    );
  }
}
