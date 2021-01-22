export const changeColorTheme = () => {
    const trigger = document.querySelectorAll('.color-theme__box');
    const root = document.querySelector(':root');

    const setTheme = color => {
        const pageConfig = JSON.parse(localStorage.getItem('config'));
        localStorage.setItem('config', JSON.stringify({ ...pageConfig, theme: `${color}` }));

        if (color === 'light') {
            trigger.forEach(item => item.checked = true);
            root.classList.add('light')
        } 

        if (color === 'dark') {
            trigger.forEach(item => item.checked = false);
            root.classList.remove('light')
        }
    }


    trigger.forEach(item => item.addEventListener('change', (event) => {
        const theme = event.target.checked ? 'light' : 'dark';

        theme === "light" ? setTheme('light') : setTheme('dark');
    }));
}