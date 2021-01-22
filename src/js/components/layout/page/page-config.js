// import { polyfillsInit } from './polyfills';
import { setModal, modalSettings, setTabs, mainTabSettings, portfolioTabSettings } from '../../pattern';
import { polyfillsInit } from '../../../polyfills';
import { changeColorTheme } from '../page-aside/color-theme';
import { changeLanguage } from '../page-aside/language';

export const setPageConfig = data => {
    const { lang } = data;
    document.documentElement.lang = lang;
    
    polyfillsInit();
    changeLanguage();
    changeColorTheme();

    setModal(modalSettings, data);
    setTabs(mainTabSettings);
    setTabs(portfolioTabSettings)
}

