const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');

/**
 * Pads a number with a leading zero if it's less than 10.
 */
const pad = (num) => num.toString().padStart(2, '0');

/**
 * The main function to update the clock every second.
 */
const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 1. Update Date Display
    const dateOptions = {
        weekday: 'long', // Full weekday name
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };
    dateDisplay.textContent = now.toLocaleDateString('en-US', dateOptions);


    // 2. Format Time String (12-Hour only)
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' (midnight) should be '12'

    // Build the time string with blinking colons and AM/PM indicator
    // Using innerHTML allows the <span> tags for blinking to be rendered
    const timeString = `${pad(hours)}<span class="colon-blink">:</span>${pad(minutes)}<span class="colon-blink">:</span>${pad(seconds)} <span class="text-3xl font-normal">${ampm}</span>`;

    timeDisplay.innerHTML = timeString;
};

// Initial call and setting up the interval when the window is fully loaded
window.onload = function() {
    // Initial call to display the time immediately
    updateClock();
    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);
};