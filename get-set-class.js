
const details={ info:Name,info:salary,info:hours,info:employeeid}
    
          //getting property
          Object.defineProperty(details,"getdetails",{
             get:function(){
                 return this.info;
             } 
          });
        //   setting property
        Object.defineProperty(details,"changedetails",{
            set:function(value){
                 this.info = value;
            } 
         });
         details.changedetails="Jey";
         details.changedetails="100";
         details.changedetails="3";
         details.changedetails="1234";
         


         
salarycal(){
         var salary = 0;
 if(this.getdesignation == "Manager"){
     salary =(this.gethours*90);
 }else if(this.getdesignation == "Team Lead"){
      salary= (this.gethours*75);
 }else if(this.getdesignation == "Developer"){
     salary=(this.gethours*60);
 }else{
     salary=(this.gethours*60);
 }
 this.username="Jey";
 this.salary="100";
 this.hours="3";
 this.employeeid="1234";
 var outputText=designation +" "+  Name  + "  salary is $" + salary;
 localStorage.setItem("output",outputText);
 return outputText;
}

