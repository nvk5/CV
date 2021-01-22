import { transformCamelCase } from '@utils';

export const generateSummary = summary => {
    const [headline, details] = summary;
    const text = Object.values(details);

    return `
        <h3 class="resume__headline headline">${transformCamelCase(headline)}</h3>
        <p class="summary__text resume__text">${text}</p>
    `
}