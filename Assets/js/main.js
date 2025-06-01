
document.addEventListener('DOMContentLoaded', () => {
    
    const menuIcon = document.querySelector('.menuIc');
    const closeIcon = document.querySelector('.closeIc');
    const navContainer = document.querySelector('.navContainer');

    /*Open Nav Bar */
    menuIcon.addEventListener('click', () => {
        navContainer.classList.add('active');
    });

    /*Close Nav Bar */
    closeIcon.addEventListener('click', () => {
        navContainer.classList.remove('active');
    });

    var typed = new Typed('#element', {
        strings: ['Free', 'New', 'Fashion'], // Add more words here
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        cursorChar: '|',
        loop: true,
    });

    var typed = new Typed('#second', {
        strings: ['Free', 'New', 'Fashion'], // Add more words here
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        cursorChar: '|',
        loop: true,
    });

    var typed = new Typed('#third', {
        strings: ['Style', 'Fit', 'Vibe'], // Add more words here
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        cursorChar: '|',
        loop: true,
    });

    var typed = new Typed('#fourth', {
        strings: ['Expression', 'Stand Out', 'Me'], // Add more words here
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        cursorChar: '|',
        loop: true,
    });
    
    const nxtBttn = document.querySelector('.bannerHeader').addEventListener('click', () => {
        
        setTimeout(() => {
            window.location.href = 'home.html'
        })
    })
})
