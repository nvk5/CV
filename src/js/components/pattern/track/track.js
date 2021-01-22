export const setTrack = ({ trackSelector, activeBtnSelector }) => {

    const setTrackParams = () => {
        const track = document.querySelector(trackSelector);
        const activeBtn = document.querySelector(activeBtnSelector);

        const activeBtnWidth = activeBtn.offsetWidth;
        const activeBtnHeight = activeBtn.offsetHeight;
        const activeBtnLeft = activeBtn.offsetLeft;
        const activeBtnTop = activeBtn.offsetTop;

        track.style.width = `${activeBtnWidth}px`;
        track.style.height = `${activeBtnHeight}px`;
        track.style.transform = `translate(${activeBtnLeft}px, ${activeBtnTop}px)`;
    }

    setTrackParams();
    window.addEventListener('resize', setTrackParams);
}

