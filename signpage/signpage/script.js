document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signUpBtn = document.querySelector('.sign-up-btn');
    
    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically handle the login logic
        console.log('Login attempt:', { email, password });
        
        // For demo purposes, show success message
        alert('Login successful!');
    });
    
    // Handle sign up button click
    signUpBtn.addEventListener('click', () => {
        // Here you would typically redirect to the sign up page
        alert('Redirecting to sign up page...');
    });
}); 