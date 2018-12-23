var inquirer = require("inquirer");
var Word = require("./Word.js").Word;
var fs = require('fs');

var dataArr = [];
fs.readFile("12.2018Films.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }

  dataArr = data.split("\r\n");
  console.log(dataArr);
  var index = Math.floor(Math.random() * dataArr.length);
  var word = new Word(dataArr[index]); 

  console.log(index + " " + word.DisplayWord() );
});
