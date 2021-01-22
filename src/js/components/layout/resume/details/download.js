import CVEN from '@CVEN';
import CVRU from '@CVRU';

export const generateResumeDownload = download => {
    const [, downloadFields] = download;
    const { label, lang } = downloadFields;
    const href = lang === 'EN' ? CVEN : CVRU;

    return `
        <a target="_blank" class="button button--resume-download" href="${href}">${label}</a>
    `
}