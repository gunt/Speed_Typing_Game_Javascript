//Globals with let because it will change
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Variable words array with const (permanent)
// https://dev.to/turnerj/10-tips-for-developers-according-to-twitter-28hm
// Tips for Developers according to Twitter (phrases)
const words = [
    'Talking to people can save you hours of relentless, undirected and ultimately unsatisfying coding. Marcel Gehlen',
    'Write your code pretending someone at 3am needs to debug/fix it in a highly critical state. Simon Rood',
    '"Testing" is not a valid commit message. @juperala',
    'Remember your coworkers and users (and yourself) are human. Extend grace and accept it too. We are all in this together. Hayley Denbraver @hayleydenb',
    'Aim for progress and not perfection. Sid @that_sid',
    'For _most_ people, we are not saving lives, if your site goes down no one is going to die. Breathe and just focus on fixing it Molly Struve @molly_struve',
    'Give meaningful names to variables, methods and classes. Annie Garneau @annishky',
    'Never lose the courage and humility to say “I don’t know.” Your future self, your software, and your teammates will thank you for it. Matt Kahl @mattkahl',
    'Remember that everything is temporary. Technologies, tools, frameworks, and most of all frustration. Laurie @laurieontech',
    'Don’t stress perfection before you understand concepts. I have a bad habbit of freezing and worrying if I’m doing X the most optimized way instead of just getting it done! @bmorrisondev'
]