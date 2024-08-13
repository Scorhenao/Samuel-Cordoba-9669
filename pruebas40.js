async function processData() {
    const result1 = await fetchData1(
        "https://rickandmortyapi.com/api/character/"
    );
    const result2 = await fetchData2(result1);
    const result3 = await fetchData3(result2);
    return result3;
}

async function processData() {
    const rickAndMortyApi = await fetch(
        "https://rickandmortyapi.com/api/character/"
    );
    const rickAndMortyData = await rickAndMortyApi.json();
    const rickAndMortyCharacters = rickAndMortyData.results;
    //segunda url
    const rickAndMortyApi2 = await fetch(
        "https://rickandmortyapi.com/api/character/1"
    );
    const rickAndMortyData2 = await rickAndMortyApi2.json();
    const rickAndMortyCharacter2 = rickAndMortyData2;
    //terceira url
    const rickAndMortyApi3 = await fetch(
        "https://rickandmortyapi.com/api/character/2"
    );
    const rickAndMortyData3 = await rickAndMortyApi3.json();
    const rickAndMortyCharacter3 = rickAndMortyData3;

    return console.log(
        rickAndMortyCharacters,
        rickAndMortyCharacter2,
        rickAndMortyCharacter3
    );
}

//optimizar funcin processData 2 para que se mas rapida que la processData puede ser utilizando Promise.all y settimeout
function processData2() {
    return new Promise((resolve, reject) => {
        const rickAndMortyApi = fetch(
            "https://rickandmortyapi.com/api/character/"
        );
        rickAndMortyApi
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const rickAndMortyCharacters = data.results;
                resolve(console.log(rickAndMortyCharacters));
            })
            .catch((error) => {
                reject(error);
            });
    });
}


async function processData3(){
    const promesas = Promise.all([
        fetch("https://rickandmortyapi.com/api/character/").then((res) =>
            res.json()
        ),
        fetch("https://rickandmortyapi.com/api/character/2").then((res) =>
            res.json()
        ),
    ]).then(console.log(promesas));
}
const startTime3 = new Date().getTime();
processData3()
const endTime3 = new Date().getTime();
console.log("Tiempo de ejecución sin funcion: ", endTime3 - startTime3);

// utilizar el settimeout y el Promise.all para tener un tiempo de ejecucion mas rapido en la funccion processData2 que en la processData1

// demostrar la velocidad de procesado de la funcion proccesData1 y 2 para ver cual es mas rapida
const startTime = new Date().getTime();
processData();
const endTime = new Date().getTime();
console.log(
    "Tiempo de ejecución de la función original: ",
    endTime - startTime
);

const startTime2 = new Date().getTime();
processData2();
const endTime2 = new Date().getTime();
console.log(
    "Tiempo de ejecución de la función con Promise.all: ",
    endTime2 - startTime
);
