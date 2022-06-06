const count = document.querySelector(".count");
const buttons =document.querySelector(".buttons");

 buttons.addEventListener("click", (e) =>{

     if(e.target.classList.contains("add")){
         count.innerHTML++;
         letColor();
     }

     if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        letColor();
    }
    if(e.target.classList.contains("substract")){
        count.innerHTML--;
        letColor();
    }

 });

 function letColor() {
     if(count.innerHTML > 0){
         count.style.color ="rgb(73, 223, 73)";
     }
     else if(count.innerHTML < 0){
        count.style.color = "rgb(247, 45, 45)";
    }
    else{
        count.style.color = "#fff";
    }
        
 };