const messages = [
    //message 0
    {
        time: "Today at 10:10PM",
        text: "what u doing",
        options: {
            one: {
                display: "nothing wbu",
                text: "nothing much what about you",
                nextMessage: 4
            },
            two: {
                text: "...",
                nextMessage: 10
            },
            three: {
                text: "..",
                nextMessage: 6
            }
        }
    },
    //message 1
    {
        text: "oh",
        nextMessage: 3,
    },
    //message 2
    {
        text: "amogus",
        options: {
            one: {
                text: "how u doing",
                nextMessage: 0
            },
            two: {
                text: "you're not funny",
                delay: 2000,
                nextMessage: 9
            },
            three: {
                text: "amogus",
                nextMessage: 15
            }
        }
    },
    //messege 3
    {
        text: "ok",
        ending: 1
    },
    //message 4
    {
        text: "same",
        options: {
            one: {
                text: "going to ask out nagito instead",
                condition: {
                    character: "Nagito",
                    nextMessage: 18
                },
                nextMessage: 5
            },
            two: {
                display: "*ask about undercards*",
                text: "hey have you ever heard about the hit game undercards?",
                nextMessage:20
            },
            three: {
                text: "wow  i'm bored",
                ending: 6
            }
        }
    },
    //message 5
    {
        text: "what",
        delay: 2000,
        nextMessage: 11
    },
    //message 6
    {
        text: "message 6",
        options: {
            one: {
                text: "and ur mom",
                nextMessage: 7
            },
            two: {
                text: "jk you're not real",
                nextMessage: 19
            },
            three: {
                display: "ending",
                text: "ending",
                delay: 3000,
                nextMessage: 8
            }
        }
    },
    //message 7
    {
        text: "😡",
        ending: 3
    },
    //message 8
    {
        text: "omg yes!!",
        ending: 4
    },
    //message 9
    {
        text: ":(",
        ending: 2
    },
    //message 10
    {
        text: "wow ok",
        ending: 1
    },
    //message 11
    {
        person: 'discord',
        text: "nagito's dms",
        delay: 2000,
        nextMessage: 12
    },
    //message 12
    {
        person: "you",
        text: "nagito marry me plz",
        delay: 2000,
        nextMessage: 13
    },
    //message 13
    {
        person: 'Nagito',
        text: "thought you'd never ask",
        ending: 5
    },
    //message 14
    {
        text: "no",
    },
    //message 15
    {
        text: "amogus",
        options: {
            one: {
                text: "how u doing",
                nextMessage: 0
            },
            two: {
                text: "you're not funny",
                delay: 2000,
                nextMessage: 9
            },
            three: {
                text: "amogus",
                nextMessage: 16,
            }
        }
    },
    //message 16
    {
        text: "amogus",
        options: {
            one: {
                text: "amogus",
                nextMessage: 17
            },
            two: {
                text: "you're not funny",
                delay: 2000,
                nextMessage: 9
            },
            three: {
                text: "amogus",
                nextMessage: 17,
            }
        }
    },
    //message 17
    {
        text: "amogus",
        options: {
            one: {
                text: "amogus",
                ending: 0
            },
            two: {
                text: "amogus",
                ending: 0
            },
            three: {
                text: "amogus",
                ending: 0
            }
        }
    },
    //message 18
    {
        text: "I'm Nagito you dumbass",
        delay: 1500,
        ending: 7
    },
    //message 19
    {
        text: "what",
        delay: 1500,
        ending: 8
    },
    //message 20
    {
        text: "undercards? of course i have.",
        nextMessage: 21
    },
    //message 21
    {
        text: "it's an undertale spinoff. apparently it was originally just a fan project that got so popular that toby fox himself helped develop it",
        delay: 2000,
        nextMessage: 22
    },
    //message 22
    {
        text: "now it's a fully fledged card game, like heartstone.",
        options: {
            one: {
                display: "*ask more about the game*",
                text: "can you tell me more about the game",
                nextMessage: 23
            },
            two: {
                text: "you probably suck at it",
                nextMessage: 9
            },
            three: {
                text: "tbh it's a bad game",
                nextMessage: 35
            }
        }
    },
    //message 23
    {
        text: "well, there are different types of card categories in the game. there are monsters, items and spells.",
        nextMessage: 24
    },
    //message 24
    {
        text: "there are a lot of cards there based on undertale and deltarune characters. like asriel, chara and even gaster.",
        options: {
            one: {
                text: "it's a boring game",
                nextMessage: 35
            },
            two: {
                text: "monkey?",
                nextMessage: 25
            },
            three:
            {
                display:"*ask to play undercards*",
                text: "wow that sounds like an awsome game, do you wanna play?",
                nextMessage: 26
            }
        },
    },
    //message 25
    {
        text: "MONKEY. MONKEY. MONKEY.",
        ending: 9
    },
    //message 26
    {
        text: "sure. *game begins*",
        options: {
            one: {
                text: "*plays sans dog*",
                nextMessage: 27
            },
            two: {
                text: "*plays spamton neo*",
                nextMessage: 31

            },
            three: {
                text: "*plays frisk*",
                nextMessage: 28
            }
        }
    },
    //message 27
    {
        text: "*dies* nvm u suck as a human being",
        ending: 10
    },
    //message 28
    {
        text: "ez *plays gaster blaster*",
        options: {
            one: {
                text: "nvm u win",
                nextMessage: 29
            },
            two: {
                text: "*plays toby fox*",
                nextMessage: 30
            }
        }
    },
    //message 29
    {
        text: "gg :)",
        nextMessage: 0
    },
    //message 30
    {
        text: "wtf u r a cheater",
        ending: 11
    },
    //message 31
    {
        person: "OrangeNOrange",
        text: "Congratulations",
        nextMessage: 32
    },
    //message 32
    {
        text: "who tf are you",
        condition: {
            character: "OrangeNOrange",
            nextMessage: 34
        },
        nextMessage: 33
    },
    //message 33
    {
        person: "OrangeNOrange",
        text: "i'm not OrangeNOrange",
        ending: 12
    },
    //message 34
    {
        person: "OrangeNOrange",
        text: "i'm you",
        ending: 13
    },
    //message 35
    {
        text: "well, i guess it might not be your cup of tea.",
        options: {
            one: {
                text: "nah it's a bad game and that's a fact",
                condition: {
                    character: "Papyrus",
                    nextMessage: 37
                },
                nextMessage: 36
            }
        }
    },
    //message 36
    {
        text: "ok shut up before i tell papyrus to throw you to ####",
        options: { 
            one: {
                text: "ok sorry",
                nextMessage: 38
            },
            two: {
                text: "the game is garbage",
                nextMessage: 39
            }
        }
    },
    //message 37
    {
        text: "ok shut up before i throw you to ####",
        options: { 
            one: {
                text: "ok sorry",
                nextMessage: 38
            },
            two: {
                text: "the game is garbage",
                nextMessage: 40
            }
        }
    },
     //message 38
     {
        text: "sorry but it's too late, goodbye.",
        condition: {
            character: "Papyrus",
            nextMessage: 40
        },
        nextMessage: 39
    },
    //message 39
    {
        text: "papyrus please throw this person to ####.",
        nextMessage: 40
    },
    //message 40
    {
        person: "Papyrus",
        text: "NYEH HEH HEH! *throws you*",
        ending: 14
    },
  ]
  
  export default messages;
