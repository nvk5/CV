import { transformCamelCase } from '@utils';

export const generateLearningProcess = learning => {
    const [headline, details] = learning;
    const text = Object.values(details);

    return `
        <h3 class="resume__headline headline">${transformCamelCase(headline)}</h3>
        <p class="learning__text resume__text">${text}</p>
    `
}