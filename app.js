const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const content = document.querySelector('.content');

function pageSwap() {
  // eslint-disable-next-line no-unused-vars
  let activeBtn;

  sectBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      sectBtn.forEach((b) => {
        b.classList.remove('active-btn');
      });
      this.classList.add('active-btn');
      activeBtn = this;
    });
  });

  content.addEventListener('click', (e) => {
    const { id } = e.target.dataset;
    if (id) {
      Array.prototype.forEach.call(sectBtns, (btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      Array.prototype.forEach.call(sections, (section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

pageSwap();
