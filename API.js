// Define the API URL for fetching data
const APIURL = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Asynchronous function to fetch data from the API
async function fetchUOBData() {
    try {
        // Fetch data from the API
        const response = await fetch(APIURL);

        // Check if the response is not OK or if the status is not 200 (success)
        if (!response.ok || response.status !== 200) {
            console.error('ERROR !!! NOT OK'); // Log an error if the response fails
        }

        // Parse the JSON response into a JavaScript object
        const data = await response.json();

        // Pass the results to the function responsible for displaying the data and log any errors that occur during the fetch process

        displayUOBData(data.results);
    } catch (error) {
        console.error('ERROR !!!', error);
    }
}

// Function to display data in a table
function displayUOBData(results) {
    // Get the table body element where rows will be added
    const tableBody = document.getElementById('table-body');

    // Loop through each result and create a table row
    results.forEach(result => {
        // Create a new table row element
        const tableRow = document.createElement('tr');

        // Populate the row with the data for each column
        tableRow.innerHTML = `
            <td>${result.year}</td>
            <td>${result.semester}</td>
            <td>${result.the_programs}</td>
            <td>${result.nationality}</td>
            <td>${result.colleges}</td>
            <td>${result.number_of_students}</td>
        `;

        // Append the populated row to the table body
        tableBody.appendChild(tableRow);
    });
}

// Wait for the DOM content to load, then execute the fetchUOBData function
document.addEventListener('DOMContentLoaded', fetchUOBData);
