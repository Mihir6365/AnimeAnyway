var inputString = `
The start of turn 15. Most of the classes are lined up closely now. 

First place is the Ichinose Class with 42 points. 

Second place are the Horikita and Sakayanagi classes, both at 40 points. 

Third place is the Ryuen Class with 39 points.

We’ve bottomed out on our savings from the first half. 

We haven’t been pushed out yet, but we will be left behind if this trend continues.

The Ryuen Class helped keep anxiety away at the start, but a dark cloud still looms over the class.

The class was driven into a corner where it could fall to last place at any time, depending on how things go.

“Are you kidding me? Give me a break.”

“I don’t want to be expelled!”

“Me neither, you know!”

The students began to feel the danger after the number of eliminations increased to 4 after 1 more student got eliminated, and started causing a commotion.

In this situation, the others have no time to study either. Horikita pushed her chair and stood up.

She has to start naming her targets now, and she calmly walked past the students making a commotion.

“No need to panic.”

Horikita stood on the teacher’s platform and spoke to her classmates.

“I know we’re in a terrible situation. There are currently 4 eliminations from our class. Ichinose-san took 1st place from us, and Ryuen-kun, who used to be in last place, is catching up extremely fast with consecutive perfect protections. I can no longer say that it’s certain we will win.” 

It’s a different story if she can figure out Ryuen’s strategy and stop his perfect protections, but there’s little hope of that happening. 

There’s also little hope of stopping Ichinose’s high rate of successful protections.

“What we can do now, is to keep fighting until the end.” 

She cannot give a guarantee of victory at this point. 

However, in this special test where classes are competing with each other, the leader has to give some kind of guarantee.

It’s no use to speak in a weak manner, nor is it useful to pointlessly put on airs.

The truth behind her words alone stabbed into the students’ hearts.

Horikita believes they can get through this. That’s what she conveyed to the students.

Yosuke, who would usually follow up after her, is now quietly listening to Horikita’s words.

“Trust me.”

The class has to surpass this with a strong mentality. 

This is the only choice they have.

However, from looking at Horikita, I feel that there is also something else at play here.

Turn 15. The Ichinose Class’s attack.



Defender Successful Protections: Karuizawa Ke, Satou Maya, Miyake Akito



Horikita successfully protected 3 students.

Further, the remaining 2 students answered correctly, giving the class a perfect score.

5 points to let the class breathe again. 

However, the opponent’s persistent consecutive targeting did not cease.

“W-What the hell..!?”

Overwhelmed by fear rather than joy, Kei averted her eyes from the monitor.

Including the students who have a faint grasp on the situation, even the students who don’t know anything started sensing something ominous in the face of this abnormality.

Horikita didn’t seem to be feeling that way after succeeding in her protections, and the next turn came. 

The Ichinose Class’s attack.



Defense Successful Protections: Karuizawa Kei, Nishimura Ryuuko



Two names this time, but Kei’s is also among them.

“Stop… Why…”

Ichinose is continuing to target and attack Karuizawa.

It’s natural to reach the conclusion that she is intentionally trying to expel her while specifically attacking her. 

This move contradicts her image, but she isn’t stopping it.

Turn 17. The Ichinose Class’s attack.



Defense Successful Protections: Karuizawa Kei, Hirata Yosuke



She’s still not stopping.

She won’t stop.

No matter how many times she is blocked.

She will never stop naming her.

“Why does she keep naming me..? Why..?”

Turn 18. The Ichinose Class’s attack.



Defense Successful Protections: Karuizawa Kei, Hasabe Haruka, Onodera Kayano



Turn 19. The Ichinose Class’s attack.



Defense Successful Protections: Karuizawa Kei



Turn 20. The Ichinose Class’s attack.



Defense Successful Protections: Karuizawa Kei, Sudou Ken



10 turns total in the second half.

From the very beginning, Ichinose didn’t stop targeting Kei once.
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
const filename = './public/assets/Year 2 Volume 10/Chapter 6_8.html';

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







