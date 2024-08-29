// JavaScript for sidebar toggle

const profile_element = document.getElementById('profile-name')
const user_name = JSON.parse(localStorage.getItem('user-name'))




if(user_name){
    console.log(user_name);
    
    profile_element.innerText = user_name
}
else{
    profile_element.innerText = ""
}
function toggleNavbar() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('collapse');
}
const slides = document.getElementById('slides');
const slideCount = slides.children.length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show the next slide every 3 seconds
setInterval(showNextSlide, 3000);