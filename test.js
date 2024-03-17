var inputString = `
It was approximately 8 o'clock in the evening. 

Seated alone in my room, I, Hashimoto, released a heavy sigh. 

“As expected, no communication. She's likely opting to unwind and await the exam.”

I mused to myself. 

Given her track record, the likelihood of her emerging victorious without taking any action wasn't insignificant. 

I estimated it to be around seventy or eighty percent. 

Such odds suggested Sakayanagi would secure first place, or at worst, second. 

However, this alone wouldn't suffice. 

There was a crucial task at hand to ensure our Class A status remained intact.

I mentally prepared myself and dialled Sakayanagi's number. 

It was a battle of wits that awaited, a test of how I would approach the situation.

“It's unusual for you to call at this hour, Hashimoto-kun.” 

Sakayanagi's voice floated through the phone, accompanied by the gentle strains of classical music in the background.

“My apologies for the late call, Hime-san.”

“Don't worry. Please share what's on your mind.”

Her composed demeanour hinted at ample time for conversation.

“Today's tea gathering was enjoyable, but there are matters I must address. Based on my inquiries, it appears the potential risk has been mitigated. I wished to reassure you by providing this report.”

It was a subtle probe, laying the groundwork to gauge her reaction. I opted for a deliberate and measured approach. 

This was precisely why I had rehearsed this scenario numerous times in my mind upon returning home.

“What risk are you referring to?”

This woman consistently feigned ignorance, even when fully aware of the situation. 

While such behaviour might be acceptable when dealing with adversaries, it was disconcerting when directed at allies. 

She preferred to keep potentially uncontrollable information at bay, maintaining control over every aspect on her own terms.

“It should be evident, shouldn't it? The possibility of the three classes uniting to launch an attack on Class A. If they were to collaborate, they could manipulate the majority of points, leaving no chance of victory if fairness were maintained.”

“You appear overly concerned about such a minor matter.”

Was it truly a minor matter to confront all three classes as adversaries? I anxiously attempted to ascertain if such a possibility loomed.

“I am concerned. While it may not trouble you, Hime-san, the prospect of alliances poses a significant threat. It enables them to unleash concentrated attacks on Class A.”

“These three classes are fiercely competing to ascend to Class A. Their primary goal is to amass as many class points as possible in the special exam. It would not be simple for them to unite solely to dismantle Class A.”

I comprehended her perspective. Even if Class A were to rank last, it would merely entail a descent from the top. Ichinose and Ryuen's classes would not reap substantial benefits. Conversely, Ayanokoji and Horikita's class stood to lose if they didn’t secure first place.

“However, if a capable individual lurks in the shadows, poised to orchestrate such a scheme, then the situation changes.”

If Ayanokoji embodied the qualities I believed him to possess, he could undoubtedly execute such a plan.

“I cannot wholly dismiss that possibility. But is that the sole reason for your call?”

She seemed to imply that I was wasting her time.

“No, there's more. In fact, this is the crux of the matter. I aim to contribute to the advancement of our class.”

In the interest of the special exam, I relayed all the intelligence I had amassed thus far to Sakayanagi. 

This included Koenji's agreement with Horikita, which she intended to uphold. 

While I couldn't divulge the specifics, it appeared that Ryuen had established communication with his classmates and was devising some form of strategy. 

I also discussed the prioritization of which students from other classes should be targeted for expulsion, among other details, including obscure ones that might seem trivial to the average person.

“So... this encompasses all the information I've gathered regarding Horikita's class.”

My aim was to convey my enthusiasm, demonstrating my dedication to fortifying Class A.

“You've certainly put in considerable effort to gather this information, Hashimoto-kun.”

My efforts seemed to have been acknowledged, and my passion appeared to resonate through the phone line.

“Naturally. With a rival class amassing a remarkable number of Class Points, my objective is to collect every nugget of information and share it with you, Hime-san. Ideally, I would have done so during the tea gathering.”

“You're quite diligent. Are you pursuing a relationship with Maezono-san for information rather than affection?”

So it had come to this. 

Sakayanagi may not have physical legs, but she possessed numerous metaphorical eyes. 

My open outings with Maezono had been observed on multiple occasions. 

Panicking was not an option; I had to handle this situation with composure.

“Well, that's also part of the plan. When did you become aware?”

“I've noticed an increase in your communication with her recently. The audio data concerning the Ayanokoji 'threat discussion' that you shared with Masumi-san, that was prepared by her, correct?”

“Oh dear. Did Masumi-chan disclose that to you?” 

My heart pounded with anxiety. Had I not prepared for the worst, I would have been petrified.

Even if I were to ask Kamuro, she would likely respond, 

'I was not instructed to keep this from Sakayanagi. However, whether or not I choose to disclose it is my decision.'

“Regardless, I trust you'll find the information beneficial, Hime-san.”

“I appreciate your sincerity. Although I'm uncertain of its utility, I will certainly make use of it.”

“If I heard correctly, it sounds like you're not entirely keen on leveraging this information.”

“I already have a preliminary strategy in place. While I won't rely solely on the information you've gathered, there are aspects of it that I will inevitably incorporate now that I'm aware of it.”

Her demeanour suggested she was less enthusiastic about the information now that it was in her possession.

“Is it unnecessary?”

“Indeed. During the special exam, unexpected developments can add excitement. In a way, you've inadvertently deprived me of some of that excitement.”

She remarked, never failing to amuse me with her unconventional statements. 

She treated the classes as if they were her own domain and showed no inclination to fight for Class A privileges.

‘It's merely a pastime. Please refrain from involving me in such matters’

“So, can you assure me of victory this time?”

“I won't be defeated. You'll see for yourself if you observe from the sidelines.”

Given her assurance and track record, I might have been less anxious. 

However, I had amassed a wealth of information, and Ayanokoji's presence had necessitated significant adjustments to my plans.

“Fine, you're quite confident... I understand. Forget what I mentioned earlier. I'll simply observe, provided no issues arise.”

At that juncture, pressing further seems futile. 

For me, I had expressed all I could during this phone conversation.

“Please do.”

Throughout the call, her voice remained composed, but it seemed she was suppressing her unease. 

Sakayanagi detested assistance; she preferred to rely solely on the information she collected and her own intellect. 

This explained her annoyance at the unexpected provision of information. 

Despite not being the ideal scenario, it felt somewhat refreshing.

“Serves you right.”

While I had taken a few blows, my battle was far from over. 

This was where the true challenge began. 

Compared to the resolve it took to call Sakayanagi, I wasn't sure how much more I would need, but I was determined to execute my winning strategy.
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
const filename = './public/assets/Year 2 Volume 10/Chapter 5_3.html';

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







