
function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.Display = function(){
        if(this.guessed){
            return this.letter;
        }
        else{
            return "_";
        }
    }
    this.IsGuessed = function(value){
        if(value === this.letter)
        {
            this.guessed = true;
        }
    }
    
}

module.exports.Letter = Letter;