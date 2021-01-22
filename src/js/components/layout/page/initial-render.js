import { setPageConfig } from './page-config';
import { renderPage } from './page';

const setLang = (storageConfig, data) => {
    localStorage.setItem('config', JSON.stringify({ ...storageConfig, lang: `${data.lang}` }));
}

const setColorTheme = () => {
    const storageConfig = JSON.parse(localStorage.getItem('config'));
    const isDark = !storageConfig.theme || storageConfig.theme === 'dark';
    const trigger = document.querySelectorAll('.color-theme__box');
    const root = document.querySelector(':root');

    if (isDark) {
        trigger.forEach(item => item.checked = false);
        root.classList.remove('light');
        localStorage.setItem('config', JSON.stringify({ ...storageConfig, theme: 'dark' }));
    } else {
        trigger.forEach(item => item.checked = true);
        root.classList.add('light');
        localStorage.setItem('config', JSON.stringify({ ...storageConfig, theme: 'light' }));
    }
}

const setInitialRender = () => {
    const storageConfig = JSON.parse(localStorage.getItem('config')) || {};
    const isEn = !storageConfig.lang || storageConfig.lang === 'en';
    const getData = isEn ? import('@dataEn') : import('@dataRu');

    getData.then(({ data }) => setRenderConfig(storageConfig, data));
}

const setRenderConfig = (storageConfig, data) => {
    setLang(storageConfig, data);

    renderPage(data);
    setPageConfig(data);

    setColorTheme();
}

export { setInitialRender, setRenderConfig };