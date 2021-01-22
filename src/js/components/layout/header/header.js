const generateHeader = ({ content: { shortInfo } }) => {
    const { name, job } = shortInfo;

    return `
        <header class="header page__block page__block--header">
            <div class="container header__container">
                <a href="#" class="logo link header__logo">
                    <h1 class="headline logo__title">${name}</h1>
                    <p class="logo__subtitle">${job}</p>
                </a>
                <a class="button button--header" href="https://github.com/nvk5" target="_blank" rel="nofollow noopener noreferrer" aria-label="github profile">
                    <svg class="button__icon">
                        <use xlink:href="assets/images/socials.svg#github"></use>
                    </svg>
                </a>
            </div>
        </header>
    `
}

export const renderHeader = ({resume}) => generateHeader(resume);