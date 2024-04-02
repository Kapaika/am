// Function to calculate remaining time
function calculateRemainingTime() {
    const targetDate = "2024-05-10"; // Get target date from HTML
    const currentDate = new Date(); // Get current date
  
    // Parse target date into a Date object for comparison
    const targetDateObject = new Date(targetDate);
  
    // Calculate difference in milliseconds
    const timeDifference = targetDateObject.getTime() - currentDate.getTime();
  
    // Check if target date has passed
    if (timeDifference <= 0) {
      document.getElementById("countdownDisplay").textContent = "Target Date Reached!";
      return; // Stop execution if target date has passed
    }
  
    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days*24);
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  

    // Format the countdown string (adjust formatting as needed)
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("countdownDisplay").textContent = formattedTime;
  }
  
  // Call the function initially to display the countdown on page load
  calculateRemainingTime();
  
  // Update the countdown every second to ensure it's dynamic
  setInterval(calculateRemainingTime, 1000); // Update every second