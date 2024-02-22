var inputString = `
Mii-chan and I arrived at the convenience store promptly. 

As I moved to enter first, Mii-chan gently tugged on my sleeve.

“Could you wait a moment...? It seems there are other students nearby.”

“You want to wait until it's clear?”

“It's unlikely, but the person who assisted me might be here.”

“I understand.”

Her words were cautious, characteristic of Mii-chan. 

It was only right to take them into consideration. 

Although many students frequented the convenience store on weekends, their visits tended to be brief.

After a short wait, the store cleared out in no time.

“Shall we go in?”

“Y-Yes!”

The next customer would undoubtedly arrive if we stayed outside for any longer. We hurried inside the shop.

“Welco—”

The employee, a woman in her twenties whom I had seen frequently lately, paused mid-sentence upon spotting Mii-chan but swiftly resumed with a smile.

“Welcome.”

"Hello. Um, I'm sorry for running away the other day!"

As Mii-chan bowed apologetically, the lady staff responded with a warm smile.

"It's okay, it's okay, I'm not bothered at all. It must have been frightening, right?"

It appeared that she empathized with Mii-chan's inner turmoil, prompting Mii-chan to nod several times.

“Did your boyfriend encouraged you to come here?”

“Eee?”

Mii-chan, looking up, appeared puzzled.

“What a supportive boyfriend. I'm envious.”

“Ee, ee, eeee? My boyfriend?”

“That's Ayanokoji-kun... right?”

“How do you know my name?”

“Well, we use student cards for store transactions, so I ended up remembering the names of some students.”

Certainly, we use a student card, complete with a name and photo, for checkout purposes. 

Given my frequent visits to the store, it wasn't unexpected that they would recognize me.

“Also— weren’t you shopping arm in arm with a different girl the other day...? Uhh!?”

“It looks like you think you are onto something, but you are mistaken. She's just a friend.”

As I gestured towards Mii-chan and clarified, she nodded in agreement.

“Oh, I see. But I thought there might be a chan—”

“No! There isn't!!”

For the first time, Mii-chan strongly denied any romantic involvement.

Despite lacking romantic feelings for her, why did I feel a twinge of disappointment? 

Mii-chan, who harboured feelings for Yousuke, certainly wouldn't want any misunderstandings to arise.

“So, um, about the person I was looking for…”

“Ah, yeah. Should I tell you? Is that okay?”

The store clerk asked kindly, mindful of Mii-chan's emotions.

“Yes, that's why I'm here.”

“I see. In that case, I'll share the information.”

After a moment of preparation, the clerk disclosed the identity of the individual Mii-chan had been seeking.

“The previous shift leader couldn't recall his name, but he was quite memorable. When I heard the description, it clicked. It's someone from your class, Koenji... uh, Rokusuke-kun, I believe. It seems he was the one who purchased the items matching what you brought in.”

“Huh...?”

The name of the gift-giver—a detail she had been eager to uncover. 

Koenji, of all people? 

Why Koenji? 

Mii-chan, beside me, undoubtedly appeared surprised, or rather, astonished. 

It was an unexpected revelation. 

Too unexpected. 

Or perhaps it wasn't as surprising as initially thought? 

While Koenji and Mii-chan had minimal interaction, there were instances when I observed Koenji displaying a somewhat warmer demeanour towards Mii-chan. 

On its own, this might not have seemed significant, but considering the person in question was Koenji...

“Um... Was it really Koenji-kun?”

The clerk responded with unwavering certainty to her inquiry.

“The shift leader described him as a long-haired, blond boy. He always carried himself with an air of superiority, often lost in his own reflection in the convenience store glass or fixing his hair with a hand mirror. And... the list goes on, but this sounds like Koenji-kun, doesn't it? I've witnessed him behaving that way too.”

That was unmistakably Koenji. 

There was no one else like him at our school, not at this moment, and perhaps never.

“There seems to be no mistake.”

“Yeah, even the contents of the gift match Koenji's style. It all adds up now.”

“Yes…”

Although she couldn't fully grasp the situation, she had no choice but to accept it. After thanking the clerk, we exited the convenience store. 

Even after leaving, Mii-chan remained lost in thought, appearing dazed.

“Koenji-kun...? Why?”

“I have no idea. In a way, he's the person whose intentions are the least transparent.”

“What should I do...?”

Is she thinking on how to express her gratitude, or is she uncertain because it's Koenji?

“But maybe you could overlook thanking Koenji?”

“Eh, what!? No, I can't!”

“But why?”

“Well... He's our classmate, and he also spent a significant amount of money on the gifts.”

Despite Koenji likely having a substantial number of Private Points, money was still money. 

Mii-chan, being conscientious, couldn't overlook that.

“I'm considering buying a thank-you gift. Should it be roughly equivalent to the amount spent on the gifts?”

“That seems excessive. I think half would suffice.”

It was ultimately a gesture of goodwill, so as long as the expression of gratitude was sincere, that should suffice.

“O-Okay, I understand. I'll do that.”

“Then all that remains is to ensure you thank him earnestly.”

I was preparing to bid farewell and leave when—

“Would you come with me?”

“Pardon?”

“To... Koenji-kun's place.”

“I am not sure why you want me to go there, Wouldn’t it be weird for me to be there?” 

I do feel like it would be too much for Mii-chan to go alone, but it still feels unnatural.

Besides, I don't understand why Koenji gave the gifts anyway.

“If the example I gave you turns out to be accurate, wouldn't it feel awkward? Even if I'm dating Kei, he might feel something if he sees a guy beside the girl he likes.”

“But we are talking about Koenji, right?”

“Koenji is still just a high school boy... Well not exactly now that I think about it.”

If my presence makes him uncomfortable, then maybe I'm curious to see how it plays out.

“Well then, shall we go together? Depending on the situation, I may leave after meeting Koenji, so please understand.”

It’s possible that he might not like me being with Mii-chan.

“I understand. Please do.”

Mii-chan also understood that she couldn't expect more than that and nodded in agreement.

“When should we do it?”

Asked by me, Mii-chan took out her phone with her right hand and opened the calendar.

Seeming uneasy, she occasionally touched the area near her hair tie with her left hand.

“It's a sudden request, but would tomorrow morning be okay? If we wait too long, I might have trouble sleeping...”

It wouldn’t be good to let her stay awake all night thinking about Koenji.

Although I have plans with Kei tomorrow morning, we should be able to rearrange things.

“Thank you for today. We'll be seeing each other again tomorrow, but for now, please accept my sincere gratitude.”

With that, she bowed deeply. She also told me that she will express her gratitude again once everything was resolved, but I declined, saying it was not necessary.`;
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
const filename = './public/assets/Year 2 Volume 10/Chapter 3_1.html';

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







