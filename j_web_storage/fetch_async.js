async function fetchData() {
  // TODO: fetch via async/await
  try {
    /**take note of the prepended keyword await */
    const response = await fetch('https://reqres.in/api/unknown', {
      headers: { 'x-api-key': REQRES_API_KEY },
    });

    if (response.status === 403)
      throw new Error('Permission denied. Please confim authentication');
    else if (!response.ok)
      throw new Error('Network response is NOT ok');

    /**take note of the prepended keyword await */
    const result = await response.json();
    // console.log(result);
    console.log(result.data);

  } catch (error) {
    //manage the error messages including those custom ones
    console.log(error.message);

  }
}
fetchData();
