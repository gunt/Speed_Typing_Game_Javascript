window.addEventListener('load', init);

//Globals with let because it will change

// Available Levels game
const levels = {
    easy: 9,
    medium: 3,
    hard: 1
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const chooseLevel = document.querySelector('#chooseLevel');

//Variable words array with const (permanent)
// https://dev.to/turnerj/10-tips-for-developers-according-to-twitter-28hm
// Tips for Developers according to Twitter (phrases)  // To implement with phrases
// const words = [
//     'Talking to people can save you hours of relentless, undirected and ultimately unsatisfying coding. Marcel Gehlen',
//     'Write your code pretending someone at 3am needs to debug/fix it in a highly critical state. Simon Rood',
//     '"Testing" is not a valid commit message. @juperala / Aim for progress and not perfection. Sid @that_sid',
//     'Remember your coworkers and users (and yourself) are human. Extend grace and accept it too. We are all in this together. Hayley Denbraver @hayleydenb',
//     'For _most_ people, we are not saving lives, if your site goes down no one is going to die. Breathe and just focus on fixing it Molly Struve @molly_struve',
//     'Give meaningful names to variables, methods and classes. Annie Garneau @annishky',
//     'Never lose the courage and humility to say “I don’t know.” Your future self, your software, and your teammates will thank you for it. Matt Kahl @mattkahl',
//     'Remember that everything is temporary. Technologies, tools, frameworks, and most of all frustration. Laurie @laurieontech',
//     'Don’t stress perfection before you understand concepts. I have a bad habbit of freezing and worrying if I’m doing X the most optimized way instead of just getting it done! @bmorrisondev',
//     'Always sleep well, never compromise @faizanakram99 / First, make it work. Then, make it right. Finally, make it fast. Thomas K Nilsson @thomanil',
//     'It’s s alright to read the docs, even if you are an experienced developer. Treat them as they’re your best friends! Matheus Abreu @matheusabr',
// ];

const words = [
    'blessings',
    'river',
    'good',
    'statue',
    'generate',
    'stubborn',
    'food',
    'warrior',
    'Luke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'typing',
    'echo',
    'siblings',
    'investigate',
    'awesome',
    'healthy',
    'laughter',
    'St. Joseph',
    'master',
    'space',
    'definition'
];

// Initialize Game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);

    // Start matching on word count  
    //>>> Whenever we type something in here we want to fire off an event
    //which will fire off a function
    wordInput.addEventListener('input', startMatch)


    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status 
    setInterval(checkStatus, 50);
}

// function chooseLevel() {
//     chooseLevel.innerHTML
// }


// Start match // a function that match the random word to what the user type in 
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = ' Game Over!!!';
        score = -1;
    }
}