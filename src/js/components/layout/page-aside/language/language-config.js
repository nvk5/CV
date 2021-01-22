import { setRenderConfig } from '../../page';

export const changeLanguage = () => {
    let trigger = document.querySelector('.button--language');

    trigger.addEventListener('click', () => {
        const storageConfig = JSON.parse(localStorage.getItem('config'));
        const getData = storageConfig.lang === 'en' ? import('@dataRu') : import('@dataEn');

        getData.then(({ data }) => setRenderConfig(storageConfig, data))
    });
}