import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import library from '../assets/library.png';
import axios from "axios";

const bookData = [
    {
            "id": 4,
            "title": "A Man Called Ove",
            "summary": "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door.\r\n\r\nMeet Ove. He's a curmudgeon, the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him the bitter neighbor from hell, but must Ove be bitter just because he doesn't walk around with a smile plastered to his face all the time?\r\n\r\nBehind the cranky exterior there is a story and a sadness. So when one November morning a chatty young couple with two chatty young daughters move in next door and accidentally flatten Ove's mailbox, it is the lead-in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents' association to their very foundations.\r\n\r\n(Previous notes):\r\nLoved this book (translation from Swedish). Quirky story of a curmudgeon which is also a film (with English subtitles) on Netflix. Backman is a successful journalist, author, and blogger. Also enjoyed ‘Britt-Marie Was Here’ and I look forward to checking out his latest new release.",
            "notes": "",
            "author": "Fredrik Backman",
            "created_at": "2026-04-22T22:58:42.290727-04:00",
            "image": "https://assets.hardcover.app/edition/2555790/1b6964d60d0875611a8b0f3d0da728b1729d0516.jpeg"
        },
        {
            "id": 5,
            "title": "Normal People",
            "summary": "At school, Connell is popular and well liked, while Marianne is a loner. But when the two strike up a conversation—awkward but electrifying—something life changing begins.\n\nA year later, they’re both studying at Trinity College in Dublin. Marianne has found her feet in a new social world while Connell hangs at the sidelines, shy and uncertain. Throughout their years at university, Marianne and Connell circle one another, straying toward other people and possibilities but always magnetically, irresistibly drawn back together. And as she veers into self-destruction and he begins to search for meaning elsewhere, each must confront how far they are willing to go to save the other.\n\nNormal People is the story of mutual fascination, friendship, and love. It takes us from that first conversation to the years beyond, in the company of two people who try to stay apart but find that they can’t.\n\n<i>Source: Publisher.</i>",
            "notes": "",
            "author": "Sally Rooney",
            "created_at": "2026-04-22T23:00:17.359956-04:00",
            "image": "https://assets.hardcover.app/editions/30402559/2802629647590855.jpeg"
        },
        {
            "id": 6,
            "title": "Happy Place",
            "summary": "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. Except, now—for reasons they’re still not discussing—they don’t.\n \nThey broke up five months ago. And still haven’t told their best friends.\n \nWhich is how they find themselves sharing a bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blissful week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most.\n \nOnly this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week…in front of those who know you best?",
            "notes": "",
            "author": "Emily Henry",
            "created_at": "2026-04-22T23:00:36.137328-04:00",
            "image": "https://assets.hardcover.app/editions/30477957/2129343502651691.jpg"
        },
        {
            "id": 7,
            "title": "Yellowface",
            "summary": "Authors June Hayward and Athena Liu were supposed to be twin rising stars. But Athena’s a literary darling. June Hayward is literally nobody. Who wants stories about basic white girls, June thinks.\n\nSo when June witnesses Athena’s death in a freak accident, she acts on impulse: she steals Athena’s just-finished masterpiece, an experimental novel about the unsung contributions of Chinese laborers during World War I.\n\nSo what if June edits Athena’s novel and sends it to her agent as her own work? So what if she lets her new publisher rebrand her as Juniper Song—complete with an ambiguously ethnic author photo? Doesn’t this piece of history deserve to be told, whoever the teller? That’s what June claims, and the New York Times bestseller list seems to agree.\n\nBut June can’t get away from Athena’s shadow, and emerging evidence threatens to bring June’s (stolen) success down around her. As June races to protect her secret, she discovers exactly how far she will go to keep what she thinks she deserves.\n\nWith its totally immersive first-person voice, Yellowface grapples with questions of diversity, racism, and cultural appropriation, as well as the terrifying alienation of social media. R.F. Kuang’s novel is timely, razor-sharp, and eminently readable.",
            "notes": "",
            "author": "R.F. Kuang",
            "created_at": "2026-04-22T23:00:55.115878-04:00",
            "image": "https://assets.hardcover.app/editions/30634192/886596728607296.jpg"
        },
        {
            "id": 9,
            "title": "Seven Days in June",
            "summary": "\"Seven Days in June had me laughing out loud and crying with the characters as their hearts are broken and healed. Tia Williams's book is a smart, sexy testament to Black joy, to the well of strength from which women draw, and to tragic romances that mature into second chances. I absolutely loved it.\" --JODI PICOULT, #1 New York Times bestselling author of The Book of Two Ways and Small Great Things Seven days to fall in love, fifteen years to forget, and seven days to get it all back again... Eva Mercy is a single mom and bestselling erotica writer who is feeling pressed from all sides. Shane Hall is a reclusive, enigmatic, award-winning novelist, who, to everyone's surprise, shows up in New York. When Shane and Eva meet unexpectedly at a literary event, sparks fly, raising not only their buried traumas, but the eyebrows of the Black literati. What no one knows is that fifteen years earlier, teenage Eva and Shane spent one crazy, torrid week madly in love. While they may be pretending not to know each other, they can't deny their chemistry--or the fact that they've been secretly writing to each other in their books through the years. Over the next seven days, amidst a steamy Brooklyn summer, Eva and Shane reconnect--but Eva's wary of the man who broke her heart, and wants him out of the city so her life can return to normal. Before Shane disappears though, she needs a few questions answered... With its keen observations of creative life in America today, as well as the joys and complications of being a mother and a daughter, Seven Daysin June is a hilarious, romantic, and sexy-as-hell story of two writers discovering their second chance at love.",
            "notes": "",
            "author": "Tia Williams",
            "created_at": "2026-04-22T23:02:43.666503-04:00",
            "image": "https://assets.hardcover.app/external_data/59523289/1b621150963f5f155b3ac3c6ed343ae947a20334.jpeg"
        },
        {
            "id": 10,
            "title": "A Thousand Splendid Suns",
            "summary": "\"Born a generation apart and with very different ideas about love and family, Mariam and Laila are two women brought jarringly together by war, by loss and by fate. As they endure the ever escalating dangers around them-in their home as well as in the streets of Kabul-they come to form a bond that makes them both sisters and mother-daughter to each other, and that will ultimately alter the course not just of their own lives but of the next generation. With heart-wrenching power and suspense, Hosseini shows how a woman's love for her family can move her to shocking and heroic acts of self-sacrifice, and that in the end it is love, or even the memory of love, that is often the key to survival.\n\nA stunning accomplishment, A Thousand Splendid Suns is a haunting, heartbreaking, compelling story of an unforgiving time, an unlikely friendship, and an indestructible love.\"-- Provided by Amazon",
            "notes": "",
            "author": "Khaled Hosseini",
            "created_at": "2026-04-22T23:04:15.483724-04:00",
            "image": "https://assets.hardcover.app/external_data/24940052/59ad59ca7c66a094a7fe06e7c955f2aa384816a3.jpeg"
        },
        {
            "id": 11,
            "title": "Katabasis",
            "summary": "Dante’s Inferno meets Susanna Clarke’s Piranesi in this all-new dark academia fantasy from R. F. Kuang, the #1 New York Times bestselling author of Babel and Yellowface, in which two graduate students must put aside their rivalry and journey to Hell to save their professor’s soul—perhaps at the cost of their own. \n\nKatabasis, noun, Ancient Greek:\n\nThe story of a hero’s descent to the underworld\n\nAlice Law has only ever had one goal: to become one of the brightest minds in the field of Magick. She has sacrificed everything to make that a reality: her pride, her health, her love life, and most definitely her sanity. All to work with Professor Jacob Grimes at Cambridge, the greatest magician in the world.\n\nThat is, until he dies in a magical accident that could possibly be her fault.\n\nGrimes is now in Hell, and she’s going in after him. Because his recommendation could hold her very future in his now incorporeal hands and even death is not going to stop the pursuit of her dreams….\n\nNor will the fact that her rival, Peter Murdoch, has come to the very same conclusion.\n\nWith nothing but the tales of Orpheus and Dante to guide them, enough chalk to draw the Pentagrams necessary for their spells, and the burning desire to make all the academic trauma mean anything, they set off across Hell to save a man they don’t even like.\n\nBut Hell is not like the storybooks say, Magick isn’t always the answer, and there’s something in Alice and Peter’s past that could forge them into the perfect allies…or lead to their doom.",
            "notes": "",
            "author": "R.F. Kuang",
            "created_at": "2026-04-22T23:04:41.160873-04:00",
            "image": "https://assets.hardcover.app/editions/31147378/6272729711218434.jpg"
        },
        {
            "id": 12,
            "title": "Funny Story",
            "summary": "Daphne always loved the way her fiancé Peter told their story. How they met (on a blustery day), fell in love (over an errant hat), and moved back to his lakeside hometown to begin their life together. He really was good at telling it…right up until the moment he realized he was actually in love with his childhood best friend Petra. \n\nWhich is how Daphne begins her new story: Stranded in beautiful Waning Bay, Michigan, without friends or family but with a dream job as a children’s librarian (that barely pays the bills), and proposing to be roommates with the only person who could possibly understand her predicament: Petra’s ex, Miles Nowak. \n\nScruffy and chaotic—with a penchant for taking solace in the sounds of heart break love ballads —Miles is exactly the opposite of practical, buttoned up Daphne, whose coworkers know so little about her they have a running bet that she’s either FBI or in witness protection. The roommates mainly avoid one another, until one day, while drowning their sorrows, they form a tenuous friendship and a plan. If said plan also involves posting deliberately misleading photos of their summer adventures together, well, who could blame them? \n\nBut it’s all just for show, of course, because there’s no way Daphne would actually start her new chapter by falling in love with her ex-fiancé’s new fiancée’s ex…right?",
            "notes": "",
            "author": "Emily Henry",
            "created_at": "2026-04-22T23:04:55.063222-04:00",
            "image": "https://assets.hardcover.app/edition/31793459/55edc3794a561dd79aebbee7daabd1f98b317ace.jpeg"
        },
        {
            "id": 13,
            "title": "Beach Read",
            "summary": "Augustus Everett is an acclaimed author of literary fiction. January Andrews writes bestselling romance. When she pens a happily ever after, he kills off his entire cast.\n\nThey’re polar opposites.\n\nIn fact, the only thing they have in common is that for the next three months, they’re living in neighboring beach houses, broke, and bogged down with writer’s block.\n\nUntil, one hazy evening, one thing leads to another and they strike a deal designed to force them out of their creative ruts: Augustus will spend the summer writing something happy, and January will pen the next Great American Novel. She’ll take him on field trips worthy of any rom-com montage, and he’ll take her to interview surviving members of a backwoods death cult (obviously). Everyone will finish a book and no-one will fall in love. Really.",
            "notes": "",
            "author": "Emily Henry",
            "created_at": "2026-04-22T23:05:04.724379-04:00",
            "image": "https://assets.hardcover.app/external_data/48576554/6b6d4fef932cec05d39965ea089c8dcaaf74128d.jpeg"
        },
        {
            "id": 14,
            "title": "Anxious People",
            "summary": "An instant #1 New York Times bestseller, the new novel from the author of A Man Called Ove is a “quirky, big-hearted novel….Wry, wise, and often laugh-out-loud funny, it’s a wholly original story that delivers pure pleasure” (People).\n\nLooking at real estate isn’t usually a life-or-death situation, but an apartment open house becomes just that when a failed bank robber bursts in and takes a group of strangers hostage. The captives include a recently retired couple who relentlessly hunt down fixer-uppers to avoid the painful truth that they can’t fix their own marriage. There’s a wealthy bank director who has been too busy to care about anyone else and a young couple who are about to have their first child but can’t seem to agree on anything. Add to the mix an eighty-seven-year-old woman who has lived long enough not to be afraid of someone waving a gun in her face, a flustered but still-ready-to-make-a-deal real estate agent, and a mystery man who has locked himself in the apartment’s only bathroom, and you’ve got the worst group of hostages in the world.\n\nEach of them carries a lifetime of grievances, hurts, secrets, and passions that are ready to boil over. None of them is entirely who they appear to be. And all of them—the bank robber included—desperately crave some sort of rescue. As the authorities and the media surround the premises, these reluctant allies will reveal surprising truths about themselves and set in motion a chain of events so unexpected that even they can hardly explain what happens next.\n\nProving once again that Backman is “a master of writing delightful, insightful, soulful, character-driven narratives” (USA TODAY), Anxious People “captures the messy essence of being human….It’s clever and affecting, as likely to make you laugh out loud as it is to make you cry” (The Washington Post). This “endlessly entertaining mood-booster” (Real Simple) is proof that the enduring power of friendship, forgiveness, and hope can save us—even in the most anxious of times.",
            "notes": "",
            "author": "Fredrik Backman",
            "created_at": "2026-04-22T23:05:23.473557-04:00",
            "image": "https://assets.hardcover.app/edition/30412646/cbddaadebafc2349ebdd39720cece223b1af994b.jpeg"
        },
        {
            "id": 15,
            "title": "The Hunger Games",
            "summary": "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. \n\nSixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before-and survival, for her, is second nature. Without really meaning to, she becomes a contender. \n\nBut if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
            "notes": "",
            "author": "Suzanne Collins",
            "created_at": "2026-04-22T23:05:40.704288-04:00",
            "image": "https://assets.hardcover.app/editions/1589497/2979196565308831-lf%202.jpeg"
        },
        {
            "id": 16,
            "title": "Remarkably Bright Creatures",
            "summary": "After Tova Sullivan's husband died, she began working the night shift at the Sowell Bay Aquarium, mopping floors and tidying up. Keeping busy has always helped her cope, which she's been doing since her eighteen-year-old son, Erik, mysteriously vanished on a boat in Puget Sound over thirty years ago.\n\nTova becomes acquainted with curmudgeonly Marcellus, a giant Pacific octopus living at the aquarium. Marcellus knows more than anyone can imagine but wouldn't dream of lifting one of his eight arms for his human captors--until he forms a remarkable friendship with Tova.\n\nEver the detective, Marcellus deduces what happened the night Tova's son disappeared. And now Marcellus must use every trick his old invertebrate body can muster to unearth the truth for her before it's too late.\n\nShelby Van Pelt's debut novel is a gentle reminder that sometimes taking a hard look at the past can help uncover a future that once felt impossible.",
            "notes": "",
            "author": "Shelby Van Pelt",
            "created_at": "2026-04-22T23:06:53.778584-04:00",
            "image": "https://assets.hardcover.app/edition/30601330/8a533de5-0dc3-4ec5-9fb9-4e7d56fd1d7d.jpg"
        },
        {
            "id": 17,
            "title": "One Day",
            "summary": "It’s 1988 and Dexter Mayhew and Emma Morley have only just met. But after only one day together, they cannot stop thinking about one another. Over twenty years, snapshots of that relationship are revealed on the same day—July 15th—of each year. Dex and Em face squabbles and fights, hopes and missed opportunities, laughter and tears. And as the true meaning of this one crucial day is revealed, they must come to grips with the nature of love and life itself.",
            "notes": "",
            "author": "David Nicholls",
            "created_at": "2026-04-22T23:07:31.603723-04:00",
            "image": "https://assets.hardcover.app/editions/12950826/533575925685685.jpg"
        },
        {
            "id": 18,
            "title": "Spectacular Things",
            "summary": "Mia and Cricket have always been close. The gifted daughters of a young single mother, the “Lowe girls” are well-known in the small Maine town they call home. Each sister has a role to fill: The responsible and academically minded Mia assumes the position of caregiver far too young, while Cricket, a bouncing ball of energy and talent, seems born for soccer stardom. But the cost of achieving athletic greatness comes at a steep price.\n\nAs Mia and Cricket grow up, they must grapple with the legacy of their mother’s secret past while navigating their own precarious future. Can Mia allow herself to fall in love at the risk of repeating a terrible history? Will Cricket’s relentless chase of a lifelong goal drive her sister away? When does loyalty become self-sabotage?\n\nA sharply observed and tender portrait of sisters, love, and ambition, Spectacular Things is a sweeping story about the impossible choices we’re forced to make in pursuit of our dreams.",
            "notes": "",
            "author": "Beck Dorey-Stein",
            "created_at": "2026-04-22T23:08:10.218089-04:00",
            "image": "https://assets.hardcover.app/edition/32130710/2c907652b759f9e2fd9d293b241056f314489989.jpeg"
        },
        {
            "id": 19,
            "title": "The Penelopiad",
            "summary": "In Homer's account in The Odyssey, Penelope—wife of Odysseus and cousin of the beautiful Helen of Troy—is portrayed as the quintessential faithful wife, her story a salutary lesson through the ages. Left alone for twenty years when Odysseus goes off to fight in the Trojan War after the abduction of Helen, Penelope manages, in the face of scandalous rumors, to maintain the kingdom of Ithaca, bring up her wayward son, and keep over a hundred suitors at bay, simultaneously. When Odysseus finally comes home after enduring hardships, overcoming monsters, and sleeping with goddesses, he kills her suitors and—curiously—twelve of her maids.\n\nIn a splendid contemporary twist to the ancient story, Margaret Atwood has chosen to give the telling of it to Penelope and to her twelve hanged maids, asking: \"What led to the hanging of the maids, and what was Penelope really up to?\" In Atwood's dazzling, playful retelling, the story becomes as wise and compassionate as it is haunting, and as wildly entertaining as it is disturbing. With wit and verve, drawing on the story-telling and poetic talent for which she herself is renowned, she gives Penelope new life and reality—and sets out to provide an answer to an ancient mystery.",
            "notes": "",
            "author": "Margaret Atwood",
            "created_at": "2026-04-22T23:08:53.044953-04:00",
            "image": "https://assets.hardcover.app/external_data/60913190/217ec2c5cb7a220e1721ebc67f1175ce6c9069f4.jpeg"
        }
    ];

const Home = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    // Function to fetch todos
    const fetchNovels = async () => {
        try {
            const response = await axios.get("http://localhost:8000/books");
            setBooks(response.data.books); // Update the novels state with fetched data
            console.log(books);
        } catch (error) {
            console.error("There was an error fetching the books:", error);
        }
    };

    fetchNovels();
    }, []);

    return (
        <main>
            <div className="container">
                <img src={library} alt="Library" />
                <ul className="book-list">
                    {books.map((book) => (
                        <li key={book.id}>
                            <button onClick={() => navigate(`/books/${book.id}`)}>
                                <img src={book.image} alt={book.title} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home;