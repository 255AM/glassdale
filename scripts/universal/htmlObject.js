//parameters: current(defined by writer for iteration)
//            category(defined by writer at link click)
//            ONLY needed at criminal category. Defined by dropdown change. Used to determine which elements to filter
export const htmlObject = (current,category) => {
    if (category == 'criminal') {
        //if default is selected at dropdown;print all criminals. false failed attempt to catch at page load, reevaluate
        
        return `
            <li> Name: ${current.name}</li>
            <li> Age: ${current.age}</li>
            <li> Incarceration Date: ${new Date(current.incarceration.start).toLocaleDateString('en-US')}</li>
            <li> Release Date: ${new Date(current.incarceration.end).toLocaleDateString('en-US')}</li>
            <li> Address: ${current.address}</li>
            <li> Arresting Officer: ${current.arrestingOfficer}</li>
            <li> Conviction: ${current.conviction}</li>
            <br>
        `
    }else if (category === 'officer'){
        console.log('here')
        console.log(current.name)
    return `
            <li class="criminal__name">Name: ${current.name}</li>
            <br>
    `
    }else if (category == 'facilities'){
        console.log('here')
        console.log(current.facilityName)
    return `
            <li class="criminal__name">Name: ${current.facilityName}</li>
            <br>
    `
    
    }
}
