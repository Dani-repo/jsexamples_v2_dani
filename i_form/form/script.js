// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "EvenListeners");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");


// Set the attributes of selectDom
selectDom.setAttribute("multiple", "true");

// Populate the options in selectDom
arrTopics.forEach(topic => {
    selectDom.options.add(new Option(topic, topic));
});

// set the ui of the selection options to use bootstrap classes
for (let index = 0; index < arrTopics.length; index++) {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2");
        // selectDom.options[index].classList.add("class", "btn btn-primary d-block d-block m-2");  /* same result as above */
 }

 // 11. element.getAttribute()
selectDom.addEventListener("change", () => {

    // get the collection of options from the <select> object
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions;

    // Create constant listSelected to refer to <ul> of id = ""
    const listSelected = document.getElementById("listSelected");

    // Create constant collection to be assigned the selected options from selectDom
    const collection = selectDom.selectedOptions;

    //iterate through the collection
    for (let index = 0; index < collection.length; index++) {

        //obtain the selected option from <select>
        const itemValue = collection[index].getAttribute("value");

        // find whether the topic is already selected
        const found = arrSelected.find(item => { return item == itemValue; });

        if (!found) {
            // create the list item element to be appended on to listSelected >ul>
            // list item element should show the text stored in itemValue
            const listItem = document.createElement("li");
            listItem.textContent = itemValue;
            document.getElementById("listSelected").append(listItem);

            //update arrSelected
            arrSelected.push(itemValue);
        }
    }
});

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array
const btnClearSelectList = document.getElementById("btnClearSelection");

btnClearSelectList.addEventListener("click", () => {

    // clear all selected items
    document.getElementById("listSelected").innerHTML = "";

    //clear the array arrSelected according to the length of the array
    // console.log(arrSelected);
    arrSelected.splice(0, arrSelected.length);

    //after clearing the array the length should be 0
    console.log(arrSelected.length);

});
