alert("hii...we made our first project....hope it will reach your expectations. thank you!")

var contents = document.querySelectorAll(".expandable-content");
function toggleContent(index){
    if (contents[index].style.display === "none" || contents[index].style.display === ""){
        contents[index].style.display = "block";
    } else {
        contents[index].style.display = "none";
    }
}

// Retrieve stored visitors from localStorage or initialize an empty array
const visitors = JSON.parse(localStorage.getItem("visitors")) || [];

// Prompt user for their name when the page loads
function askForVisitorName() {
    const name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        alert("Name cannot be empty. Please reload the page and enter a valid name.");
        return;
    }

    // Get the current date and time
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Store the visitor details
    visitors.push({ name, date, time });

    // Save the updated visitors list to localStorage
    localStorage.setItem("visitors", JSON.stringify(visitors));

    alert(`Welcome, ${name}! Your visit has been recorded.`);
}

// Show visitors in the list
function showVisitors() {
    const visitorDataElement = document.getElementById("visitor-data");
    visitorDataElement.innerHTML = ""; // Clear existing visitor list

    if (visitors.length === 0) {
        alert("No visitors to display.");
        return;
    }

    // Loop through visitors and display them
    visitors.forEach((visitor, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${visitor.name} - ${visitor.date} at ${visitor.time}`;
        visitorDataElement.appendChild(listItem);
    });
}

// Ask for the visitor name as soon as the page loads
window.onload = askForVisitorName;
 