let Button = document.getElementById("btn");
let Bday = document.getElementById("Birthday"); 
let para = document.getElementById("result");

function calculateAge(){
   let currDate = new Date();
   console.log(currDate);
   let Birthdate = new Date(Bday.value);
   console.log(Birthdate);
   let year = currDate.getFullYear() - Birthdate.getFullYear();
   let month = currDate.getMonth() - Birthdate.getMonth();
   console.log(year);
   console.log(month);

   
   if(month < 0 || month === 0 && currDate.getDate() < Birthdate.getDate()){
      year--;
   }

   para.innerText = `You are ${year} years old`
}

btn.addEventListener("click", calculateAge);
