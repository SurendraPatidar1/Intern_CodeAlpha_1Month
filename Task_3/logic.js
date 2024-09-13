<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        formMessage.textContent = 'Thank you! Your message has been sent.';
        formMessage.style.color = 'green';
      } else {
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.style.color = 'red';
      }
    }).catch(error => {
      formMessage.textContent = 'Oops! Something went wrong. Please try again.';
      formMessage.style.color = 'red';
    });
  });
</script>
