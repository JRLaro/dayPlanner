const quotes = [
    `"Plans are nothing; planning is everything." ― Dwight D.Eisenhower`,
    
    `"The more time you spend contemplating what you should have done… you lose valuable time planning what you can and will do."― Lil Wayne`,
    
    `"Don’t worry about planning every step of your life." ― Rick Wagoner`,
    
    `"A man who does not plan long ahead will find trouble at his door." ― Confucius`,
    
    `"Always plan ahead. It wasn’t raining when Noah built the ark." ― Richard Cushing`,
    
    `"Few people have any next, they live from hand to mouth without a plan, and are always at the end of their line." ― Ralph Waldo Emerson`,
    
    `"Every minute you spend in planning saves 10 minutes in execution; this gives you a 1,000 percent return on energy!" ― Brian Tracy`,
    
    `"It takes as much energy to wish as it does to plan." ― Eleanor Roosevelt`,
    
    `"The time to repair the roof is when the sun is shining." ― John F. Kennedy`,

    `“Someone’s sitting in the shade today because someone planted a tree a long time ago.” — Warren Buffett`,

    `“I am prepared for the worst, but hope for the best.” ― Benjamin Disraeli`,

    `“Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.” ― Pablo Picasso`,

`“Setting a goal is not the main thing. It is deciding how you will go about achieving it and staying with that plan.” ― Tom Landry`,

`“Good fortune is what happens when opportunity meets with planning.” ― Thomas Edison`,

`“You can always amend a big plan, but you can never expand a little one. I don’t believe in little plans. I believe in plans big enough to meet a situation which we can’t possibly foresee now.” ― Harry S. Truman`,

`“Just because you make a good plan, doesn’t mean that’s what’s gonna happen.” ― Taylor Swift`,

`“A good plan violently executed now is better than a perfect plan executed next week.” ― George S. Patton`,

`“Unless you have a definite, precise, clearly set goals, you are not going to realize the maximum potential that lies within you.” ― Zig Ziglar`,

`“Before anything else, preparation is the key to success.” ― Alexander Graham Bell`,

`“To achieve great things, two things are needed; a plan, and not quite enough time.” ― Leonard Bernstein`,

`“Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” ― Abraham Lincoln`,

]

function newQuote() {
    const rando = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[rando];

    // $(`#quoteDisplay`).html = quotes[rando];
}
    
console.log(quotes.length);