//declare empty array as placeholder to hold data that you will be returning
let dropDownDataArray = []

//using fetch request, return data from api
//using this data to populate dropdowns. call with either convictions or officers
export const getDropdownDataFunction = (page) => {
    let fetchString = `https://criminals.glassdale.us/${page}`
    return fetch(fetchString)
    //with callbackfunction turn data in json
    .then(reply => reply.json())
    //callback fx that takes data and logs it to console.
    .then(
        parsedData => {
            dropDownDataArray = parsedData
        }
    )
}

//function returns a copy of criminal objects
export const copyDropDownData = () => {
    return dropDownDataArray.slice()
}

