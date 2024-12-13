const APIURL="https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100"

async function fetchUOBData() {
    try{
const response= await fetch(APIURL)
if (!response.ok || response.status !==200){
    console.error('ERROR !!!')}
    const data= await response.json();
    displayUOBData(data.results)
    }
catch(error){
    console.error('ERROR !!!', error);
}}
function displayUOBData(results){
    const tableBody=document.getElementById('table-body')
    results.forEach(results=>{
const tableRow = document.createElement('tr')
tableRow.innerHTML= `
<td>${results.year}</td>
<td>${results.semester}</td>
<td>${results.the_programs}</td>
<td>${results.nationality}</td>
<td>${results.colleges}</td>
<td>${results.number_of_students}</td>
`
tableBody.appendChild(tableRow)
    }
);
}

document.addEventListener('DOMContentLoaded',fetchUOBData)
