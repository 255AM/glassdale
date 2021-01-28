import { fetcherFunction, copyOfDataFunction } from './dataGetterProvider.js'
import { htmlObject } from './htmlObject.js'
import { dropDownCreator } from './dropDownCreator.js'

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
        //create dropdown box only on criminal page
        dropDownCreator('convictions')
        dropDownCreator('officers')
    }else if(event.target === element2){
        writer('officer','officers')
        //clear dropdownbox on pages != criminals
        document.querySelector(".convictions-dropdown").innerHTML = ''
    }else if(event.target === element3){
        
        writer('facilities','facilities')
        document.querySelector(".convictions-dropdown").innerHTML = ''
    }
})

//parameters: category(criminal||officer||facilities. Determined by which link is clicked)
//            page(criminals||officers||facilities. Determined by which linl is clicked)
//            conviction(Used in sorting of criminals by conviction. Defined in dropDownCreator.js by the dropdown list change handler)
export const writer = (category,page,conviction,officer) => {
    targetElement.innerHTML = ""
    
    
    //call fx to return data from api
    fetcherFunction(page)//(page) defined at dropdownCreator.js
    //instruct program to wait until dat is returned
    .then(() => {
        let concatonatedStringObjects = ''
        //create copy of returned data
        const dataArr = copyOfDataFunction()
        let criminalsWithSelectedConviction = []
        if (conviction != 0){
            criminalsWithSelectedConviction = dataArr.filter(c =>{
                 return c.conviction == conviction
            })
            if (officer != 0){
                criminalsWithSelectedConviction = criminalsWithSelectedConviction.filter(c =>{
                    return c.arrestingOfficer == officer
                })
            }    
        }
        criminalsWithSelectedConviction.forEach(current => {
            concatonatedStringObjects+= htmlObject(current,category, conviction)
        });
        
        document.querySelector('#targetHeading').innerHTML = category;
        targetElement.innerHTML = concatonatedStringObjects;
        
    })
}


