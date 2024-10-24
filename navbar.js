//    ALERT   !!!
 
//  function displayData(){
//     alert("WELCOME")
// }
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