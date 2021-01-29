
import { fetcherFunction,copyOfDataFunction} from "./dataGetterProvider.js";
//import {htmlObject} from './htmlObject.js'

export const connectr = ()=>{
    'nothing'
}

let chosenAssociates = ''
const knownAssociateButtonPress = document.querySelector("main")
    knownAssociateButtonPress.addEventListener("click", (eventObject) => {
        //call function to get all criminal data
        fetcherFunction('criminals').then(()=>{
            //copy of ALL criminal data
            let copyCriminalData = copyOfDataFunction()
            //string to print after everything is gathered
            let printString = ''
            
            //getting a string from event handler that includes 'knownassociates--id', need to remove the knownassociates and only keep the number(id)
            const str = eventObject.target.id;
            const slug = str.split(':').pop();  
            
            //chose element to target when writing criminal associates to screen
            // will read .ka1 for example
            const targetElement = document.querySelector(`.ka${slug}`)   
            //chosenassociate = coppyCrmiinalData[0].known_associates    
            chosenAssociates = copyCriminalData[slug].known_associates
            
            //go through each affiliated associate and create list items for them
             chosenAssociates.forEach(element => {
                printString += `
                <li class='ka_name'>${element.name}</li>
                <li class='ka_alibi'>${element.alibi}</li>
                 `
             });
             //knownAssociate = copyCriminalData[0].knownAssociate.
             targetElement.innerHTML = printString;
        })
    })
            
    
    
