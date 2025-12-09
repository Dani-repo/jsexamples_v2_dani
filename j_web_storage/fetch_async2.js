async function fetchData() {
  // TODO: fetch via async/await
  try {
    
    // take note of the prepended keyword await
    const response = await fetch("https://reqres.in/api/unknown", { 
      headers: { "x-api-key": "reqres_dee01a6317614db2b4e14590ea671996" },
    });

    // Handle errors gracefully, 
    if(response.status === 403)
      throw new Error('Permission denied. Please confirm autentication.');
    else if(!response.ok)
      throw new Error('Network response is NOT ok.');

    // take note of the prepended keyword await
    const result = await response.json();
    console.log(result.data);

  } catch (error) {
    // manage the error messages incl. those custom ones
    console.log(error.message);
  } 
}
fetchData();
 