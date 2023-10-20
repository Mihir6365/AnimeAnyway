var inputString = `
To put it simply, I don’t trust people.

I have an extremely strong dislike of blindly trusting someone with all my heart.

I never truly trust anyone.

Isn't that right, after all?

People can easily betray.

They plead for your trust, saying ‘It's all okay’, only to betray you. 

The more you believe in them, the greater the shock you feel when they betray you.

Since that’s the case, Isn't it better to betray first before getting betrayed? 

It's more advantageous to live dishonestly and gain than to live honestly and struggle.

This is my ——— “Hashimoto Masayoshi” ’s absolute policy. 

Justice……

Justice, huh…

{TL Note 1 - Hashimoto’s given name - ‘Masayoshi’ can be written using different kanji characters and it means - ‘Justice’}

Every time I say that, I feel disgust for my own name.

That feeling… it doesn't seem to be uncommon these days.

Compared to the people who genuinely hate their own names, my hatred is, well, pretty cute.

I just hate it because of the mismatch between my own thoughts and the name.

My name Masayoshi and ‘Justice’ are completely unrelated.

I understand it logically.

Even so, when people see my name, they tend to associate my personality with something different at first. 

They judge what's in a person by his or her name.

Sorry, but I won't become a Supporter of justice anymore.

From the moment I entered this school, I had already made up my mind.

I'll definitely graduate from ‘Class A’ and will get back at those who betrayed me.

I'll do whatever it takes, no matter how awful, to make that happen.

I'll bring anyone down.

I’ll make anyone resent me.

Even if it's Ryuen or Sakayanagi, and yes, even Ayanokoji.

I won't change no matter who the opponent is.

I act for my sake and for mine alone.
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
const filename = './public/assets/Year 2 Volume 10/Prologue.html';

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







