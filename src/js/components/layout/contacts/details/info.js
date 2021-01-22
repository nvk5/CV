const generateInfoItem = info => {
    const template = item => {
        const [infoField, infoResult] = item;
        const { href, text } = infoResult;

        return `
            <a class="link contacts__link" href="${href}">
                <span class="contacts__name">${infoField}:</span>
                ${text}
            </a>
        `
    }

    return info.map(item => template(item)).join('');
}

export const generateContactInfo = ({title, content}) => {
    const info = Object.entries(content);

    return `
        <div class="contacts__block">
            <h3 class="contacts__text headline">${title}</h3>
            ${generateInfoItem(info)}
        </div>
    `
}