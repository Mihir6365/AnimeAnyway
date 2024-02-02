var inputString = `
Kei left at 9 p.m after we hung out during the night, and I started preparing for tomorrow. 

The television was left open and playing a variety program, and I stopped for a moment to send a glance towards it.

A man who appears to be around 40 years old is hosting the program while making jokes at the guests and making people laugh.

They showed a remote location with people walking through town. 

The host then walked around the studio while imitating the video, and talked about his impressions for a while.

Then, 5 different pictures were shown on the screen and the crowd started showing surprised reactions while trying to choose which one was a real picture.

“Number 4.”

I said the answer out loud and pointed the remote towards the TV to shut it off without waiting for the reveal. Silence immediately filled the once loud room
Kei loves TV, so she mostly turns it on when we’re together.

I don’t have a strong opposition to television, but after trying out a few genres to check if I could learn anything from them, I found out that variety programs are the genre I like the least. 

I walked to my drawer, and took out my sketchbook and colored pencil set from the second tier.

I purchased it with private points shortly after I first enrolled here, but I never touched it until now. 

Kei looked inside after finding it inside the drawer before, and I remember her strange expression when she found it to be completely empty. 

I spread the sketchbook on the table and opened the silver case of colored pencils.

I reached out to the fresh coloring pencil set, and—

I stopped.

What do I draw? This is as far as it goes when you don’t already have an idea in mind. 

I thought I could just come up with something, but I’m having a difficult time. 

I learned many different skills in the White Room to increase my general knowledge. 

Tracing was one of these skills, and I certainly wasn’t bad at it. 

However, coming up with things to create on your own wasn’t part of the training. 

An empty sketchbook.

I closed the silver case after looking at the sketchbook for a while.

“I guess today is over already.”

I returned the sketchbook and the coloring pencil set to my drawer while muttering to myself. 

Maybe Chabashira-sensei was right when she said the 3rd semester would pass by quickly.
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
const filename = './public/assets/Year 2 Volume 10/Chapter 1_4.html';

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







