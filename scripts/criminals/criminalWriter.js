
//loop through string reps of criminal objects, put into a list and print to string

import { getCriminalDataFromApiFunction, copyOfCriminalDataFunction } from './dataCriminal.js'
import { criminalHtmlObject } from './criminalHtmlObject.js'
let targetElement = document.querySelector('.criminal-list')
export const criminalWriter = () => {
    getCriminalDataFromApiFunction()
    .then(() => {
        let concatonatedCriminalStringObjects = ''
        const criminals = copyOfCriminalDataFunction()
            for(const currentCriminal of criminals){
                concatonatedCriminalStringObjects += criminalHtmlObject(currentCriminal)
            
            }
            targetElement.innerHTML += concatonatedCriminalStringObjects
    })    
}

