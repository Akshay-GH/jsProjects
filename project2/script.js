'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // this querySelectorAll gives array of selected elements/tags
console.log(btnOpenModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
  // modal.style.display = 'inline';
  // removing adding and cnanging clases
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keybord event = globsl event

document.addEventListener('keydown', function (e) {
  console.log(e.key); // key is the property to an e object containg all the data about pressed key.
  // console.log(e); // this will give the object of pressed having all its properties

  if (e.key === 'Escape' && !modal.classList.add('hidden')) {
    closeModal();
  }
});
