//////////////////// LINKS ACTIVE MENU ////////////////////

const links = document.querySelectorAll('.header-menu a');

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active');
  }
}

links.forEach(activeLink);

//////////////////// ACTIVE ITEMS INSURANCE ////////////////////

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}
parameters.forEach(activeProduct);

//////////////////// FAQ ////////////////////

const questions = document.querySelectorAll('.questions button');

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const answer = document.getElementById(controls);

  answer.classList.toggle('active');
  const active = answer.classList.contains('active');
  question.setAttribute('aria-expanded', active);
}

function questionsEvents(question) {
  question.addEventListener('click', activeQuestion);
}

questions.forEach(questionsEvents);

//////////////////// BIKES GALLERY ////////////////////

const gallery = document.querySelectorAll('.bike-images img');
const galleryContainer = document.querySelector('.bike-images');

function changeImg(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 900px)').matches;
  console.log(media);
  if (media) {
    galleryContainer.prepend(img);
  }
}

function galleryEvents(img) {
  img.addEventListener('click', changeImg);
}

gallery.forEach(galleryEvents);

//////////////////// ANIMATION ////////////////////

if (window.SimpleAnime) {
  new SimpleAnime();
}
