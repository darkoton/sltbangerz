let tabs = () => {
  let nav = document.querySelectorAll('.why-join__tab'),
    result = document.querySelectorAll('.why-join__cards'),
    tabName;

  nav.forEach(item => {
    item.addEventListener('click', selectnav);
  });

  function selectnav() {
    nav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');
    tabName = this.getAttribute('data-tab-name');
    selectresult(tabName);
  }

  function selectresult(tabName) {
    result.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    });
  }
};

tabs();
