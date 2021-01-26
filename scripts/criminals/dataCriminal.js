

//declare empty array as placeholder to hold data that you will be returning
let criminals = []


export const getCriminalDataFromApiFunction = () => {
    return fetch('https://criminals.glassdale.us/criminals')
    .then(response => response.json())
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