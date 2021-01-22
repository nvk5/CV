const generateSocialItems = socials => {
    const template = item => {
        const [title, link] = item;
        const {href, icon} = link;

        return `
            <li class="socials__item">
                <a class="button button--socials" href="${href}" target="_blank" rel="nofollow noopener noreferrer" title=${title} aria-label="${title} profile">
                    <svg class="button__icon">
                        <use xlink:href="assets/images/socials.svg#${icon}"></use>
                    </svg>
                </a>
            </li>
        `
    }

    return socials.map(item => template(item)).join('');
}

export const generateSocials = ({ title, content }) => {
    const socials = Object.entries(content);

    return `
        <div class="contacts__block">
            <h3 class="contacts__text headline">${title}</h3>
            <ul class="socials">
                ${generateSocialItems(socials)}
            </ul>
        </div>
    `
}