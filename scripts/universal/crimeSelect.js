

/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { copyOfCrimeList, getCrimeListFunction } from "./crimeProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters_crime")

export const convictionSelect = () => {
    // Get all convictions from application state
    getCrimeListFunction().then (() => {
        const convictionsCollection = copyOfCrimeList()
        render(convictionsCollection)

        

    })
    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
        <select>
           ${
                convictionsCollection.map(personObject => {
                   const fullName = personObject.name
                   return `<option>${fullName}</option>`
               })
           }
        </select>
        `
    }    
}   


