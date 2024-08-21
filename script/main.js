// Menu Toggle for Mobile
document.querySelector('.menu').addEventListener('click', function() {
 document.querySelector('ul').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
     e.preventDefault();
     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });
});

// Dark/Light Mode Toggle
const toggleSwitch = document.querySelector('.mode input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
 if (e.target.checked) {
     document.documentElement.setAttribute('data-theme', 'dark');
 } else {
     document.documentElement.setAttribute('data-theme', 'light');
 }
}

// Gallery Functionality (Simple Lightbox)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
 item.addEventListener('click', function() {
     const lightbox = document.createElement('div');
     lightbox.id = 'lightbox';
     document.body.appendChild(lightbox);

     const img = document.createElement('img');
     img.src = this.querySelector('img').src;
     lightbox.appendChild(img);

     lightbox.addEventListener('click', function() {
         lightbox.remove();
     });
 });
});

// Animation on Scroll (Intersection Observer API)
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
     if (entry.isIntersecting) {
         entry.target.classList.add('animate');
     } else {
         entry.target.classList.remove('animate');
     }
 });
});

animatedElements.forEach(element => {
 observer.observe(element);
});

// Filter Functionality for Portfolio/Projects
const filterButtons = document.querySelectorAll('.filter-button');
const filterItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
 button.addEventListener('click', function() {
     const filter = this.dataset.filter;

     filterItems.forEach(item => {
         if (filter === 'all' || item.classList.contains(filter)) {
             item.style.display = 'block';
         } else {
             item.style.display = 'none';
         }
     });

     // Update active button class
     filterButtons.forEach(btn => btn.classList.remove('active'));
     this.classList.add('active');
 });
});
