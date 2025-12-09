const listColors = document.querySelector("#list-colors");

function addItem(item) {
    const colorCard = document.createElement("section");
    colorCard.className = "card w-100";
    listColors.append(colorCard);

    const colorCardBody = document.createElement("article");
    colorCardBody.className = "card-body";
    colorCard.append(colorCardBody);

    const colorCardTitle = document.createElement("h5");
    colorCardTitle.className = "card-title";
    colorCardTitle.innerText = item.name;
    colorCardBody.append(colorCardTitle);

    const colorCardText = document.createElement("p");
    colorCardText.className = "card-text";
    colorCardText.innerText = item.pantone_value;
    colorCardBody.append(colorCardText);

    const colorCardColor = document.createElement("figure");
    colorCardColor.style = "background-color: " + item.color + ";";
    colorCardColor.innerText = item.color;
    colorCardBody.append(colorCardColor);

    const colorCardBreak = document.createElement("br");
    listColors.append(colorCardBreak);
}

// 1. Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

async function fetchColorsList() {

    try {

        // Using fetch, call for the 1st page of Data from the given url
        const response = await fetch("https://reqres.in/api/unknown",
                { headers: { "x-api-key": "reqres_5545dfd50783408cb276120a7022957b" } }
        );
        const resp = await response.json();
        //  console.log(resp);

        if (!resp.data)
            throw new Error("There was an error.");
        // Fetch the subsequent page(s) of Data (using a For Loop)
        let allColors = resp.data;          // 6 items
        let page = resp.page + 1;            // move offset pointer to page 2
        let totalPages = resp.total_pages;  //refer the 'total_pages' naming at browser console.

        // start from the 2nd page (1st page has previously been fetched)
        for (let currentPage = page; currentPage <= totalPages; currentPage++) {
            const response = await fetch(`https://reqres.in/api/unknown?page=${currentPage}`,
                     { headers: { "x-api-key": "reqres_5545dfd50783408cb276120a7022957b" } }
            );

            const resp = await response.json();

            //"..." spread/destructure the 2nd page
            //otherwise all the data from 2nd page will appear as a single data set and be added as a single data set (to the last of the 1st page)
            // and resp.data will contain 7 data sets instead of 12.

            //method#1
            allColors.push(...resp.data);

            //method#2 another way to spread/deconstruct  
            //    allColors = [...allColors, ...resp.data];

            //method#3: OLD method
            // for (let index = 0; index < resp.data.length; index++) {
            //     allColors.push(resp.data[index]);
            // }
        }

        console.log(allColors);

        // Clear listColors first
        listColors.innerHTML = "";

        // Create an array to store the color list to localStorage
        const arrColors = new Array();

        // Loop through each array index to be passed to addItem(item) function for display
        // Also, convert each JSON object item into a string for storage into arrColors
        allColors.forEach(color => {
            addItem(color);
            arrColors.push(color);
        });

        // Store the array data arrColors into the browser window's localStorage 
        //stringify is to convert the key value pairs (object) to strings
        //sringify is the opposite of parse
        window.localStorage.setItem("list-colors", JSON.stringify(arrColors));


    } catch (error) {
        const errHeader = document.createElement("div");
        errHeader.className = "d-flex justify-content-center border-black text-danger fs-6 py-2";
        errHeader.textContent = "Error loading colours!";
        listColors.append(errHeader);
    }
}

// 2.  Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage. 
//     Open the developer tools and verify that the data is stored in the local storage.

function loadColorsFromStorage() {

    // Retrive the values stored in list-colors from localstorage
    const arrColors = window.localStorage.getItem("list-colors");

    // parse the values into Objects (JSON.parse())
    // parse is the opposite of stringify.
    const parsedColors = JSON.parse(arrColors);

    // iterate and populate the HTML page by calling addItem()
    parsedColors.forEach(color => {
        addItem(color);
    })
}

// 3. when the document content is loaded, 
//    if available, load the color list from localStorage
//    otherwise, invoke fetchColorsList() to fetch the colors from the external api
document.addEventListener("DOMContentLoaded", () => {
    const loadColors = window.localStorage.getItem("list-colors");

    if (loadColors)
        return loadColorsFromStorage();   //data from local storage
    return fetchColorsList();             //data from external api
})