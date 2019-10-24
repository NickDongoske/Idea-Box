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
      saveBtn.style.cursor = 'default';
    }
}

// Function to add a new idea card
function appendCard() {
  cardContainer.innerHTML += `
        <section class="idea-card">
          <div class="card-top">
            <img class="icon" src="./assets/star-active.svg" alt="Star icon button">
            <img class="icon" src="./assets/delete.svg" alt="Delete card button">
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
