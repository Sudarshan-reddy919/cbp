document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Generate account number
        const accountNumber = generateAccountNumber();
        
        // Store user data in localStorage
        const userData = {
            fullName,
            dob,
            gender,
            mobile,
            email,
            password, // Note: In a real application, you should hash the password
            accountNumber
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect to deposit page
        window.location.href = 'deposit.html';
    });
});

// Function to generate a random account number
function generateAccountNumber() {
    const prefix = 'CB';
    const randomNum = Math.floor(10000000 + Math.random() * 90000000);
    return prefix + randomNum;
} 