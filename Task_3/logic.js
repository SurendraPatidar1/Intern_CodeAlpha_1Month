const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', function() {
  sidebar.classList.toggle('open');
});

// Typing effect for the "I'm a ..." section
const typingEffect = document.querySelector('.typing-effect');
const texts = ["Web Designer", "Frontend Developer", "Graphic Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
    // Type characters
    typingEffect.textContent = currentText.slice(0, charIndex++);
    
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting the text
    } else {
      setTimeout(type, 200); // Speed of typing
    }
  } else {
    // Delete characters
    typingEffect.textContent = currentText.slice(0, charIndex--);
    
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Loop through the texts array
      setTimeout(type, 500); // Short pause before typing again
    } else {
      setTimeout(type, 100); // Speed of deleting
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  type();
});
