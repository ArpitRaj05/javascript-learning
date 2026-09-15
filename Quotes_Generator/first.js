const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Do something today that your future self will thank you for.",
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way out is always through.",
    "Everything you can imagine is real.",
    "Stay hungry, stay foolish.",
    "The secret of getting ahead is getting started.",
    "Great things never come from comfort zones.",
    "Your only limit is your mind.",
    "Hard work beats talent when talent doesn't work hard.",
    "Difficult roads often lead to beautiful destinations.",
    "Action is the foundational key to all success.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Start where you are. Use what you have. Do what you can.",
    "Don't let yesterday take up too much of today.",
    "The future depends on what you do today."
];

function generator(){
    let index = Math.floor(Math.random()*quotes.length);
    const element = document.querySelector('h2');
    element.innerHTML = quotes[index];
}

generator();
setInterval(generator,3000);

const root = document.getElementById('root');
root.style.height = "100vh";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
root.style.flexDirection = "column"
