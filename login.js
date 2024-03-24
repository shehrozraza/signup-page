// function myData(){

//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value

//     // if (email == "shehroz.raza11@hotmail.com" && password == "12345678"){
//     //     localStorage.setItem("email",email)
//     //     localStorage.setItem("password",password)
//     //     alert("login successful")
//     //     document.getElementById("password").value=""
//     //     document.getElementById("email").value=""
//     // }else{
//     //     localStorage.removeItem("email")
//     //     localStorage.removeItem("password")
//     //     alert("login failed try again")
       
//     // }

// //    fetch('https://jsonplaceholder.typicode.com/albums')
// //     .then(response => response.json())
// //     .then(data =>{})
    
   
      
         
  
  
          
  
          
  
//        let formdata = new FormData();
//         formdata.append('staffEmail',email)
//         formdata.append('staffPassword',password)
  
//       fetch('https://uat.digiflow.io/ClinicAppBackend/staff/Login',{
//         body:formdata,
//         method:'post'
//       })
//       .then((response)=>response.json())
//       .then((data) => {
//   if (data.status=="200") {
    
//     alert("login successfully")
    
//   }else {
//      alert("login failed");
//   }
      
//     })
//       .then((json)=>console.log(json,"json"));
//        
  
  
//         
  
  


// }
function myData(){
    // let email=document.getElementById("email").value
    // let password=document.getElementById("password").value
    
    // let formdata=new FormData();
    // formdata.append('staffEmail',email);
    // formdata.append('staffPassword',password);

    // fetch('https://uat.digiflow.io/ClinicAppBackend/staff/Login',{
    // body:formdata,
    // method:'post'
    // })
    // .then((response)=>response.json)
    // .then((data)=>{
    // if(data.status=='200'){
    //     alert("login successfully")
    //     console.log(data);
    // }
    // else{
    //     alert("login failed")
    //     console.log(data);
    // }
    // })
    // .then((json)=>console.log(json,"json"));

    }
setInterval(() => {
    for(let i=0;i<11;i++){
        let num=2
        let ans=i*num
        console.log(`${num}x${i}=${ans}`);
    }

}, 2000);
