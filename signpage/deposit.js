document.addEventListener('DOMContentLoaded', function() {
    // Get the account number from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData || !userData.accountNumber) {
        alert('Account information not found. Please sign up first.');
        window.location.href = 'signup.html';
        return;
    }

    // Display the account number
    document.getElementById('accountNumber').value = userData.accountNumber;

    // Handle form submission
    const depositForm = document.getElementById('depositForm');
    depositForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const depositAmount = document.getElementById('depositAmount').value;
        
        // Validate deposit amount
        if (depositAmount < 1000) {
            alert('Minimum deposit amount is ₹1000');
            return;
        }

        // Update user data with initial deposit
        userData.initialDeposit = parseFloat(depositAmount);
        userData.balance = parseFloat(depositAmount);
        userData.transactions = [{
            type: 'deposit',
            amount: parseFloat(depositAmount),
            date: new Date().toISOString()
        }];
        
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect to success page or dashboard
        alert('Deposit successful! Your account has been created.');
        window.location.href = 'index.html';
    });
});

// Function to generate a random account number
function generateAccountNumber() {
    const prefix = 'CB';
    const randomNum = Math.floor(10000000 + Math.random() * 90000000);
    return prefix + randomNum;
} 