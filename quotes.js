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

    `“Plan your work for today and every day, then work your plan.” ― Margaret Thatcher`,

`“Create a definite plan for carrying out your desire and begin at once, whether you ready or not, to put this plan into action.” ― Napoleon Hill`,

`“The reason that everybody likes planning is that nobody has to do anything.” ― Jerry Brown`,

`“Never look back unless you are planning to go that way.” ― Henry David Thoreau`,

`“…everything has a past. Everything – a person, an object, a word, everything. If you don’t know the past, you can’t understand the present and plan properly for the future.” ― Chaim Potok`,

`“A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power.” ― Brian Tracy`,

`“Proper planning and preparation prevents poor performance.” ― Stephen Keague`,

`“Plan your next move because every step contributes towards your goal.” ― Sukant Ratnakar`,

`“Always have a plan, and believe in it. Nothing happens by accident.” ― Chuck Knox`,

`“The reason most people never reach their goals is that they don’t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.” ― Denis Waitley`,

`“Without goals, and plans to reach them, you are like a ship that has set sail with no destination.” ― Fitzhugh Dodson`,

`“I ain’t Martin Luther King. I don’t need a dream. I have a plan.” ― Spike Lee`,

]

function newQuote() {
    const rando = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[rando];

    
};
