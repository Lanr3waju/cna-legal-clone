const handleEventListener = (element, domClass) => {
    const toggleHeaderDropdown = event => {
        event.preventDefault();
        element.classList.toggle(domClass);
    };
    return {
        toggleHeaderDropdown
    }
};

const startApp = () => {
    const practiceAreasList = document.querySelector('#practice-area-list');
    const dropDownBtn = document.querySelector('#drop-down-btn');

    const body = document.querySelector('body');
    const toggleElements = handleEventListener(practiceAreasList, 'hidden');

    dropDownBtn.addEventListener('click', toggleElements.toggleHeaderDropdown)
}

startApp();