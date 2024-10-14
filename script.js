const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert("Thank you! You will be notified soon.");
        emailInput.value = ''; // Clear input field
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
