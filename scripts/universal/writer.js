
//loop through string reps of criminal objects, put into a list and print to string

import { fetcherFunction, copyOfDataFunction } from './dataGetterProvider.js'
//
import { htmlObject } from './htmlObject.js'
//select target to print to


const element1 = document.querySelector("#criminals-nav-link")
const element2 = document.querySelector("#officers-nav-link")
const element3 = document.querySelector("#facilities-nav-link")
let targetElement = document.querySelector('.criminal-list')

document.addEventListener('click', event => {
  if (event.target !== element1 && event.target !== element2 && event.target !== element3) {
    return;
    }else if(event.target === element1){
        writer('criminal', 'criminals')
    }else if(event.target === element2){
        writer('officer','officers')
    }else if(event.target === element3){
        //console.log(3);
        writer('facilities','facilities')
    }
})




//creating and exporting new all inclusive fx to run process
export const writer = (category,page) => {
    targetElement.innerHTML = ""
    
    //call fx to return data from api
    fetcherFunction(page)
    //instruct program to wait until dat is returned
    .then(() => {
        let concatonatedStringObjects = ''
        //create copy of returned data
        const dataArr = copyOfDataFunction()
            for(const current of dataArr){
                concatonatedStringObjects += htmlObject(current, category)
                console.log(current)
            
            }
            targetElement.innerHTML += concatonatedStringObjects
    })    
}


