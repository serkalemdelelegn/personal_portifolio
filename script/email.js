// Initialize EmailJS with your user ID
(function(){
 emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS user ID
})();

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
 event.preventDefault(); // Prevent default form submission

 // Get form values
 var templateParams = {
     name: document.getElementById('name').value,
     email: document.getElementById('email').value,
     comment: document.getElementById('comment').value,
 };

 // Send email using EmailJS
 emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
     .then(function(response) {
         alert('Your message was sent successfully!');
     }, function(error) {
         alert('Failed to send your message. Please try again later.');
     });
});
