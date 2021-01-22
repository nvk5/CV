const generatePageSpeed = pageSpeed => {
    const [testName, testResults] = pageSpeed;
    const resultFields = Object.entries(testResults);

    const template = (result) => {
        const [pageSpeedName, pageSpeedPoints] = result;
        return `
            <li class="project-details__pagespeed-item">
                <span class="project-details__pagespeed-name">${pageSpeedName}</span>
                <span class="project-details__pagespeed-points">${pageSpeedPoints}</span>
            </li>
        `
    }

    return `
        <h4 class="headline project-details__headline">${testName}</h4>
        <ul class="project-details__pagespeed project-details__result">
            ${resultFields.map(item => template(item)).join('')}
        </ul>
    `
}

export default generatePageSpeed;