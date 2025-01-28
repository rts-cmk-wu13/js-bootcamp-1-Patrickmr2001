document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Be yourself; everyone else is already taken",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
        "So many books, so little time",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        "A room without books is like a body without a soul",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        "Love like you'll never be hurt",
        "Sing like there's nobody listening",
        "You only live once",
        "In three words I can sum up everything I've learned about life"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const blockquoteElement = document.querySelector("blockquote");
    if (blockquoteElement) {
        blockquoteElement.textContent = `"${randomQuote}"`;
    }
});
