const desc = `My biggest joy is roasting almonds while stalking prey.
Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.
Shingle color was not something the couple had ever talked about.
Sometimes you have to just give up and win by cheating.
He had reached the point where he was paranoid about being paranoid.
He watched the dancing piglets with panda bear tummies in the swimming pool.
It took me too long to realize that the ceiling hadn't been painted to look like the sky.
Before he moved to the inner city, he had always believed that security complexes were psychological.
I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.
Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.
The beach was crowded with snow leopards.
The teens wondered what was kept in the red shed on the far edge of the school grounds.
Three years later, the coffin was still full of Jello.
Warm beer on a cold day isn't my idea of fun.
When she didn’t like a guy who was trying to pick her up, she started using sign language.
It's never been my responsibility to glaze the donuts.
The secret ingredient to his wonderful life was crime.
100 years old is such a young age if you happen to be a bristlecone pine.
The rain pelted the windshield as the darkness engulfed us.
Had he known what was going to happen, he would have never stepped into the shower.
My Mum tries to be cool by saying that she likes all the same things that I do.
Despite multiple complications and her near-death experience
Traveling became almost extinct during the pandemic.
You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick.
The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.
They throw cabbage that turns your brain into emotional baggage.
The murder hornet was disappointed by the preconceived ideas people had of him.
I love bacon, beer, birds, and baboons.
We will not allow you to bring your pet armadillo along.
Trash covered the landscape like sprinkles do a birthday cake.
The beauty of the sunset was obscured by the industrial cranes.
They desperately needed another drummer since the current one only knew how to play bongos.
Peanut butter and jelly caused the elderly lady to think about her past.
A song can make or ruin a person’s day if they let it get to them.
She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
She always speaks to him in a loud voice.
The irony of the situation wasn't lost on anyone in the room.
I'll have you know I've written over fifty novels
Beach-combing replaced wine tasting as his new obsession.
He waited for the stop sign to turn to a go sign.
I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste.
The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.
He was sure the Devil created red sparkly glitter.
He is good at eating pickles and telling women about his emotional problems.
A dead duck doesn't fly backward.
The most exciting eureka moment I've had was when I realized that the instructions on food packets were just guidelines.
Eating eggs on Thursday for choir practice was recommended.
Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.
There's no reason a hula hoop can't also be a circus ring.
For some unfathomable reason, the response team didn't consider a lack of milk for my cereal as a proper emergency.`;

const wordArray = desc.split('\n');

export function getRandomSentence() {
	return wordArray[Math.floor(wordArray.length * Math.random())];
}
