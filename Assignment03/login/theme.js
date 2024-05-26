async function getProducts() {
    var apiUrl = "https://dummyjson.com/products";
    var prodObj = await fetch(apiUrl);
    var products = await prodObj.json();
    var productsList = products["products"];

    var table = "<table width='100%' border='1' style='border-collapse: collapse;'>";
     table += "<tr> <th>Product</th><th>Title</th><th>price</th> <th>Brand</th><th>Category</th></tr>";
    for(var product in productsList) {
        var productsList = products["products"];
        var proObj = productsList[product];
        table += "<tr>";
        table += "<td> <img width='100px' src='" + proObj.thumbnail + "'></td>";
        table += "<td> " + proObj.title + "</td>";
        table += "<td> " + proObj.price + "</td>";
        table += "<td> " + proObj.brand + "</td>";
        table += "<td> " + proObj.category + "</td>";
        table += "</tr>";
        
    }
    table += "</table>";
    
    document.getElementById("product").innerHTML = table;
}

getProducts();

//Dark mode
// const toggle= document.getElementById("toggleDark");
// const body =document.querySelector('body');

// toggle.addEventListener('click',function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background="black";
//         body.style.color="white";
//         body.style.transition="2s";
//     }
//     else{
//         body.style.background="white";
//         body.style.color="black";
//         body.style.transition="2s";
//     }
// });
document.addEventListener('DOMContentLoaded', (event) => {
    loadTheme();
});

function saveTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
}

function loadTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
}

function applyTheme(theme) {
    document.body.className = theme;
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
        
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color='black';
    }
}