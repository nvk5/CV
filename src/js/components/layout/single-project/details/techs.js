const generateTechs = techs => {
    const [techName, techResults] = techs;
    const resultFields = Object.entries(techResults);

    const template = result => {
        const [techName, techIcon] = result;
        return `
            <li class="project-details__techs-item" title="${techName}">
                <svg class="project-details__techs-icon">
                    <use xlink:href="assets/images/tools.svg#${techIcon}"></use>
                </svg>
            </li>
        `
    }

    return `
        <h4 class="headline project-details__headline">${techName}</h4>
        <ul class="project-details__techs project-details__result">
            ${resultFields.map(item => template(item)).join('')}
        </ul>
    `
}

export default generateTechs;

