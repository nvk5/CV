import { transformCamelCase } from '@utils';

const generateEducationList = list => {
    const template = ({ year, place, department }) => {
        return `
            <li class="resume__info-list-item">
                <p>${year}</p>
                <p>
                    <span class="resume__info-list-field">${place}</span>
                    <span class="resume__info-list-field">(${department})</span>
                </p>
            </li>
        `
    }

    return list.map(item => template(item)).join('');
}

export const generateEducation = education => {
    const [headline, details] = education;

    return `
        <h3 class="resume__headline headline">${transformCamelCase(headline)}</h3>
        <ul class="resume__info-list">
            ${generateEducationList(details)}
        </ul>
    `
}