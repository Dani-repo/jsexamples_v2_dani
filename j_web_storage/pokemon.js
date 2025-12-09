function fetchData(){

        // via promises
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=1327') /* (?) is a query parameter */
        //limit keyword is for number of data, API platform specific;
        // offset is the pointernumber of data to be skipped (from start)
        // use & operator to use both e.g.: limit=5&offset=2
        .then((response) =>{        //obtain the response and return the json format

            if(!response.ok)
                throw new Error("Network response is NOT ok.");
            return response.json();
        })                 
        .then((data)=>{           // work on the json response
        //    console.log(data); //will give the object name with key value pair
        // if fetched data goes beyond 1328 characters
            const returnedCharacters = data.results;
            if(!returnedCharacters.length)
                throw new Error("No Pokemon characters found")

             console.log(data.results); //will give the key value pair without object name

        })                 
        .catch((error)=> {          // handle errors
                console.log(error.message);
        });            
}

fetchData();