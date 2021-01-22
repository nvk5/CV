export const renderLanguage = lang => {
    return `
        <div class="language">
            <button class="button button--language" data-lang="${lang}" aria-label="change language">${lang}</button>
        </div>
    `
}