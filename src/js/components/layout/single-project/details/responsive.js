const generateResponsive = responsive => {
    const [responsiveName, responsiveIcon] = responsive;
    
    return `
        <h4 class="headline project-details__headline">${responsiveName}</h4>
        <div class="project-details__responsive project-details__result">
            <span class="project-details__responsive-item">
                <svg class="project-details__responsive-icon">
                    <use xlink:href="assets/images/tools.svg#${responsiveIcon}"></use>
                </svg>
            </span>
        </div>
    `
}

export default generateResponsive;