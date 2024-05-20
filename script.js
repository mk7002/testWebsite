// Get references to elements
const currentTimeElement = document.getElementById('current-time');
const visitorCountElement = document.getElementById('visitor-count');

// Update the current time every second
function updateTime() {
  const now = new Date();
  currentTimeElement.textContent = now.toLocaleTimeString();
  setTimeout(updateTime, 1000);
}
updateTime(); // Call initially to display time on page load

// Visitor count (using localStorage for persistence)
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++; // Increment the count
visitorCountElement.textContent = `Visitors: ${visitorCount}`;
localStorage.setItem('visitorCount', visitorCount); // Persist the count
