// //    ALERT   !!!
 
// //  function displayData(){
// //     alert("WELCOME")
// // }
// displayData()


// console (data we have entre not removed)

function displayData(){
    let searchData = document.getElementById("search").value
    console.log(searchData);
   
}


// console (data we have entre will removed)
function displayData(){
    let searchData = document.getElementById("search").value
    console.log(searchData);
   document.getElementById("search").value = ""
}

function submitData(){
  let username = document.getElementById("username").value
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value

   console.log(username);
   console.log(email);
   console.log(password);
   
    
}