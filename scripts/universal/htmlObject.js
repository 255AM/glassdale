//parameters: current(defined by writer for iteration)
//            category(defined by writer at link click)
//            ONLY needed at criminal category. Defined by dropdown change. Used to determine which elements to filter
export const htmlObject = (current,category,conviction) => {
    if (category == 'criminal') {
        //if default is selected at dropdown;print all criminals. false failed attempt to catch at page load, reevaluate
        if (conviction === '0' || conviction === false){
            console.log('here1')
            console.log(current.name)
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
        //if conviction in array matches user selected conviction at dropdown include at filter
        }else if (conviction === current.conviction){
            console.log('here2')
            console.log(current.name)
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
        //if user selected conviction doesnt match criminals.conviction, return an empty string to writer. If not 'undefined' will be printed
        }else{
            return '';
        }
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
