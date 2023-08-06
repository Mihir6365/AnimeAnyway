var inputString = `
It’s really warm right now, isn’t it? This is Kinugasa, of course.

I believe that people sometimes randomly awaken to various hobbies and interests. 

I started cooking a little while ago, and I’ve been increasing my repertoire while making many trial-and-error attempts to cook delicious dishes, and even getting carried away and buying my own kitchen knife, even though my only hobby used to be watching baseball games.

I was impressed that I could get new hobbies even at my age, but then I noticed another change in my hobbies… 

I started buying my child large blocks and stuffed animals as they started growing up, which of course led to more trips to the toy store, and I ended up picking up a pla-rail after getting interested in it. 

I knew nothing about trains, but I thought, ‘Huh? It’s so fun just moving it around’, and ended up buying the toys, buying rails and making original courses, and buying radio-controlled trains… 

I also became interested in mini 4-wheelers, nerf, board games, etc… 

This is bad. 

There’s way too much stuff I like. 

I used to buy toys only for my kid, but before I knew it, I started buying them for myself to play with. 

My favourite toy recently is a toy named Bottle-Man that shoots bottle-caps. I remembered that I used to love a toy called B-Daman, (Bottle-Man’s predecessor?) and started collecting them. 

I used to be a minimalist and never had a habit of collecting things, so I never thought I’d end up like this… I think B-Daman was a lot more interesting, but that’s probably because I’m now an adult.

Personally, I want to get my hands on some LEGO, which is something I really wanted as a kid, but I’m afraid that I’m going to get obsessed with it if I do.

Someone stop me! (Give me a push!)

Okay. I’ll end my personal report with that, and talk a little about my work.

The second term and the winter vacation are finally over, and we’ll be starting the third semester arc from the next volume.

Unlike the second term, which was rather long, the third term will end with the same or just a little fewer number of volumes as the first term arc.

Well then, everyone, take care in the coming hot season not to get heat stroke.

Let’s see each other again when it gets cooler.
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
const filename = './public/assets/Year 2 Volume 9.5/Afterword.html';

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







