const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navList.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    const overlay = container.querySelector(".overlay");

    container.addEventListener("mouseenter", () => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "0";
    });
  });
});
const playButton = document.getElementById('play-button');
const closeButton = document.getElementById('close-button');
const videoContainer = document.getElementById('video-container');
const introVideo = document.getElementById('intro-video');

playButton.addEventListener('click', () => {
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center', 'bg-black');
    introVideo.src = 'https://www.youtube.com/embed/b28zbsnk-48?autoplay=1';
    introVideo.classList.add('w-full', 'h-full');
});

closeButton.addEventListener('click', () => {
    videoContainer.classList.add('hidden');
    videoContainer.classList.remove('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center', 'bg-black');
    introVideo.src = '';
});
// Smooth scrolling functionality
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior

    // Get the target section's ID from data-target attribute
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// Full-screen image display for the left button
document.querySelectorAll('.left-btn').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();
      const imgSrc = this.getAttribute('data-img');
      const fullScreenDiv = document.createElement('div');
      fullScreenDiv.classList.add('fullscreen-image');
      fullScreenDiv.innerHTML = `
          <div class="fullscreen-overlay">
              <img src="${imgSrc}" alt="Full-Screen Image">
              <span class="close-btn">&times;</span>
          </div>
      `;
      document.body.appendChild(fullScreenDiv);
      const closeBtn = fullScreenDiv.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
          document.body.removeChild(fullScreenDiv);
      });
  });
});

// Open a new tab for the right button
document.querySelectorAll('.right-btn').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();
      const link = this.getAttribute('data-link');
      window.open(link, '_blank');
  });
});

// login section 

const loginButton = document.getElementById('login-button');
const loginSection = document.getElementById('login-section');
const closeLoginButton = document.getElementById('close-login');

const signupButton = document.getElementById('signup-button');
const signupSection = document.getElementById('signup-section');
const closesignupButton = document.getElementById('close-signup');

const reloginButton = document.getElementById('relogin-button');


loginButton.addEventListener('click', () => {
  signupSection.style.display = 'none';
  loginSection.style.display = 'flex';
});

reloginButton.addEventListener('click', () => {
  signupSection.style.display = 'none';
  loginSection.style.display = 'flex';
});

closeLoginButton.addEventListener('click', () => {
  loginSection.style.display = 'none';
});



signupButton.addEventListener('click', () => {
  loginSection.style.display = 'none';
  signupSection.style.display = 'flex';
});

closesignupButton.addEventListener('click', () => {
  signupSection.style.display = 'none';
});

// log in section ends here 
