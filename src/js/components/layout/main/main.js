import { renderNavigation } from '../navigation';
import { renderPortfolio } from '../portfolio';
import { renderSkills } from '../skills';
import { renderResume } from '../resume';
import { renderContacts } from '../contacts';
import { renderSingleProject } from '../single-project';

export const renderMainContent = ({ nav, projects, skills, resume, contacts }) => {
    return `
        <main class="main page__block">
            <div class="container">
                ${renderNavigation(nav)}
                <div class="tab-content">
                    ${renderPortfolio(projects)}
                    ${renderSkills(skills)}
                    ${renderResume(resume)}
                    ${renderContacts(contacts)}
                    ${renderSingleProject()}
                </div>
            </div>
        </main>
    `
}