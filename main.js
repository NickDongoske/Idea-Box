// Variables
var titleInput = document.querySelector('#input-title');
var bodyInput = document.querySelector('#input-body');
var saveBtn = document.querySelector('.save-btn');
var cardContainer = document.querySelector('.card-container');
var inputContainer = document.querySelector('.input-container');
var form = document.querySelector('form');
var cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
var hamburger = document.querySelector('.hamburger');
var starDiv = document.querySelector('.star-div');

// EventListeners
window.addEventListener('load', saveDisableToggle);
saveBtn.addEventListener('click', addIdea);
bodyInput.addEventListener('keyup', saveDisableToggle);
titleInput.addEventListener('keyup', saveDisableToggle);
cardContainer.addEventListener('click', cardEventHandler);
hamburger.addEventListener('click', openNav);

reinstantiateArray();

// Function to toggle the use of the save button
function saveDisableToggle() {
  if (titleInput.value &&
    bodyInput.value) {
    saveBtn.disabled = false;
    saveBtn.style.backgroundColor = '#1f1f3d';
    saveBtn.style.cursor = 'pointer';
  } else {
    saveBtn.disabled = true;
    saveBtn.style.backgroundColor = '#7a7a7a';
    saveBtn.style.cursor = 'not-allowed';
  }
}

// Function to add a new idea card
function appendCard(idea) {
  cardContainer.innerHTML += `
        <section class="idea-card" data-name=${idea.id}>
          <div class="card-top">
            <button class="icon star-icon" type="button"></button>
            <img class="icon delete-icon" type="button"  src="./assets/delete.svg" alt="Delete card button">
          </div>
          <h2 class="idea-title">${idea.title}</h2>
          <p class="idea-body">${idea.body}</p>
          <div class="card-bottom">
            <img class="icon" src="./assets/comment.svg" alt="Add comment button">
            <p class="comment">Comment</p>
          </div>
        </section>`
  form.reset();
  saveDisableToggle();
}

function addIdea() {
  var idea = new Idea({
    id: Date.now(),
    title: titleInput.value,
    body: bodyInput.value,
    star: false
  });
  cardsArray.push(idea);
  appendCard(idea);
  idea.saveToStorage(cardsArray);
}

function reinstantiateArray() {
  for (var i = 0; i < cardsArray.length; i++) {
    var idea = new Idea({
      id: cardsArray[i].id,
      title: cardsArray[i].title,
      body: cardsArray[i].body,
      star: cardsArray[i].star,
    });
    appendCard(idea);
    if (cardsArray[i].star === true) {
      document.querySelector(`[data-name="${cardsArray[i].id}"]`).firstElementChild.firstElementChild.classList.add("star-icon-active");
    }
  }
}

function cardEventHandler(event) {
  if (event.target.classList.contains("delete-icon")) {
    deleteCard();
  }
  if (event.target.classList.contains("star-icon")) {
    toggleFav();
  }
}

// Function to delete card
function deleteCard() {
  event.target.closest(".idea-card").remove();
  var index = findIndex(event)
  if (cardsArray[index].id = event.target.closest(".idea-card").dataset.name) {
    cardsArray.splice(index, 1);
    localStorage.setItem('cardsArray', JSON.stringify(cardsArray));
  }
}

// Function to toggle starred
function toggleFav() {
  var specificCardTruthy = event.target.closest(".star-icon").classList.toggle("star-icon-active");
  index = findIndex(event);
  cardsArray[index].star = specificCardTruthy;
  localStorage.setItem('cardsArray', JSON.stringify(cardsArray));
}

function findId(event) {
  return parseInt(event.target.closest(".idea-card").dataset.name);
}

function findIndex(event) {
  var id = findId(event);
  for (var i = 0; i < cardsArray.length; i++) {
    if (id === cardsArray[i].id) {
      return parseInt(i);
    }
  }
}

function openNav() {
  hamburger.classList.toggle('toggleX');
  starDiv.classList.toggle('display-initial');
  inputContainer.classList.toggle('opacity');
  cardContainer.classList.toggle('opacity');
}
