document.addEventListener('DOMContentLoaded', (event) => {
    loadTheme();
});

function saveTheme(){
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
}

function loadTheme(){
    const themeSelector = document.getElementById('theme-selector');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
}
function applyTheme(theme){
    const themeALL = document.getElementById('ES','content-right','nav1','nav2','nav3','nav4','nav5','nav6','nav7','logo-name');
    document.body.className = theme;
    if (theme === 'dark'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
        document.getElementById('logo-name').style.color='white';
        document.getElementById('ES').style.border='1px solid white';
        document.getElementById('content-right').style.color='white';
        document.getElementById('nav1').style.color='white';
        document.getElementById('nav2').style.color='white';
        document.getElementById('nav3').style.color='white';
        document.getElementById('nav4').style.color='white';
        document.getElementById('nav5').style.color='white';
        document.getElementById('nav6').style.color='white';
        document.getElementById('nav7').style.color='white';
        
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('logo-name').style.color='black';
        document.getElementById('ES').style.border='1px solid black';
        document.getElementById('content-right').style.color='black';
        document.getElementById('nav1').style.color='black';
        document.getElementById('nav2').style.color='black';
        document.getElementById('nav3').style.color='black';
        document.getElementById('nav4').style.color='black';
        document.getElementById('nav5').style.color='black';
        document.getElementById('nav6').style.color='black';
        document.getElementById('nav7').style.color='black';
    }
}