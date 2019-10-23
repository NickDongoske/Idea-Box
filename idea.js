class Idea {
  constructor(obj) {
    this.id = obj.id || Date();
    this.title = obj.title;
    this.body = obj.body;
    this.star = false;

  }

}

module.exports = Idea;
