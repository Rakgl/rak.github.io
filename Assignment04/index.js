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
    const themeALL= document.getElementById('ES');
    document.body.className = theme;
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
        document.getElementById('ES').style.border='1px solid white';
        document.getElementById('ES').style.color='white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color='black';
        document.getElementById('ES').style.border='1px solid black';
        document.getElementById('ES').style.color='black';
    }
}