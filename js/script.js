
   var menu = document.querySelector("#menu");
   var dropMenu = document.querySelector("#dropMenu");
   var closeMenu = document.querySelector("#close");
   
   menu.addEventListener("click", () => {
      dropMenu.style.display = "block";
   });
   
   closeMenu.addEventListener("click", () => {
      dropMenu.style.display = "none";
   });
   
