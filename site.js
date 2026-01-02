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

function showOutput(){
    const area = document.getElementById("output");
    const text = `Hi I'm Lauren
i like cs`;

    let i = 0;
    area.textContent = "";

    const interval = setInterval(() => {
        area.textContent +=text[i];
        i++;
    
    if (i>=text.length) clearInterval(interval);
    }, 50)
    
}