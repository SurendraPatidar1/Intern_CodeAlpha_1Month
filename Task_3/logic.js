function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('contactForm'));

    // Display a success message for now (replace this with backend logic)
    console.log("Form Submitted", Object.fromEntries(formData.entries()));

    // Send form data to the developer (via a backend API, email, or database)
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Your message has been sent successfully!");
        } else {
            alert("There was an issue submitting your message.");
        }
    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
}
