const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const content = document.querySelector('.content');

function pageSwap() {
  let activeBtn = document.querySelector('.active-btn');

  for (const btn of sectBtn) {
    btn.addEventListener('click', function () {
      for (const b of sectBtn) {
        b.classList.remove('active-btn');
      }
      this.classList.add('active-btn');
      activeBtn = this;
    });
  }

  content.addEventListener('click', (e) => {
    const { id } = e.target.dataset;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

pageSwap();
