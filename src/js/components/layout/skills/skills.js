const generateSkill = skills => {
    const template = ({ name, img, description }) => {
        return `
            <li class="skills__item">
                <div class="skills__details">
                    <div class="skills__img">
                        <svg class="skills__img-icon">
                            <use xlink:href="assets/images/tools.svg#${img}"></use>
                        </svg>
                    </div>
                    <div class="skills__text">
                        <h3 class="headline skills__headline">${name}</h3>
                        <p class="skills__description">${description}</p>
                    </div>
                </div>
            </li>
        `
    }

    return skills.map(item => template(item)).join('');
}


export const renderSkills = ({ title, content }) => {
    return `
        <section class="skills tab-content__section">
            <h2 class="headline tab-content__headline">${title}</h2>
            <ul class="skills__list">
                ${generateSkill(content)}
            </ul>
        </section>
    `
}