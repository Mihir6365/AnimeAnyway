var inputString = `
When I got home after that, I picked up the books I had brought home with my cold hands.

What to read first..? 

I thought about it for a while, but I knew that the book I would be talking about tomorrow in the library would be the one I received. 

So, I decided to start with Hiyori’s present.

The book itself wasn’t old, and seemed to have been released about 15 years ago.

I was curious why Hiyori liked it, so I looked up the author’s history and found that he was just one of many unknown authors. 

He seems to write some interesting works that have a small fan base, but his reputation isn’t very high. 

Perhaps Hiyori managed to find a hidden masterpiece because she is a book lover. 

She even bought the same book again just to keep it with her. 

He still releases a new book every three years or so, it seems. 

I’ll read another one next time if this suits my tastes. 

“Hm..?” 

I noticed there was a piece of paper inside when I was just about to start reading the book.

That in itself is not a big deal, but what caught my attention was the design.

You can sometimes get a free piece of paper as part of a campaign when you shop at Keyaki Mall, and the illustrations or patterns on it change depending on the time of the year. 

The one I picked up had a Christmas image with fir trees and snow. 

It was the one that came with the books I bought at the bookstore before Christmas. 

The fact that it changed right after Christmas suggests this was bought before then. 

It would be a shame if she had to carry it with her everyday since then. 

She said it was only a few days ago out of consideration, but it’s more likely that she purchased it at a date a little further back. 

“I feel like I might have gotten something very heavy.”

Of course, I can’t be too quick to judge. 

She may have simply given it to me as a gift from a book lover.

I’m not going to think too much about it now, but it’s only natural as a human being to feel good if someone approaches you in a sincere manner. 

What can I do for Hiyori, I wonder?

I decided to sit and think about it before reading the book.
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
const filename = './public/assets/Year 2 Volume 9.5/Chapter 5_6.html';

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







