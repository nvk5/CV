import { generateSocials } from './details/socials';
import { generateContactInfo } from './details/info';

export const renderContacts = ({ title, content }) => {
    const { socials, info } = content;

    return `
        <section class="contacts tab-content__section">
            <h2 class="headline tab-content__headline">${title}</h2>
            <div class="contacts__wrap">
                ${generateContactInfo(info)}
                ${generateSocials(socials)}
            </div>
        </section>
    `
}