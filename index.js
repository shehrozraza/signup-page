function Data() {
    event.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let contactNo = document.getElementById('contactNo').value
    let subject = document.getElementById("subject").value
    console.log(name,email,contactNo,subject);
}