

//declare empty array as placeholder to hold data that you will be returning
let criminals = []

//using fetch request, return data from api
export const getCriminalDataFromApiFunction = () => {
    return fetch('https://criminals.glassdale.us/criminals')
    //with callbackfunction turn data in json
    .then(chuck => chuck.json())
    //callback fx that takes data and logs it to console.
    //***********************************************what is the parsedCriminal parameter??? Where is the response.json utilized?? */
    .then(
        parsedCriminals => {
            console.table(parsedCriminals)
            criminals = parsedCriminals
            
        }
    )
}

//function returns a copy of criminal objects
export const copyOfCriminalDataFunction = () => {
    return criminals.slice()
}