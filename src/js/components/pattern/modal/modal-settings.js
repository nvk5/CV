import { generateSingleProject } from '../../layout/single-project';

export const modalSettings = {
    parentSelector: '.portfolio__work',
    targetSelector: '.portfolio-card__link',
    overlaySelector: '.single-project',
    closeBtnSelector: '.single-project__close',
    display: 'block',
    optionalCb: generateSingleProject
}