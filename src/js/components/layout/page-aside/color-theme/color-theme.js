export const renderColorTheme = () => {
    return `
        <div class="color-theme">
            <svg class="color-theme__icon">
                <use xlink:href="assets/images/color-theme.svg#dark"></use>
            </svg>
            <input type="checkbox" class="color-theme__box" aria-label="change color theme">
            <svg class="color-theme__icon">
                <use xlink:href="assets/images/color-theme.svg#light"></use>
            </svg>
        </div>
    `
}