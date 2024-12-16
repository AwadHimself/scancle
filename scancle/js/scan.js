const startScanButton = document.querySelector('.start-scan');
const scanAnimationContainer = document.querySelector('.scan-animation-container');
const scanCompleteForm = document.querySelector('.scan-complete-form');
const formContainer = document.querySelector('.form-container');

startScanButton.addEventListener('click', () => {
    // Show scanning animation
    scanAnimationContainer.style.display = 'flex';
    // Hide the initial form container
    formContainer.style.display = 'none';
    // Hide "Scan Complete" form initially
    scanCompleteForm.style.display = 'none';

    // Simulate scan time (10 seconds)
    setTimeout(() => {
        // Hide scanning animation
        scanAnimationContainer.style.display = 'none';
        // Show scan complete form
        scanCompleteForm.style.display = 'flex';
    }, 10000); // 10 seconds
});

document.querySelector('.scan-again').addEventListener('click', () => {
    // Reset the form and start scan again
    scanCompleteForm.style.display = 'none';
    formContainer.style.display = 'block';
});
