// 쇼핑 js
const writeBt = document.querySelector('.header-upper__writeBt');
const writeMenu = document.querySelector('.header-upper__lists');

const openWriteMenu = () => {
  writeMenu.classList.add('openWirteMenu');
}

const closeWriteMenu = (event) => {
  if (event.target !== writeMenu && event.target !== writeBt) {
    writeMenu.classList.remove('openWirteMenu');
  }
}

writeBt.addEventListener("click", openWriteMenu);
window.addEventListener("click", closeWriteMenu);

const modalBt = document.querySelector('.searchMenu');
const modalWrap = document.querySelector('.modal__content-wrap');

const openModalMenu = () => {
  modalWrap.classList.add('modal-open');
}

const closeModalMenu = (event) => {
  const modalContent = document.querySelector('.modal__content-container');

  if(modalContent !== event.target && event.target === modalWrap) {
    modalWrap.classList.remove('modal-open');
  }
}

modalBt.addEventListener('click', openModalMenu);
modalWrap.addEventListener('click', closeModalMenu);

const bannerWrap = document.querySelector('.banner-slider');