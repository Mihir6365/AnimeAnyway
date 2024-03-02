var inputString = `
Sakayanagi seemed indifferent to the set time and place, whether it was a karaoke box, a secluded dorm room, the special wing, or even behind the gym—there were secret meeting spots everywhere. 

It seemed she didn't mind, as she wasn't one to divulge secrets.

As was our routine, we headed to the bustling cafe in Keyaki Mall today. 

Sakayanagi appeared to be enjoying her leisure time, selecting a popular seat with Kamuro and Kito trailing behind her.

“My apologies, Hime-san. I'm a bit late.”

I said as I took a seat, continuing to address Sakayanagi as 'Hime-san.'

“You seem quite close to her, don't you?”

“Ah, where did you see that?” 

Until last year, I only needed to be wary of Class A students, but as we entered our second year, I had to also be cautious of the underclassmen and others. 

Did I overlook something? 

No, if there were any first-year students in the second-year hall, I should have noticed. 

That meant—had she secretly placed a pawn within the class beforehand? 

Most of the time, it was Kamuro, Kito, or myself, but occasionally Sakayanagi would discreetly contact someone on her phone for information. 

I had inquired about it before, but she never directly disclosed who they were. 

It was possible they were keeping an eye on us.

I decided it wasn't urgent to determine if it was a student within the class, but if this wasn't mere coincidence and they were deliberately monitoring me, that would change things.

“I'm quite shy when it comes to matters of the heart, so let's keep this between us, alright?”

“Hehe, I promise not to breathe a word of it to anyone.”

“So, what's on the agenda for today?”

“You already know without asking, Masumi-chan.”

“Hey. Don't call me by my first name.”

“My apologies, my apologies. It's just a habit.”

“What kind of habit is that? You hardly ever use my first name.”

“In my heart, it's always Masumi-chan.”

“Gross.”

Kamuro vehemently rejected the 'Masumi-chan' nickname, clearly disgusted by it. 

I understood. 

If I were in her shoes, I'd likely find it creepy too. 

However, when playing the fool, such nicknames helped to make an impact.

“So, shall we begin, Hime-san? We're discussing the special exam, right?”

“Special exam? Oh, you're mistaken, Hashimoto-kun. Today is just a simple tea party.” 

Sakayanagi denied my assumption with a laugh. 

I exaggerated my reaction accordingly, almost toppling from my chair.

“If that's the case, there'd be no need to gather the executive members here, Princess.”

“It's for appearances.”

“If the other classes catch wind that Class A is holding a strategy meeting, they'll inevitably share information and heighten their sense of competition. They'll stop at nothing to emerge victorious.”

“What's the point of all this? I don't understand. Can you clarify?” 

I inquired, exasperated by the lack of direction. 

“Is there any benefit to it?”

“There is. It makes the other three classes more focused, doesn't it?”

“...So, it's advantageous?”

It seemed more like a disadvantage than a benefit. 

I'd prefer if they grew complacent, so why were we needlessly raising their tension?

“I want to relish the challenge. Lately, we've been engaging in recreational activities like cultural festivals and school trips.” 

Sakayanagi explained. Even if it lowered our chances of victory or brought disadvantages, she prioritized her own amusement. 

That had been Sakayanagi's modus operandi as class leader all along. 

The class tolerated it because the results were evident. 

We steadily accumulated class points. 

In other words, if that were no longer the case, Sakayanagi's value would plummet instantly. 

I wondered if anyone else foresaw such an uncertain future.

After the so-called 'casual tea party' concluded, I made my way to a restroom near the east entrance. 

I wasn't there for its intended purpose, nor for a meeting. 

It was just an ingrained habit.

Entering the last stall, I locked the door and sat on the toilet seat without pulling down my pants. 

The stalls in Keyaki Mall were always impeccably clean, devoid of any unpleasant odours.

Even if there was a hint of dirtiness or an unusual scent, it wouldn't bother me much. 

The music blaring inside the mall was a tad overwhelming, but I leaned forward, resting my arms on my knees, and closed my eyes. 

This was the spot; the sanctuary to soothe my mind. It was a place to reconnect with my roots. 

In a school where escape routes were limited, it was a precious refuge.

“Even here at ANHS, I find myself visiting the restroom out of habit. Breaking habits is truly challenging.”

For the next 30 minutes or so, I remained there without checking my phone even once.

“Should I head home?”

When I noticed the sink was vacant, I stood up, flushed the toilet, washed my hands, dried them, and exited the bathroom.

“Looks like the long break is over.” 

I muttered to myself.

“You startled me. How long have you been here?” 

Ryuen, who had been leaning against the wall near the entrance, his phone in hand, chuckled softly.

“I was just curious about what you were up to.” he said.

“Give me a break. Tomorrow is the special exam, right? If I were seen with you here, it would raise suspicion. Couldn't you have visited my room or found another way?”

“If you're innocent, then act with confidence.”

“You're asking too much. Keep it brief.”

It was acceptable for me to initiate contact with him, but Ryuen unexpectedly reaching out to me was irritating. 

Especially since with Ryuen, one could never predict where or what he might say. 

However, to grasp the inner workings of the opposing classes, discussions with him were unavoidable. 

It was a turbulent sea, but as long as I could navigate it, I could ride the waves.
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
const filename = './public/assets/Year 2 Volume 10/Chapter 5_1.html';

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







