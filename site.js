function changeMode(){
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark': 'light';
    console.log("DONE");
    const btn = document.getElementById("themeToggle");
    btn.innerHTML = isDark? '☀︎':'☾';
}

if(localStorage.theme === 'dark'){
    document.documentElement.classList.add('dark');
}