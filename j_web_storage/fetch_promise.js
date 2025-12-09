function fetchData() {
  // TODO: fetch via promise
  fetch('https://reqres.in/api/unknown', {
    headers: { 'x-api-key': 'reqres_5545dfd50783408cb276120a7022957b' }
  }).then((response) => {
    //if the response is NOT ok, throw a custom response

    if (!response.status === 403) 
      throw new Error('Permission denied. Please confim authentication');
    else if (!response.ok) 
      throw new Error('Network response is NOT ok');

    //otherwise return the response in JSON format
    return response.json();

    })
    .then((result)=>{
      // logs out the data from the fetch request
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error.message);
    })
}

fetchData();