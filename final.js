
function saveFile() {
var name =document.getElementById("name").value;
var employeeid =document.getElementById("employeeid").value;
var designation =document.getElementById("designation").value;
var date = document.getElementById("date").value;
var hours =document.getElementById("hours").value;


 var salary = 0;
 if(designation == "Manager"){
     salary =(hours*90);
 }else if(designation == "Team Lead"){
      salary= (hours*75);
 }else if(designation == "Developer"){
     salary=(hours*60);
 }else{
     salary=(hours*60);
 }
 var outputText=designation +" "+  name  + "  salary is $" + salary;
 localStorage.setItem("output",outputText);
}
