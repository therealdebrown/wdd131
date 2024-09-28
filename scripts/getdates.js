
const currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent = `© ${currentYear} My Website`;


const lastModified = document.lastModified;


document.getElementById("last-modified").textContent = `Last modified: ${lastModified}`;