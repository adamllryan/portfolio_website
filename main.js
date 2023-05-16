const maxEntries = 10;
const defaultImage = "https://github.com/adamllryan.png";
const pathHeader = "https://github.com/adamllryan/";
const jsonPath = "display-projects.json";

var projects = [
    {
        "order": "1",
        "path": "autoclicker",
        "imgsrc": ""
    },
    {
        "order": "2",
        "path": "battleship",
        "imgsrc": ""
    }
]
function createRow(src, data) {

    let row = document.createElement("div");
    row.classList.add("grid");
    src.appendChild(row);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("project-img");
    row.appendChild(imgContainer);
    let img = document.createElement("img");
    if (data.imgsrc !== "" && data.imgsrc !== undefined) {
        img.src = data.imgsrc;
    } else {
        img.src = defaultImage;
    }
    imgContainer.appendChild(img);
    
    let content = document.createElement("div");
    content.classList.add("content");
    row.appendChild(content);

    //project title

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("project-title");
    titleContainer.innerHTML = "<a href=" + pathHeader + data.path + ">" + data.path+ "</a>";
    content.appendChild(titleContainer);
    
    //project description

    let textContainer = document.createElement("div");
    textContainer.classList.add("project-text");
    
    

    textContainer.innerHTML = fetch("https://github.com/adamllryan/Battleship/blob/main/README.md")
    .then(a => a.json)
    .then(a => atob(a.content));


    
    //textContainer.innerHTML = "text";

    content.appendChild(textContainer);

}


function populateTable() {
    let rowCount = 0;
    let table = document.getElementById("projects");
    while (rowCount < maxEntries && rowCount < projects.length) {
        console.log(rowCount+" row")
        createRow(table, projects[rowCount]);
        rowCount++;
    }
}

populateTable();