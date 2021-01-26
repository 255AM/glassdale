//create and export a string representation of a criminal object

export const criminalHtmlObject = (criminal) => {
    return `
            <li class="criminal__name">Name: ${criminal.name}</li>
            <li class="criminal__age">Age: ${criminal.age}</li>
            <li class="start_date">Incarceration Date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
            <li class="start_date">Release Date: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
            <br>
    `
}






