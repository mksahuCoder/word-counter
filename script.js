

let textBox = document.getElementById("textBox");

textBox.addEventListener("input", function(){
let text = this.value;
let char = text.length;
document.getElementById("char").innerHTML = char;

text = text.trim();
let newText = text.split(" ");
let cleanList = newText.filter(function(elm){
return elm  != "";
})
document.getElementById("word").innerHTML = cleanList.length;
});

