document.addEventListener('DOMContentLoaded', function() {
    // Generate a random account number when the page loads
    const accountNumber = generateAccountNumber();
    document.getElementById('accountNumber').value = accountNumber;

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

        // Store the account details in localStorage
        const accountDetails = {
            accountNumber: accountNumber,
            balance: parseFloat(depositAmount),
            transactions: [{
                type: 'deposit',
                amount: parseFloat(depositAmount),
                date: new Date().toISOString()
            }]
        };
        
        localStorage.setItem('accountDetails', JSON.stringify(accountDetails));
        
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