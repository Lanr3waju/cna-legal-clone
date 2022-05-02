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
  const aboutUs = document.querySelector('#about-us');
  const ourTeam = document.querySelector('#our-team');
  const blog = document.querySelector('#blog');
  const contact = document.querySelector('#contact');
  const home = document.querySelector('#home');

  const toggleElements = handleEventListener(practiceAreasList, 'hidden');
  const borderPracticeArea = handleEventListener(
    dropDownBtn,
    'null',
    'focus:border-2',
    'focus:border-orange-500',
  );
  const borderAboutUs = handleEventListener(
    aboutUs,
    'null',
    'focus:border-2',
    'focus:border-orange-500',
  );
  const borderOurTeam = handleEventListener(
    ourTeam,
    'null',
    'focus:border-2',
    'focus:border-orange-500',
  );
  const borderBlog = handleEventListener(blog, 'null', 'focus:border-2', 'focus:border-orange-500');
  const borderContact = handleEventListener(
    contact,
    'null',
    'focus:border-2',
    'focus:border-orange-500',
  );
  const borderHome = handleEventListener(home, 'null', 'focus:border-2', 'focus:border-orange-500');

  dropDownBtn.addEventListener('click', toggleElements.toggleDomClassList);
  dropDownBtn.addEventListener('click', borderPracticeArea.addDomClassList);
  aboutUs.addEventListener('click', borderAboutUs.addDomClassList);
  ourTeam.addEventListener('click', borderOurTeam.addDomClassList);
  blog.addEventListener('click', borderBlog.addDomClassList);
  contact.addEventListener('click', borderContact.addDomClassList);
  home.addEventListener('click', borderHome.addDomClassList);
};

startApp();
