// _
// | | ____ _ _ __  _   _  ___
// | |/ / _` | '_ \| | | |/ _ \
// |   < (_| | | | | |_| |  __/
// |_|\_\__,_|_| |_|\__, |\___|
//                  |___/


const iconElement = document.querySelector('.kanyeIcon');
const descElement = document.querySelector(
  '.quote p'
);

// App data
const kanyequote = {};

getQuote();

//Get the quote
function getQuote() {
  let api = 'https://api.kanye.rest'
  console.log(api);
  //  second option -   
  //   'https://geek-jokes.sameerkumar.website/api?format=json'

  
  fetch(api)
    .then(function (response) {
      let data = response.json();
      
      return data;
    })
    .then(function (data) {
      kanyequote.description = data.quote + " - Kanye";
    })
    .then(function () {
      displayQuote();
    });
}


// {
//   fetch('https://animechan.vercel.app/api/random')
//     .then(response => response.json())
//     // .then(quote => console.log(quote))
//     weather.description = quote + " - " + response.character + " (" + response.anime + ")"
// }

// Display quote
function displayQuote() {
    descElement.innerHTML = kanyequote.description;
}
