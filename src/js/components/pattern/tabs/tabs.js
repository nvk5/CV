/*
    Set index of the active tab at first render
    (if it relates to main tab, else it will be 0)
*/
const mainTabRender = (hashTabSelector) => {
    const hash = location.hash ? location.hash : '#portfolio';
    const activeTab = document.querySelector(`a[href="${hash}"]`);
    const navLinks = document.querySelectorAll('.nav__link');
    const currentLinkIndex = [...navLinks].findIndex(item => item === activeTab);

    return hashTabSelector === '.nav__link' ? currentLinkIndex : 0;
}


export const setTabs = ({ tabHeaderSelector, tabSelector, contentSelector, activeClassSelector, display, optionalCb }) => {
    const header = document.querySelector(tabHeaderSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function removeClassSelectorDot(classSelector) {
        return classSelector.replace(/\./, '');
    }

    const hideTabContent = () => {
        content.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
            item.style.display = 'none'
        });
        tab.forEach(item => item.classList.remove(removeClassSelectorDot(activeClassSelector)));
    }

    const showTabContent = (i = mainTabRender(tabSelector)) => {
        content[i].classList.remove('hide');
        content[i].classList.add('show');
        content[i].style.display = display;
        tab[i].classList.add(removeClassSelectorDot(activeClassSelector));
        optionalCb();
    }

    const setTabs = event => {
        const closest = event.target.closest(tabSelector);

        tab.forEach((item, i) => {
            if (event.target && closest && event.target === item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }

    hideTabContent();
    showTabContent();
    header.addEventListener('click', setTabs);
};