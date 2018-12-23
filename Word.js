var Letter = require("./Letter.js").Letter;

function Word(word){
    this.array = [];
    var letters = word.split("");
    for(var i in letters)
    {
        var letter = new Letter(letters[i]);
        this.array.push(letter);
        if(letters[i] === " ")
        {
            letter.guessed = true;
        }
    }
    
    this.DisplayWord = function(){
        var string = "";
        for(var i = 0; i < this.array.length; ++ i)
        {
            string = string.concat( this.array[i].Display());
            string = string.concat( " " );
        }
        return string;
    }
    this.GuessLetter = function(value){
        for(var i = 0; i < this.array.length; ++ i)
        {
            this.array[i].IsGuessed(value);
        }
    }
}

module.exports.Word = Word;