

//declare empty array as placeholder to hold data that you will be returning
let dataArr = []

//using fetch request, return data from api
export const fetcherFunction = (page) => {
    let fetchString = `https://criminals.glassdale.us/${page}`
    return fetch(fetchString)
    //with callbackfunction turn data in json
    .then(reply => reply.json())
    //callback fx that takes data and logs it to console.
    //***********************************************what is the parsedCriminal parameter??? Where is the response.json utilized?? */
    .then(
        parsedData => {
            console.table(parsedData)
            dataArr = parsedData
            
        }
    )
}

//function returns a copy of criminal objects
export const copyOfDataFunction = () => {
    return dataArr.slice()
}