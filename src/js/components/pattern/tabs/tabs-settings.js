import { setTrack, portfolioTrackSettings, mainTrackSettings } from '../track';

const mainTabSettings = {
    tabHeaderSelector: '.nav',
    tabSelector: '.nav__link',
    contentSelector: '.tab-content__section',
    activeClassSelector: '.active',
    display: 'block',
    optionalCb: () => {
        setTrack(mainTrackSettings);
        setTimeout(() => setTrack(portfolioTrackSettings));
    }
}

const portfolioTabSettings = {
    tabHeaderSelector: '.portfolio__tabs',
    tabSelector: '.portfolio__tab-btn',
    contentSelector: '.portfolio__work',
    activeClassSelector: '.active',
    display: 'block',
    optionalCb: () => setTrack(portfolioTrackSettings)
}

export { mainTabSettings, portfolioTabSettings };