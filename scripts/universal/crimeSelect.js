

/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { copyOfCrimeList, getCrimeListFunction } from "./crimeProvider.js"
import { writer } from "./writer.js"

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
        <select class='dropdown' id='crimeSelect'>
        <option value="0">Please select a crime...</option>
           ${
                convictionsCollection.map(personObject => {
                   
                   return `<option>${personObject.name}</option>`
               })
           }
        </select>
        `
    }    
}   

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the main container")
    console.log('this', eventObject.target.id)

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id === 'crimeSelect'){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        //calling for writer fx to run with provided arguments on crimeSelect change
        writer('criminal','criminals', eventObject.target.value)
    }
})