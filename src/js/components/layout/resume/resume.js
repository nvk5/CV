import { generatePersonalInfo } from './details/personal-info';
import { generateEducation } from './details/education';
import { generateSummary } from './details/summary';
import { generateLearningProcess } from './details/learning';
import { generateResumeDownload } from './details/download';

export const renderResume = ({ title, content }) => {
    const resumeFields = Object.entries(content);
    const [personalInfo, , education, summary, learningProcess, download] = resumeFields;

    return `
        <section class="resume tab-content__section">
            <h2 class="headline tab-content__headline">${title}</h2>
            <div class="resume__wrap">
                <div class="resume__aside">
                    <div class="resume__info">
                        <div class="resume__block">
                            ${generatePersonalInfo(personalInfo)}
                        </div>
                        <div class="resume__block">
                            ${generateEducation(education)}
                        </div>
                    </div>
                </div>
                <div class="resume__main">
                    <div class="resume__block">
                        ${generateSummary(summary)}
                    </div>
                    <div class="resume__block">
                        ${generateLearningProcess(learningProcess)}
                    </div>
                    ${generateResumeDownload(download)}
                </div>
                </div>
        </section>
    `
}