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
    const themeALL = document.getElementById('box1','box2','box3','ES','content-right','nav1','nav2','nav3','logo-name');
    document.body.className = theme;
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
        document.getElementById('box1').style.border='1px solid white';
        document.getElementById('box2').style.border='1px solid white';
        document.getElementById('box3').style.border='1px solid white';
        document.getElementById('ES').style.border='1px solid white';
        document.getElementById('content-right').style.color='white';
        document.getElementById('nav1').style.color='white';
        document.getElementById('nav2').style.color='white';
        document.getElementById('nav3').style.color='white';
        document.getElementById('logo-name').style.color='white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('box1').style.border='1px solid black';
        document.getElementById('box2').style.border='1px solid black';
        document.getElementById('box3').style.border='1px solid black';
        document.getElementById('ES').style.border='1px solid black';
        document.getElementById('content-right').style.color='black';
        document.getElementById('nav1').style.color='black';
        document.getElementById('nav2').style.color='black';
        document.getElementById('nav3').style.color='black';
        document.getElementById('logo-name').style.color='black';
    }
}