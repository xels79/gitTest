(async function(){
    const data = (await fetch('https://swapi.dev/api/people').then(response=>response.json())).results;
    console.log(data);
})()