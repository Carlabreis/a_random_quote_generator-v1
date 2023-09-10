/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



// array of objects to store quotes data
const quotes = [
  {
    quote: "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince"
  },
  {
    quote: "But the conceited man did not hear him. Conceited people never hear anything but praise.",
    source: "Antoine de Saint-Exupéry"
  },
  {
    quote: "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1943"
  },
  {
    quote: `Where are the people?” resumed the little prince at last. “It’s a little lonely in the desert…” “It is lonely when you're among people, too,” said the snake.`,
    source: "Antoine de Saint-Exupéry",
    year: "1943"
  },
  {
    quote: "He was only a fox like a hundred thousand other foxes. But I have made him my friend, and now he is unique in all the world.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1943",
    tags: ["friendship", "love"]
  }
];


// returns a random quote object from array of objects
function getRandomQuote(quotes) {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


//function that gets called when click button
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let htmlString = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}`
      if (randomQuote.citation) {
        htmlString += `<span class="citation">${randomQuote.citation}</span>`
        }
      if (randomQuote.year) {
        htmlString += `<span class="year">${randomQuote.year}</span>`
        }
      if (randomQuote.tags) {
        htmlString += `<span class="year">${randomQuote.tags.join(', ')}</span>`
      }
    `</p>`
  ;

  document.getElementById('quote-box').innerHTML = htmlString;
}


// change background color
// function inspired by https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function changeBkgd() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  
  document.body.style.background = `rgb(${a}, ${b}, ${c})`;
}

// event listener to change background collor on button click
document.getElementById('load-quote').addEventListener("click", changeBkgd, false);

//auto-refresh quotes every 20 seconds
setInterval(() => {printQuote(), changeBkgd()}, 20000);

// event listener to print quote on button click
document.getElementById('load-quote').addEventListener("click", printQuote, false);