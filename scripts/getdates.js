// getdates.js

// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Display the current year dynamically in the footer's first paragraph
document.getElementById("copyright").textContent = `© ${currentYear} My Website`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Display the last modified date in the footer's second paragraph
document.getElementById("last-modified").textContent = `Last modified: ${lastModified}`;