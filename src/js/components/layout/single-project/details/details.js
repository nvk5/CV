import generateBrowsers from './browsers';
import generateLighthouse from './lighthouse';
import generatePageSpeed from './pagespeed';
import generateResponsive from './responsive';
import generateValidation from './validation';
import generateTechs from './techs';

const generateDetailsItem = item => {
    const [name] = item;

    switch (name) {
        case 'Applied techonologies':
        case 'Используемые технологии':
            return generateTechs(item);
        case 'Browsers support':
        case 'Поддержка браузеров':
            return generateBrowsers(item);
        case 'Lighthouse tool':
        case 'Инструмент Lighthouse':
            return generateLighthouse(item);
        case 'Page speed':
        case 'Скорость загрузки':
            return generatePageSpeed(item);
        case 'Responsive':
        case 'Адаптивность':
            return generateResponsive(item);
        case 'Validation':
        case 'Валидность':
            return generateValidation(item);
    }
}

export const generateProjectDetails = details => {
    const projectDetailsData = Object.entries(details);
    const template = detail => `<li class="project-details__item">${generateDetailsItem(detail)}</li>`;

    return projectDetailsData.map(item => template(item)).join('');
}