const generateValidation = validation => {
    const [validationName, validationResults] = validation;
    const [isValidIcon, comment] = Object.values(validationResults);
    const isCommentAvailable = () => comment ? `<span class="project-details__validation-comment">${comment}</span>` : '';

    return `
        <h4 class="headline project-details__headline">${validationName}</h4>
        <div class="project-details__validation project-details__result">
            <span class="project-details__validation-item">
                <svg class="project-details__validation-icon">
                    <use xlink:href="assets/images/tools.svg#${isValidIcon}"></use>
                </svg>
            </span>
            ${isCommentAvailable()}
        </div>
    `
}

export default generateValidation;