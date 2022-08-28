const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuote(data))
    .catch((error) => console.log(error));
};

const displayQuote = (quote) => {
  console.log(quote);
  const blockquote = document.getElementById("quote");
  blockquote.innerText = quote.quote;
};
