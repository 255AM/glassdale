/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { copyDropDownData, getDropdownDataFunction } from "./dropDownDataProvider.js"
import { writer } from "./writer.js"

// Get a reference to the DOM element where the <select> will be rendered

export const dropDownCreator = (dataChoice) => {
    let containerID = ''
    let page = ''
    if (dataChoice === "convictions"){
       containerID = '.convictions-dropdown'
       page = 'crimes'
    }else if (dataChoice === 'officers'){
        containerID = '.arresting-officer-dropdown'
        page = 'officers'
    }

    const contentTarget = document.querySelector(containerID)
    // Get all convictions from application state
    getDropdownDataFunction(page).then (() => {
        const dataArr = copyDropDownData()
        render(dataArr)
    })
    const render = dataArr => {
        contentTarget.innerHTML = `
        <select class='dropdown' id=${containerID}>
        <option value="0">Please Select</option>
           ${
                dataArr.map(current => {
                 return `<option>${current.name}</option>`
               })
           }
        </select>
        `
    }    
} 



//Get a reference to the DOM element where the <select> will be rendered


// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
let officer = 0
let crime = 0
function Reset() {
    var dropDown = document.getElementById('.arresting-officer-dropdown');
    dropDown.selectedIndex = 0;
}    

const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eventObject) => {
    

    // To be more specific, we need to know specifically what we clicked on
    

    if(eventObject.target.id === '.convictions-dropdown'){
        crime = eventObject.target.value
        //calling for writer fx to run with provided arguments on crimeSelect change
        writer('criminal','criminals', crime, officer)
        //Reset()
        
        
    }else if (eventObject.target.id === '.arresting-officer-dropdown'){
        let officer = eventObject.target.value
        //calling for writer fx to run with provided arguments on officer change
        writer('criminal','criminals', crime, officer)
        }
    

})

