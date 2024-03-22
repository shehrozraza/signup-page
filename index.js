function myFunc(){
    event.preventDefault()
    let email=document.getElementById("email").value
    console.log(email);
    if(email=='testerstaff@gmail.com'){
        console.log(localStorage.setItem("email",email))
        document.location='http://127.0.0.1:5500/login.html'
    }else{
        alert("login failed")
    }
}