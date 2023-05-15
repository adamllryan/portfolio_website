//const { faker } = require('@faker-js/faker');
//console.log(faker.lorem.paragraph(1));
const maxEntries = 10;
function createRow() {

    return "<tr>Row</tr>"
}

function populateTable() {
    let count = 0;
    let isFinished = false;
    let table = document.getElementById("projects");
    while (!isFinished && count < maxEntries) {
        let row = table.insertRow(count);
        row.innerHTML = "Project " + count;
        count++;
    }
}

populateTable();