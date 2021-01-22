import { expandArray } from '@utils';
import { renderColorTheme } from '../page-aside/color-theme';
import { generateProjectDetails } from './details';


const generateSingleProject = (currentProject, data) => {
    const { content } = data;
    const allProjects = expandArray(Object.values(content));
    const currentDataItem = allProjects.find(({ id }) => id === currentProject.dataset.name);
    const { poster, id, description, details, code, view } = currentDataItem;
    const wrap = document.querySelector('.single-project__content-wrap');

    wrap.innerHTML = `
        <figure class="single-project__content">
            <picture class="single-project__image">
                <source type="image/webp" srcset="${poster[1]}">
                <img class="img" src="${poster[0]}" alt="${id}">
            </picture>
            <div class="single-project__buttons">
                <a href="${code}" id="code" class="button button--single-project"
                    target="_blank" rel="nofollow noopener noreferrer">Code</a>
                <a href="${view}" id="view" class="button button--single-project"
                    target="_blank" rel="nofollow noopener noreferrer">View</a>
            </div>
            <figcaption class="single-project__block">
                <h3 class="headline single-project__headline">${id}</h3>
                <p class="single-project__description">${description}</p>
                    <ul class="project-details">
                        ${generateProjectDetails(details)}
                    </ul>
            </figcaption>
        </figure>
    `
}


const renderSingleProject = () => {
    return `
        <div class="single-project">
            <div class="container single-project__container">
                <section class="single-project__section">
                    <h2 class="headline visually-hidden">Single work</h2>
                    <div class="single-project__header">
                        ${renderColorTheme()}
                        <button class="single-project__close button" aria-label="close project info">&times;</button>
                    </div>
                    <div class="single-project__content-wrap"></div>
                </section>
            </div>
        </div>
    `
}

export { generateSingleProject, renderSingleProject };