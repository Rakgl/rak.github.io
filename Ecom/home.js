//------------------------side bar
function openNav(){
    document.getElementById("mySidepanel").style.width = "550px";
    document.getElementById("mySidepanel").style.boxShadow="10px 10px 10px 10px rgb(0,0,0.6)";
    document.body.style.overflow = "hidden";
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.body.style.overflow = "auto";
}
//---------------------btn 
function goto(){
    window.location.href="collection.html";
}

//--------------------collapsible
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function(){
    var content = this.nextElementSibling;
    var activeColl = document.querySelector(".collapsible.active");

    if (activeColl && activeColl !== this){
    activeColl.classList.remove("active");
    activeColl.nextElementSibling.style.display = "none";
    }
    
    this.classList.toggle("active");
    content.style.display = (content.style.display === "block") ? "none" : "block";

    });
}

//------------------login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    goToPage();
});

function goToPage(){

    var username = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;

    var correctUsername = "rak";
    var correctPassword = "123";
    if (username === correctUsername && pwd === correctPassword) {
        window.location.href = "home.html";
    }
    else{
        alert("Invalid username or password. Please try again.");
    }
}
//-------------------animation
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

