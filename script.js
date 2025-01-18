//smooth scrolling for navgation links
document.querySelectorAll('a[href^= "$"').forEach(link =>{
link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'

    });
});
});

const year = new Date().getFullYear();
document.getElementById('year').textContent = year;