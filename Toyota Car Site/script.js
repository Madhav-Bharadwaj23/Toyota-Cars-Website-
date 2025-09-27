// Get the elements
const loginLink = document.getElementById('login-link');
const loginModal = document.getElementById('login-modal');
const closeButton = document.querySelector('.close-button');

// --- 1. OPEN the Modal ---
loginLink.addEventListener('click', (event) => {
    // Stop the link from trying to navigate or jump to a new page
    event.preventDefault(); 
    
    // Change CSS property to make it visible
    loginModal.style.display = "block";
});

// --- 2. CLOSE the Modal using the 'x' button ---
closeButton.addEventListener('click', () => {
    // Change CSS property to hide it
    loginModal.style.display = "none";
});

// --- 3. CLOSE the Modal when clicking outside the content ---
window.addEventListener('click', (event) => {
    // If the click target IS the modal container itself (the backdrop)
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});