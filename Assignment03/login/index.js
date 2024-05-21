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
        window.location.href = '/Assignment03/Product/index.html';
    }
    else{
        alert("Invalid username or password. Please try again.");
    }
    
}