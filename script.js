# honey-comb
This is my group final project for kwk: web dev
console.log("hello");
var button = $('.submit-btn');
var listContainer = $('.userinput')

button.on('click', addStory);

function addStory() {
  console.log("hi");
  var textInput = $('.text-input');
  listContainer.append(`
   <p>${textInput.val()}</p><p>Thank you for your feedback!</p>`)
   textInput.val("");
}
