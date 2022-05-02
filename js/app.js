const handleEventListener = (element, domClass, domCl, domCla) => {
  const toggleDomClassList = event => {
    event.preventDefault();
    element.classList.toggle(domClass);
  };

  const addDomClassList = event => {
    event.preventDefault();
    element.classList.add(domCl);
    element.classList.add(domCla);
  };
  return {
    toggleDomClassList,
    addDomClassList,
  };
};

const startApp = () => {
  const practiceAreasList = document.querySelector('#practice-area-list');
  const dropDownBtn = document.querySelector('#drop-down-btn');
  const toggleElements = handleEventListener(practiceAreasList, 'hidden');
  dropDownBtn.addEventListener('click', toggleElements.toggleDomClassList);
};

startApp();
