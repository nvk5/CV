const generateNavItems = nav => {
    const template = ({ label, href }) => {
        return `
            <li class="nav__item">
                <a href="#${href}" class="nav__link track-button">${label}</a>
            </li>
        `
    }
    return nav.map(item => template(item)).join('');
}


export const renderNavigation = nav => {
    return `
        <nav class="nav main__nav">
            <span class="track"></span>
            <ul class="nav__list">
                ${generateNavItems(nav)}
            </ul>
        </nav>
    `
}