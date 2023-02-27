const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-el");
let firstEl = document.getElementById("first-el");
let secondEl = document.getElementById("second-el");
let lenEl = document.getElementById("len");
let len = 0;


lenEl.addEventListener('input' ,function(){

len = parseFloat(lenEl.value);


});




generateEl.addEventListener("click", function(){
    
    let firstPas = "";
    let secondPas = "";
    
    for(let i = 0; i<len; i++){
        firstPas += characters[Math.floor(Math.random()* characters.length)];
        secondPas += characters[Math.floor(Math.random()* characters.length)]; 
    }
    
    firstEl.textContent = firstPas;
    secondEl.textContent = secondPas;
    
    
    
})

firstEl.addEventListener("click", function() {
    if(firstEl.textContent !== "Generate" ){
    copyToClipboard(firstEl.textContent);
    firstEl.textContent = "Password copied to the clipboard";
}
});

  secondEl.addEventListener("click", function() {
    if(secondEl.textContent !== "Generate"){
    copyToClipboard(secondEl.textContent);
    secondEl.textContent = "Password copied to the clipboard";
  }});

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('Text copied to clipboard');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }



