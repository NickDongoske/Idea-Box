class Idea {
  constructor(idea) {
    this.id = idea.id || Date();
    this.title = idea.title;
    this.body = idea.body;
    this.star = false;

  }
  saveToStorage(Idea) {
    var stringifiedObj = JSON.stringify(Idea);
    localStorage.setItem("cardsArray", stringifiedObj );
  }
}

// module.exports = Idea;
