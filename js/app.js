const handleEventListener = (element, domClass, domCl, domCla) => {
  const toggleDomClassList = (event) => {
    event.preventDefault();
    element.classList.toggle(domClass);
  };

  const manipulateDomClassList = (event) => {
    event.preventDefault();
    element.classList.toggle(domCl);
    element.classList.toggle(domCla);
  };
  return {
    toggleDomClassList,
    manipulateDomClassList,
  };
};

const startApp = () => {
  const practiceAreasList = document.querySelector('#practice-area-list');
  const dropDownBtn = document.querySelector('#drop-down-btn');
  const toggleElements = handleEventListener(practiceAreasList, 'hidden');
  const manipulateElements = handleEventListener(
    dropDownBtn,
    'null',
    'border-orange-500',
    'border-transparent',
  );
  dropDownBtn.addEventListener('click', toggleElements.toggleDomClassList);
  dropDownBtn.addEventListener('click', manipulateElements.manipulateDomClassList);
};

startApp();
