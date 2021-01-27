import { fetcherFunction, copyOfDataFunction } from './dataGetterProvider.js'
import { htmlObject } from './htmlObject.js'

const element1 = document.querySelector("#criminals-nav-link")
const element2 = document.querySelector("#officers-nav-link")
const element3 = document.querySelector("#facilities-nav-link")
//define target container to print all js generated html
let targetElement = document.querySelector('.target-element')
//listen for any click events, act according to whic link is clicked
document.addEventListener('click', event => {
  if (event.target !== element1 && event.target !== element2 && event.target !== element3) {
    return;
    }else if(event.target === element1){
        writer('criminal', 'criminals', 'conviction')
    }else if(event.target === element2){
        writer('officer','officers')
        
    }else if(event.target === element3){
        //console.log(3);
        writer('facilities','facilities')
        
    }
})

//creating and exporting new all inclusive fx to run process
//parameters: category(criminal||officer||facilities. Determined by which link is clicked)
//            page(criminals||officers||facilities. Determined by which linl is clicked)
//            conviction(ONLY needed for criminals. Used in sorting of criminals by conviction. Defined in crimeSelect.js, by the dropdown list change handler)
export const writer = (category,page,conviction) => {
    targetElement.innerHTML = ""
    
    //attempt to create a default conviction value at page load in order to print all convictions initially
         //conviction = (typeof conviction !== 'undefined') ?  conviction : 0
    //call fx to return data from api
    fetcherFunction(page)
    //instruct program to wait until dat is returned
    .then(() => {
        let concatonatedStringObjects = ''
        //create copy of returned data
        const dataArr = copyOfDataFunction()
        dataArr.forEach(current => {
            concatonatedStringObjects+= htmlObject(current,category, conviction)
        });
        document.querySelector('#targetHeading').innerHTML = category;
        targetElement.innerHTML += concatonatedStringObjects;
        console.log(concatonatedStringObjects)
    })
}


