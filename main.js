// Variables
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('.save-btn');
var cardContainer = document.querySelector('.card-container');
var form = document.querySelector('form');

// EventListeners
window.addEventListener('load', saveDisableToggle);
saveBtn.addEventListener('click', appendCard);
bodyInput.addEventListener('keyup', saveDisableToggle);
titleInput.addEventListener('keyup', saveDisableToggle);
cardContainer.addEventListener('click', cardEventHandler);



// Function to toggle the use of the save button
function saveDisableToggle() {
  if (titleInput.value === '' ||
        bodyInput.value === '') {
      saveBtn.disabled = true;
      saveBtn.style.backgroundColor = '#7a7a7a';
      saveBtn.style.cursor = 'not-allowed';
    } else if (titleInput.value !== '' &&
        bodyInput.value !== '') {
      saveBtn.disabled = false;
      saveBtn.style.backgroundColor = '#1f1f3d';
      saveBtn.style.cursor = 'pointer';
    }
}

// Function to add a new idea card
function appendCard() {
  cardContainer.innerHTML += `
        <section class="idea-card">
          <div class="card-top">
            <button class="icon star-icon" type="button"></button>
            <img class="icon delete-icon" type="button"  src="./assets/delete.svg" alt="Delete card button">
          </div>
          <h2 class="idea-title">${titleInput.value}</h2>
          <p class="idea-body">${bodyInput.value}</p>
          <div class="card-bottom">
            <img class="icon" src="./assets/comment.svg" alt="Add comment button">
            <p class="comment">Comment</p>
          </div>
        </section>`

  form.reset();
  saveDisableToggle();
}

function cardEventHandler(event) {
  if (event.target.classList.contains("delete-icon")) {
    deleteCard();
  }
  if (event.target.classList.contains("star-icon")) {
    toggleFav();
  }
}

function deleteCard() {
  event.target.closest(".idea-card").remove();
}

function toggleFav () {
  event.target.closest(".star-icon").classList.toggle("star-icon-active");
}
