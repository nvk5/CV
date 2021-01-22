import { removeClassSelectorDot } from '@utils';

export const setModal = (modalSettings, data) => {
    const { parentSelector, targetSelector, overlaySelector, closeBtnSelector, display, optionalCb } = modalSettings;
    const projects = data.pageData.projects;

    const parents = document.querySelectorAll(parentSelector);
    const overlay = document.querySelector(overlaySelector);
    const DURATION = 500; // animation-duration on show / hide css class
    let triggerItem;

    const openModal = event => {
        event.preventDefault();

        const closest = event.target.closest(targetSelector);
        triggerItem = closest;

        if (event.target && closest) {
            optionalCb.apply(null, [closest, projects]);
            overlay.classList.add('show');
            document.body.classList.add('overflowed');
            overlay.style.display = display;
            overlay.tabIndex = '-1';
            overlay.focus();

            setTimeout(() => overlay.classList.remove('show'), DURATION);
        }
    }

    const closeModal = event => {
        const overlaySelectorMod = removeClassSelectorDot(overlaySelector);
        const closeButtonSelectorMod = removeClassSelectorDot(closeBtnSelector);

        if (event.target.classList.contains(overlaySelectorMod) || event.target.classList.contains(closeButtonSelectorMod)) {
            overlay.classList.add('hide');
            document.body.classList.remove('overflowed');
            triggerItem.focus();

            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.classList.remove('hide');
            }, DURATION);
        }
    }

    parents.forEach(item => item.addEventListener('click', openModal));
    document.addEventListener('click', closeModal);
}
