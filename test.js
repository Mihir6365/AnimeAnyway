var inputString = `
I somehow managed to release it in 4 months this time; I’m Kinugasa with a hernia.
I would like to thank you all for your continued support this year. They say a year goes by really fast, and just like that, one of my children is already starting primary school this spring.

I believe that a child’s role in society is to play and have fun to the best of their ability every day at kindergarten or day nurseries, but I can’t believe that it’s already time for mine to start studying and jumping into society… As a parent, I am both excited and worried.

Now, let me finish talking about myself and start talking a little about Youjitsu.

Following the last volume, the story has entered the third semester of the Year-2 arc. After the tough events of the previous volume, I decided to deliver the story in a slightly more relaxed manner this time. And next time, we will finally be moving on to the last special test of the Year-2 arc, final special test arc. As those who already read this volume will understand, I’m planning a story that will have a significant impact on the main characters so far.

And the Youjitsu TV anime’s 3rd season is currently airing. I hope you check it out as well!
Finally… I would like to talk about the hernia in my neck, which I wrote about at the beginning too. I can’t really do anything about it, and my work pace has considerably slowed down because of it. Sometimes the pain even makes it too hard to keep sitting in a chair. If we assume the ratio of my hours used to be 6 hours of work and 4 hours of rest when I was healthy, I managed to compensate for the slowdown by working 9 hours and resting for 1 hour instead. I can’t keep this up forever though, and I think my body has reached its limit… So I’m considering taking a bit of a complete break and concentrating on my recovery. If that happens, it might be inevitable that the release of the next volume may be delayed. I will do my best more than ever before after I recover, so I hope you can be understanding. Naturally, Youjitsu will remain number 1 for me. But, there’s also many other things I want to do too.

So, everyone, here’s hoping for a speedy reunion… See you soon!
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
const filename = './public/assets/Year 2 Volume 11/Afterword.html';

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







