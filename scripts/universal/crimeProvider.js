


//declare empty array as placeholder to hold data that you will be returning
let convictions = []

//using fetch request, return data from api
export const getCrimeListFunction = () => {
    
    return fetch('https://criminals.glassdale.us/crimes')
    //with callbackfunction turn data in json
    .then(reply => reply.json())
    //callback fx that takes data and logs it to console.
    //***********************************************what is the parsedCriminal parameter??? Where is the response.json utilized?? */
    .then(
        parsedData => {
            console.table(parsedData)
            convictions = parsedData
        }
    )
}

//function returns a copy of criminal objects
export const copyOfCrimeList = () => {
    return convictions.slice()
}