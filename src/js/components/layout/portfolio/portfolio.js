const generatePortfolioTabs = titles => {
    const template = title => {
        return `<button class="portfolio__tab-btn track-button">${title}</button>`
    }

    return titles.map(item => template(item)).join('');
}

const generatePortfolioTabContent = tabContent => {
    const template = works => {
        return `
            <div class="portfolio__work">
                <ul class="portfolio__list">
                    ${generatePortfolioCards(works)}
                </ul>
            </div>
        `
    }

    return tabContent.map(item => template(item)).join('');
}

const generatePortfolioCards = cards => {
    const template = ({ posterSm, id }) => {
        return `
            <li class="portfolio-card portfolio__list-item">
                <a class="portfolio-card__link link" href="#" data-name=${id}>
                    <figure class="portfolio-card__wrap">
                        <picture>
                            <source type="image/webp" srcset=${posterSm[1]}>
                            <img class="portfolio-card__img img" src=${posterSm[0]} alt=${id}>
                        </picture>
                        <figcaption class="portfolio-card__title">${id}</figcaption>
                    </figure>
                </a>
            </li>
        `
    }

    return cards.map(item => template(item)).join('');
}

export const renderPortfolio = ({ title, content }) => {
    const tabTitles = Object.keys(content);
    const tabContent = Object.values(content);

    return `
        <section class="portfolio tab-content__section">
            <h2 class="headline tab-content__headline">${title}</h2>
            <div class="portfolio__wrap">
                <div class="portfolio__tabs">
                    <span class="track"></span>
                    ${generatePortfolioTabs(tabTitles)}
                </div>
                ${generatePortfolioTabContent(tabContent)}
            </div>
        </section>
    `
}