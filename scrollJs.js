var btn = document.querySelector(".btn");
var check = false;
 document.querySelector("ul");

btn.addEventListener("click", function(){
  if(check == false){
    document.querySelector(".box").style.width = "500px";
    document.querySelector(".box").style.padding = "10px";
    document.querySelector(".box").style.padding = "10px";
    document.querySelector("ul").classList.add("show");
    btn.innerText = "X";
    check = true;
    
  }else {
    
    document.querySelector(".box").style.width = "0px";
    document.querySelector(".box").style.padding = "0px";
     document.querySelector("ul").classList.remove("show");
    btn.innerText = "O";
    check = false;
  }

});