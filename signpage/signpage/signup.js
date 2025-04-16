document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validate form
        if (!validateForm(fullName, dob, gender, mobile, email, password, confirmPassword)) {
            return;
        }
        
        // Here you would typically handle the signup logic
        console.log('Signup attempt:', {
            fullName,
            dob,
            gender,
            mobile,
            email,
            password
        });
        
        // For demo purposes, show success message
        alert('Account created successfully!');
        window.location.href = 'index.html';
    });
    
    function validateForm(fullName, dob, gender, mobile, email, password, confirmPassword) {
        // Name validation
        if (fullName.trim() === '') {
            alert('Please enter your full name');
            return false;
        }
        
        // DOB validation
        if (!dob) {
            alert('Please select your date of birth');
            return false;
        }
        
        // Gender validation
        if (!gender) {
            alert('Please select your gender');
            return false;
        }
        
        // Mobile validation
        if (!/^\d{10}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number');
            return false;
        }
        
        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Password validation
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return false;
        }
        
        // Password confirmation
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }
        
        return true;
    }
}); 