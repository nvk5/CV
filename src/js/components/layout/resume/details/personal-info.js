import { transformCamelCase } from '@utils';

const generateInfoList = list => {
    const template = item => {
        const [label, value] = item; 

        return `
            <li class="resume__info-list-item">
                <span class="resume__info-list-field">${transformCamelCase(label)}:</span>
                <span class="resume__info-list-field">${value}</span>
            </li>
        `
    }

    return list.map(item => template(item)).join('');
}

export const generatePersonalInfo = info => {
    const [headline, details] = info;

    return `
        <h3 class="resume__headline headline">${transformCamelCase(headline)}</h3>
        <ul class="resume__info-list">
            ${generateInfoList(Object.entries(details))}
        </ul>
    `
}