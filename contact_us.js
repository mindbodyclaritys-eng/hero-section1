document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Empty field check
  if (!name || !email || !subject || !message) {
    alert("Please fill all fields");
    return;
  }

  // Email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Create form data object
  const formData = {
    name,
    email,
    subject,
    message,
    date: new Date().toISOString()
  };

  // Get existing data from localStorage
  let savedForms = JSON.parse(localStorage.getItem("contactForms")) || [];

  // Push new data
  savedForms.push(formData);

  // Save back to localStorage
  localStorage.setItem("contactForms", JSON.stringify(savedForms));

  // Success
  alert("Form submitted successfully!");
  this.reset();
});
