const maxEntries = 10;
const defaultImage = "https://github.com/adamllryan.png";
const pathHeader = "https://github.com/adamllryan/";
const jsonPath = "display-projects.json";
import data from './display-projects.json';
function populateRow(src, data) {
    //image
    let img = document.createElement("img");
    let url = data.imgsrc;
    if (url!="") {
        img.src = url;
    } else {
        img.src = defaultImage;
    }
    src.appendChild(img);
    //title

    //description
    return "";
}
function generateImage(url) {
    
    
    return img;
}
function populateTable() {
    let rowCount = 0;
    let isFinished = false;
    let table = document.getElementById("projects");
    let projects = JSON.parse(data);// = JSON.parse(jsonData);
    // fetch('./display-projects.json')
    // //fetch('https://adamllryan.github.io/data/display-projects.json')
    // .then(res => res.json())
    // .then(json => {
    //     projects = JSON.parse(json);
    // });
    
    while (rowCount < maxEntries && rowCount < projects.count) {
        let row = table.insertRow(rowCount);
        row.innerHTML = populateRow(row, projects[rowCount]);
        rowCount++;
    }
}

populateTable();