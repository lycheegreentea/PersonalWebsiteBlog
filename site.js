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
    const text = `Hi, I'm Lauren
Languages: Chinese, toki pona(learning) python, java, swift, html/javascript/css 

`;

    let i = 0;
    area.textContent = "";

    const interval = setInterval(() => {
        area.textContent +=text[i];
        i++;
    
    if (i>=text.length) clearInterval(interval);
    }, 50)
    
}

function babelBook(){
    const descArea = document.getElementById("bookDescription");
    descArea.textContent="I like babel";
}

function bookOfGoose(){
    const descArea = document.getElementById("bookDescription");
    descArea.textContent="I like babel";
}

function secretHistory(){
    const descArea = document.getElementById("bookDescription");
    descArea.textContent="I like babel";
}

function starlessSea(){
    const descArea = document.getElementById("bookDescription");
    descArea.textContent="I like babel";
}

function coffee(){
    const descArea = document.getElementById("bookDescription");
    descArea.textContent="I like babel";
}









window.onload = () => {
    let xPos = 0;
    let currentRotation = 0;

    gsap.set('.img', {
        rotationY: (i) => i * 36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) => `url(images/gallery/g${i}.webp)`,
        backgroundColor: '#451a03'
    });

    gsap.from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo.out'
    });

    $(window).on('mousedown touchstart', (e) => {
        const event = e.type === 'touchstart' ? e.originalEvent.touches[0] : e;
        xPos = event.clientX;
        gsap.set('.ring', { cursor: 'grabbing' });
        $(window).on('mousemove touchmove', drag);
    });

    $(window).on('mouseup touchend', () => {
        $(window).off('mousemove touchmove', drag);
        gsap.set('.ring', { cursor: 'grab' });
    });

    function drag(e) {
        const event = (e.type === 'touchmove') ? e.originalEvent.touches[0] : e;
        const deltaX = event.clientX - xPos;
        
        currentRotation += deltaX * 0.15;

        gsap.to('.ring', {
            rotationY: currentRotation,
            duration: 0.5,
            ease: "power2.out",
            overwrite: 'auto'
        });

        xPos = event.clientX;
    }
};