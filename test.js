var inputString = `
Sakayanagi smiled quietly by herself after Ayanokouji left. 

“The other day, on the closing ceremony of the second term, we chatted with the three of us with Ichinose-san, didn’t we?” 

A few muttered words, drowned out by the wind.

“I’m in a position to teach her. That’s what I always thought, but I learned that it wasn’t so.” 

It’s the moment Sakayanagi completely woke up to her own love.

Sakayanagi continued talking to herself in the lonely, snowy night.

“I recognize you as a foe that I must defeat.” 

This is the real, undeniable truth.

“Someone like me, a proud genius from birth, isn’t going to lose to a genius that was manufactured.” 

This is her ideology.

“However, aside from my perception that I should defeat you, another one was born. You noticed it, didn’t you?” 

Ayanokouji’s back, now disappeared from her sight.

Delivering with a voice that won’t be delivered.

She put it into words once again.

“I love you.”

Ichinose, who was like a piece of trash lying on the side of the road to Sakayanagi, made her realize this.

“If I conveyed my thoughts more clearly, I probably couldn’t make you change your expression a little.” 

This is the only reason she did not use stronger words face-to-face.

Be that as it may, she is not afraid of acceptance or nonacceptance.

“Yes. That is the kind of person you are, Ayanokouji-kun. You are not the kind of person who would be disturbed by something this trivial.”

Normally, a young lady would be hurt and distressed by something like this.

However, Sakayanagi is the opposite.

In fact, she strongly realizes that this is precisely why she is drawn to Ayanokouji.

“You treat everyone in this school, including me, like children. You think everything is going to go as you wish, and I’m sure you’ve made it so that it has.”

She took a step on the snowy road.

She understands Ayanokouji’s plans in concrete terms.

The composition he will envision in Year Three.

It wouldn’t be interesting to let things progress as he wants. 

In which case, she already knows the answer as to how to disrupt his plans. 

She wants to hinder him.

She wants to see worry on his face.

She wants to confront him with the fact that some things are beyond his control.

“It’s a shame. Your plan has already started deviating from its course back at the Uninhabited Island Test that summer.” 

She really wanted to let him know that, but it’s still a secret.

It’s the not knowing, not being able to tell what’s going to happen, that makes the future interesting.

“I promise that this fact will be the first step in changing you in a direction you never thought possible.” 

Sakayanagi is looking forward to seeing what decisions he will make in the future.

“I’m really looking forward to the third semester…”

`;
var fs = require("fs");
function appendParagraphTags(str) {
    var regex = /[.;:?!)\]”"']\s*\n/g;
    var replacement = `</p><p>`;
    // var replacement = `</p><p class="italic center">`;

    var result = str.replace(regex, function (match) {
        return match + replacement;
    });

    return result;
}

var modifiedString = `<p>` + appendParagraphTags(inputString) + "</p> \n </div>";
// var modifiedString = `<p class="center italic">` + appendParagraphTags(inputString) + "</p> \n </div>";
const filename = './public/assets/Year 2 Volume 9.5/Chapter 3_6.html';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }
    const lines = data.split('\n');
    lines.pop();
    const updatedContent = lines.join('\n');
    fs.writeFile(filename, updatedContent + modifiedString, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
            return;
        }
        console.log(`Successfully added to file.`);
    });
});







