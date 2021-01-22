import { renderColorTheme } from './color-theme';
import { renderLanguage } from './language';

export const renderPageAside = lang => {
    return `
        <div class="page__aside">
            ${renderColorTheme()}
            ${renderLanguage(lang)}
        </div>
    `
}