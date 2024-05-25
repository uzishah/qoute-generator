
let qoute = document.getElementById("qoute")
const author = document.getElementById("author");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let generate = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerHTML = item.content;
            author.innerHTML = item.author;
        })
        .catch((error) => console.error('Error:', error));
};

window.addEventListener('load', generate);
