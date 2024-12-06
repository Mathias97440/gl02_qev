let File = function () {
    this.comments = [];
    this.questions = [];
    this.instructions = [];
}
let Question = function () {
    this.header = "";
    this.body = [];
    this.format = "";
    this.type = "";

}
let Answers = function () {
    this.type = "Answers";
    this.list = [];
    this.text = "";
}

let Answer = function (correct, text, feedback) {
    this.correct = correct;
    this.text = text;
    this.feedback = feedback;
}


module.exports = {File, Question, Answer, Answers};