var inputString = `
Corona, the flu, a fracture, and a hernia in my neck. 

I’m the Kinugasa full of wounds after facing a rush of problems in this year alone. 

I’m still alive and well. I’m Kinugasa.

But the numbness and pain in my back from the hernia is severe and likely to linger, and although I’m happy I was able to write this manuscript before the onset of the hernia, but I don’t think I can guarantee it won’t affect me at all in the future…

I struggle daily when sitting on a chair for an hour at a time is my limit.

Well, it’s no help to talk about such gloomy things, so let’s switch to a brighter subject.

Congratulations to the Hanshin Tigers for winning the league championship after 18 years!!!

Thank you for the inspiration! Thank you for the excitement! Toraho!!! [TL Note - A cheer used by the fans of Hanshin Tigers (baseball team). 'Tora' means 'tiger'. ]

Yes. At least let me say that much. 

It’s okay, right? I mean, it’s been 18 years. 

I bought a lot of stuff, you know. 

A hat and a shirt I wear everywhere. 

That’s okay, right? I mean, it’s been 18 years. 

And this old man also buys seals, stickers and towels.

The afterword will be 1 page this time, so… Sorry, I guess I have no space left to touch on Volume 10’s contents. 

I’ll do my best next time. 

I will not be defeated by the pain in my back..!
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
const filename = './public/assets/Year 2 Volume 10/Afterword.html';

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







