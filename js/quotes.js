const quotes = [
    {
        quote: "Don't let anyone rob you of your imagination, your creativity, or your curiosity.",
        author: "Mae Jemison",
    },
    {
        quote: "You learn more from failure than from success. Don’t let it stop you.",
        author: "Unknown",
    },
    {
        quote: "To know how much there is to know is the beginning of learning to live.",
        author: "Dorothy West",
    },
    {
        quote: "We don’t just sit around and wait for other people. We just make, and we do.",
        author: "Arlan Hamilton",
    },
    {
        quote: "Do not wait for the perfect time and place to enter, for you are already onstage.",
        author: "Unknown",
    },
    {
        quote: "Worry is a misuse of imagination.",
        author: "Unknown",
    },
    {
        quote: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan",
    },
    {
        quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
        author: "Ariana Huffington",
    },
    {
        quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall",
    },
    {
        quote: "A surplus of effort could overcome a deficit of confidence.",
        author: "Sonia Sotomayor",
    },
    {
        quote: "No one changes the world who isn’t obsessed.",
        author: "Billie Jean King",
    },
    {
        quote: "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
        author: "Mia Hamm",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
