//parameters: current(defined by writer for iteration)
//            category(defined by writer at link click)
//            
export const htmlObject = (current,category) => {
    if (category == 'criminal') {
        //if default is selected at dropdown;print all criminals. 
        
        return `
        <ul id='individualCriminalList'>
            <li> Name: ${current.name}</li>
            <li> Age: ${current.age}</li>
            <li> Incarceration Date: ${new Date(current.incarceration.start).toLocaleDateString('en-US')}</li>
            <li> Release Date: ${new Date(current.incarceration.end).toLocaleDateString('en-US')}</li>
            <li> Address: ${current.address}</li>
            <li> Arresting Officer: ${current.arrestingOfficer}</li>
            <li> Conviction: ${current.conviction}</li>
            <div class='associates-button'>
            ${/* creating a button that returns id of criminal when clicked, then creating div to target when associate lines are printed*/''}
            <button id="associate-id:${current.id}">Known Associates</button>
            </div>
            <div class='ka${current.id}'></div>
        </ul>
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
