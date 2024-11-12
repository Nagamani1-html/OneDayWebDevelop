function submitForm() {
    // Select form elements
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Basic form validation
    if (!username || !email || !password) {
      message.textContent = 'Please fill out all fields.';
      return;
    }
  
    // Prepare form data
    const formData = {
      username: username,
      email: email,
      password: password
    };
  
    // Submit data to the server
    fetch('https://example.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response
        if (data.success) {
          message.textContent = 'Signup successful!';
          form.reset(); // Clear the form
        } else {
          message.textContent = data.message || 'Signup failed. Please try again.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        message.textContent = 'An error occurred. Please try again.';
      });
  }


