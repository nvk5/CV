import { renderHeader } from '../header';
import { renderMainContent } from '../main';
import { renderPageAside } from '../page-aside';

export const renderPage = ({ lang, pageData }) => {
    const portfolio = document.querySelector('.root');
    
    portfolio.innerHTML = `
        ${renderHeader(pageData)}
        ${renderPageAside(lang)}
        ${renderMainContent(pageData)}
    `
}
