const countdownElement = document.getElementById('timer');

// Set the target date for the birthday
const birthday = new Date('1999-11-13').getTime(); // Replace 'YYYY-MM-DD' with your actual birth date

// Update the countdown every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Happy Birthday!";
    }
}, 1000);
