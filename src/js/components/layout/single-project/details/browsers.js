const generateBrowsers = browsers => {
    const [testName, testResults] = browsers;
    const resultFields = Object.entries(testResults);

    const template = result => {
        const [browserName, browserIcon] = result;
        return `
            <li class="project-details__browsers-item" title="${browserName}">
                <svg class="project-details__browsers-icon">
                    <use xlink:href="assets/images/browsers.svg#${browserIcon}"></use>
                </svg>
            </li>
        `
    }

    return `
        <h4 class="headline project-details__headline">${testName}</h4>
        <ul class="project-details__browsers project-details__result">
            ${resultFields.map(item => template(item)).join('')}
        </ul>
    `
}

export default generateBrowsers;