

var quoteList = ["Less than 5% of the ocean is explored.", "The ocean covers more than 70% of the Earth's surface.", "94% of life on Earth is aquatic.","More historical artifacts are underwater than in all the world's muesums.", "The largest mountain chain on Earth is underwater."];

var quote = document.getElementById
("quote");
var btn = document.getElementById("btn");
var count = 0;
console.log(btn);
console.log(quote);
btn.addEventListener("click", displayQuote);

function displayQuote() {
  console.log("test");
quote.innerHTML = quoteList[count];
count++;
if (count == quoteList.length) {
  count = 0;
}
}

