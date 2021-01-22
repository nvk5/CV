const generateLighthouse = lighthouse => {
    const [testName, testResults] = lighthouse;
    const resultFields = Object.entries(testResults);

    const template = (result) => {
        const [lighthouseName, lighthousePoints] = result;
        return `
            <li class="project-details__lighthouse-item">
                <span class="project-details__lighthouse-name">${lighthouseName}</span>
                <span class="project-details__lighthouse-points">${lighthousePoints}</span>
            </li>
        `
    }

    return `
        <h4 class="headline project-details__headline">${testName}</h4>
        <ul class="project-details__lighthouse project-details__result">
            ${resultFields.map(item => template(item)).join('')}
        </ul>
    `
}

export default generateLighthouse;