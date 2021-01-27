
//loop through string reps of criminal objects, put into a list and print to string

import { getCriminalDataFromApiFunction, copyOfCriminalDataFunction } from './dataCriminal.js'
//
import { criminalHtmlObject } from './criminalHtmlObject.js'
//select target to print to


document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    criminalWriter()
})

//creating and exporting new all inclusive fx to run process
export const criminalWriter = () => {
    let targetElement = document.querySelector('.criminal-list')
    //call fx to return data from api
    getCriminalDataFromApiFunction()
    //instruct program to wait until dat is returned
    .then(() => {
        let concatonatedCriminalStringObjects = ''
        //create copy of returned data
        const criminals = copyOfCriminalDataFunction()
            for(const currentCriminal of criminals){
                concatonatedCriminalStringObjects += criminalHtmlObject(currentCriminal)
            
            }
            targetElement.innerHTML += concatonatedCriminalStringObjects
    })    
}


