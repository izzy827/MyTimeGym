// Sign-up form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple password confirmation check
    if (password !== confirmPassword) {
        document.getElementById('signupMessage').textContent = 'Passwords do not match!';
        document.getElementById('signupMessage').style.color = 'red';
        return;
    }

    // If all is well, show success message
    document.getElementById('signupMessage').textContent = 'Thank you for signing up!';
    document.getElementById('signupMessage').style.color = 'green';

    // Reset form after successful submission
    document.getElementById('signupForm').reset();
});
