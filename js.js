

var state;
var activity;
var weapon;
var destination;
var audio;
var scripts = [];

$(".storyBoard").html("");


$(document).ready(function () {
   state = "cover";
   checkState();
   loadScript();



});

//state checking
function checkState() {
    if(state == "cover"){
        printCover();
    }else if(state = "intro"){
        printIntro();
    }
}

//Btn Method
//Intro
// $("#startBtn").click(function() {
//
// });

function startBtn(currentState) {
    state = currentState;
    checkState();
}

//Print passage methods
function printCover() {
    $('.storyBoard').html("<div class='title' style='text-align: center; line-height: 400px'>" + "<h2>Unexpected Consequence</h2>" + "</div>");
    $('.interaction').html("<h2 class='btn' id='intro' onclick='printPassage(this.id)'>" + "Start" + "</h2>");
}

function printPassage(currentState) {

    if(audio!=null){
        audio.pause();
    }

    var getScripts = browserScripts(currentState);
    console.log(getScripts);
    checkVariable(getScripts);

    if(getScripts.scriptName == "ThrowAirplane"){
        console.log(getScripts.image + " : " + getScripts);
    }

    formattingContent(getScripts.content);

    formattingOptions(getScripts.options);

    formattingImage(getScripts);

    if(getScripts.canvas!=null && getScripts.canvas != ""){
        let x = 800;
        let y = 450;
        if(getScripts.canvas == "radio"){

            audio = new Audio('Assets/radioMusic.mp3');
            audio.play();
            $(".storyBoard").append("<div class='interactiveCanvas' id='radio'></div>");
            let radioSketch = function (p) {
                let radioImage;
                let song;

                p.setup = function () {
                    p.createCanvas(x, y);
                    radioImage = p.loadImage('Assets/radio.png');
                };

                p.draw = function () {
                    p.fill(0);
                    p.image(radioImage, (p.width-radioImage.width/3)/2, (p.height-radioImage.height/3)/2,radioImage.width / 3, radioImage.height / 3);
                };
            }

            let myp5 = new p5(radioSketch,'radio');

        }else if(getScripts.canvas == "book"){
            $(".storyBoard").append("<div class='interactiveCanvas' id='sleepybook'></div>");

            let bookSketch = function (p) {
                let bookImage;
                p.setup = function () {
                    p.createCanvas(x, y);
                    bookImage = p.loadImage('Assets/book.png');
                };

                p.draw = function () {
                    p.fill(0);
                    p.image(bookImage, (p.width-bookImage.width/6)/2, (p.height-bookImage.height/6)/2,bookImage.width / 6, bookImage.height / 6)
                };
            }

            let myp5 = new p5(bookSketch,'sleepybook');

        }else if(getScripts.canvas == "sleepybook"){
            $(".storyBoard").append("<div class='interactiveCanvas' id='book'></div>");

            let bookSketch = function (p) {
                let bookImage;
                p.setup = function () {
                    p.createCanvas(x, y);
                    bookImage = p.loadImage('Assets/bookblurry.png');
                };

                p.draw = function () {
                    p.fill(0);
                    p.image(bookImage, (p.width-bookImage.width/6)/2, (p.height-bookImage.height/6)/2,bookImage.width / 6, bookImage.height / 6)
                };
            }

            let myp5 = new p5(bookSketch,'book');

        }else if(getScripts.canvas == "TV"){

            audio = new Audio('Assets/tvNewsAudio.m4a');
            audio.play();
            $(".storyBoard").append("<div class='interactiveCanvas' id='tv'></div>");
            let tvSketch = function (p) {
                let radioImage;
                let song;

                p.setup = function () {
                    p.createCanvas(x, y);
                    radioImage = p.loadImage('Assets/tvNews.jpg');
                };

                p.draw = function () {
                    p.fill(0);
                    p.image(radioImage, (p.width-radioImage.width/2)/2, (p.height-radioImage.height/2)/2,radioImage.width / 2, radioImage.height / 2);
                };
            }

            let myp5 = new p5(tvSketch,'tv');

        }else if(getScripts.canvas == "window"){
            $(".interaction").html("");
            $(".storyBoard").append("<div class='interactiveCanvas' id='window'></div>");
            let windowSketch = function (p) {
                var img;
                var buildingImg;
                var streetImg;
                var faceTextImg;
                var handsTextImg;
                var sfumato;
                var x, y;
                var rot;
                var alpha;
                var ifClick = false;
                var alphaUp;
                var alphaDown;
                var alphaIntro;
                var alphaText;
                var d1;
                var d2;
                var fd1;
                var fd2;
                var r;
                var cvn;

                p.setup = function() {
                    cvn = p.createCanvas(800,450);
                    p.alphaUp = 100;
                    p.alphaDown = 100;
                    p.alphaText = 0;
                    p.alphaIntro = 0;
                    p.r=1;

                    p.img = p.loadImage("Assets/window-01.png");
                    buildingImg = p.loadImage("Assets/lookAt-02.png");
                    streetImg = p.loadImage("Assets/lookAt-03.png");


                    // p.sfumato = p.loadImage("iconography/sfumato.jpg");
                    // p.img.resize(0,p.height);
                    // p.image(p.img,(p.width-p.img.width)/2,0);
                    // p.fill(235,235,235,255);
                };

                p.draw = function() {
                    p.cursor('Assets/cursorEye.cur');
                    p.img.resize(0,p.height);
                    p.image(p.img,(p.width-p.img.width)/2,0);
                    p.fill(0);
                    p.stroke(0);
                    //stroke(246,155,95);
                    p.background(0);
                    p.image(p.img,(p.width-p.img.width)/2,0);


                    p.drawTags()
                    p.drawIntro()

                };

                p.drawIntro = function () {
                    p.cacD();
                    if(p.d1 <= 10){
                        // p.filter(BLUR,10);
                        p.image(buildingImg,175,115,buildingImg.width/3,buildingImg.height/3);
                        if(p.ifClick){
                            printPassage("Opposite building");
                        }
                    }else if(p.d2 <= 10){
                        // p.filter(BLUR,10);
                        p.image(streetImg,380,290,streetImg.width/3,streetImg.height/3);
                        if(p.ifClick){
                            printPassage("Street");
                        }
                    }
                };

                p.cacD = function () {
                    p.d1 = p.sqrt(p.sq(p.mouseX - 150)+p.sq(p.mouseY-100));
                    p.fd1 = p.sqrt(p.sq(p.width-150)+p.sq(p.height-100));
                    p.d2 = p.sqrt(p.sq(p.mouseX - 375)+p.sq(p.mouseY-395));
                    p.fd2 = p.sqrt(p.sq(p.width-375)+p.sq(p.height-395));
                };

                p.drawTags = function () {
                    p.cacD();
                    //===========================for upper point
                    p.alphaUp = p.map(p.d1,0,p.fd1/2,255,0);
                    p.r = p.map(p.d1,0,p.fd1/2,30,1);

                    p.stroke(255, 234, 43,p.alphaUp);
                    p.strokeWeight(5);
                    p.line(p.mouseX,p.mouseY,150,100);
                    p.strokeWeight(3);
                    p.fill(0,0,0,0);
                    //filter(BLUR,6);
                    p.stroke(105,242,242,p.alphaUp);
                    p.ellipse(150,100,p.r,p.r);

                    //===========================for lower point
                    p.alphaDown = p.map(p.d2,0,p.fd2/2,255,0);
                    p.r = p.map(p.d2,0,p.fd2/2,30,1);
                    p.stroke(255, 234, 43,p.alphaDown);
                    p.strokeWeight(5);
                    p.line(p.mouseX,p.mouseY,375,395);
                    p.strokeWeight(3);
                    p.fill(0,0,0,0);
                    p.stroke(105,242,242,p.alphaDown);
                    p.ellipse(375,395,p.r,p.r);
                }

                p.mousePressed = function () {
                    if(p.ifClick){
                        p.ifClick = false;
                    }else{
                        p.ifClick = true;
                    }
                }
            }

            let myp5 = new p5(windowSketch,'window');
        } else if(getScripts.canvas == "airplane"){

            $(".storyBoard").append("<div class='interactiveCanvas' id='airplane'></div>");
            let airPlaneSketch = function (p) {
                let i;
                let ifClick = false;

                let images = [];
                let ap;
                let apBG;
                let aim;


                p.setup = function () {
                    p.createCanvas(x, y);

                    i = -1;
                    ap = p.loadImage("Assets/paperAirplane/aimedPlane.png");
                    apBG = p.loadImage("Assets/windowOpen-01.png");
                    aim = p.loadImage("Assets/paperAirplane/airplaneAim-01.png");

                    for(var a = 1; a < 9; a++){
                        images.push(p.loadImage("Assets/paperAirplane/step"+ a +".png"))
                    }


                };

                p.draw = function () {
                    p.fill(0);
                        if(i> 7 && i<=8){
                            p.drawThrowScene();
                            // printPassage("ThrowAirplane")
                        }else if(i > 8){
                            console.log("getIN!");
                            console.log(i);
                            p.drawNext();
                        }else{
                            console.log("length: " + images.length);
                            p.clear();
                            p.image(images[i], (p.width-images[i].width/2)/2, (p.height-images[i].height/2)/2,images[i].width / 2, images[i].height / 2);
                        }
                };

                p.drawNext = function(){
                    printPassage("ThrowAirplane");
                    p.noLoop();
                }

                p.mouseClicked = function () {
                    i++;
                }

                p.drawThrowScene = function () {
                    p.clear();
                    p.image(apBG,(p.width-apBG.width)/2,0);
                    apBG.resize(0,p.height);
                    p.image(ap, p.mouseX - 250, p.mouseY + 40, ap.width/4, ap.height/4);
                    p.image(aim,p.mouseX-30,p.mouseY-30,aim.width/2,aim.height/2);
                }
            }

            let myp5 = new p5(airPlaneSketch,'airplane');

        } else if(getScripts.canvas == "ThrowAirplane"){

            $(".storyBoard").append("<div class='interactiveCanvas' id='throwAirplane'></div>");
            let throwAirplaneSketch = function (p) {
                let throwApImage;

                p.setup = function () {
                    p.createCanvas(x, y);
                    throwApImage = p.loadImage('Assets/paperAirplane/pathAirplane-13.png');
                };

                p.draw = function () {
                    p.image(throwApImage, (p.width-throwApImage.width/2)/2, (p.height-throwApImage.height/2)/2,throwApImage.width/2, throwApImage.height/2);
                };
            }
            let myp5 = new p5(throwAirplaneSketch,'throwAirplane');
        }
    }



}

//load script method

//Script Object
function Script(scriptName, content, options,activity,weapon,destination,canvas,images,css) {
    this.scriptName = scriptName;
    this.content = content;
    this.options = options;
    this.activity = activity;
    this.weapon = weapon;
    this.destination = destination;
    this.canvas = canvas;
    this.images = images;
    this.css = css;
}

function loadScript() {
    scripts = [
        new Script(
            "intro",
            "Once upon a time, a few blocks away from the downtown area in X city, there is a luxury apartment building. Unlike the surrounding skyscrapers which are high and goes straight up to the sky covered by the curtain of glass, this apartment is only 8 floors height and deorated with sophisticatedly designed squared shape window.\n" +
            "Inside the building, on the 7th floor, there is a boy, sitting in the front of the desk in his bedroom. He feels bored. His parents have gone to work and leave him stays alone at home. His friends live far from him and some of them have gone for a trip.He is looking for something fun to do...",
            ["Listen to radio","Read book","Watch TV"],
        ),
        new Script(
            "Listen to radio",
            "He goes to the dining room and turns on the radio aside the dining table, sits on the chair and starts to listen. \n" +
            "There is a music radio station. They are playing the song “Time in a bottle”...\n" +
            "“Emmm, I think I’ve listened to this song in my parents car before” It’s too old… Can’t listen to this all day….",
            ["Turn it off>Look at window"],
            "turned off the radio",
            "",
            "",
            "radio"
        ),
        new Script(
            "Read book",
            "He grabs the book on the desk named `Einstein's Dreams\". His mom bought it for him several days ago. The book is mainly about the fiction collage of stories dreamed by Albert Einstein in 1905, about time, relativity and physics. Sounds interesting...\n" +
            "He still opens it and starts to read...",
            ["Continue>Close book"],
            "",
            "",
            "",
            "book"
        ),
        new Script(
            "Close book",
            "“Emmmm… If I walk into my past accidentally, would I be able to see another me?”\n" +
            "Then he gradually felt too sleepy to continue. \n" +
            "“Ok, I’m done for this book!” Need to look for other more interesting things!",
            ["Continue>Look at window"],
            "closed the book, leaving his bedroom",
            "",
            "",
            "sleepybook"
        ),
        new Script(
            "Watch TV",
            "He goes to the living room, jumped on the sofa, picked up the remote control to turn on the tv. TV is showing the news…\n" +
            "\n" +
            "“Sounds horrible how did he make it? He hired someone else to do it perhaps?” Enough bad news here. Want to do something fun.",
            ["Continue>Look at window"],
            "turned off the tv and stood up from the sofa",
            "",
            "",
            "TV"
        ),
        new Script(
            "Look at window",
            "The boy "+ activity +", feels like he is hard to focus on doing anything. Still feeling bored.\n" +
            "He goes to the window, stares outside.",
            ["Look at the opposite building>Opposite building","Look down on the street>Street"],
            "",
            "",
            "",
            "window"
        ),
        new Script(
            "Opposite building",
            "On the opposite side of the street there is another apartment building. Most of the curtains are opened. The buildings are so closed that he can see inside the room easily. He can even tell there is a tv turned on in a room.",
            ["Look down on the street>Street"]
        ),
        new Script(
            "Street",
            "He looks down on the street. The passengers are busy as usual. Nothing special. Suddenly, A spitball pushed by the wind caught his attention. The wind carried it to move around on the street randomly, lift it up and blow it down. It seems like it can move by itself, carefully avoiding the steps of the passengers. ",
            ["Continue>The Spittball"]
        ),
        new Script(
            "The Spittball",
           "He keeps watching this little spittball and starts his imagination... \n" +
            "It is a messenger, carrying an important message for it's kingdom. It hides the message carefully inside it's wrinkle. Unfortunately, there is a monster chasing it on it's way to the kingdom. It ran into the forest of human feet, striving to escape...\n" +
            "“Come on messenger! You can do it! Don’t let it catch you.” The boy loves the story he just created for himself. The spitball moves faster and faster… Until it is getting closer to the corner of the window. He almost lays on the window and tried to catch it. He is eager to know the messenger’s fate. \n" +
            "Suddenly the spitball was trapped into a little whirlpool of the wind. “Oh no, it’s a trap of the monster!” He continues his story. The unpredictable trace of the spitball becomes a periodical circular movement toward the sky.The boy lays on the window completely tries to catch on with it. It spins upwards faster and faster which makes his eyes even harder to capture. Finally it disappeared in his sight. He tries to look for it. But it is gone, just like it never existed before. Unforunately, the messenger failed his mission. The boy sat down below the window slowly, feeling a little bit upset. Maybe because of the failure of the messager, or he just lost something he can focus on. “Wait...\" The boy comes out an idea. \"How about I make one on myself?",
           ["Continue>He makes one"]
        ),
        new Script(
            "He makes one",
           "He stands up and grabs one piece of paper on his desk. Then he kneads it into a spitball. He opens the window a little bit, the cold wind belows into the room. He wants to throw it out of the window. However, he starts to feel a little bit anxious. \n" +
            "“It’s not right… unless there is nobody to know it!” \n" +
            "He finally persuade himself.\n" +
            "He double checks the opposite building’s window, making sure nobody is “accidentally” looking outside. At least in his view. He feels his heartbeat is speeding up. He threw the spitballs, and felt like there are thousands of eyes staring at him at this moment,",
           ["But he doesn’t care about it, laying on the window and see how it goes>Keep position","Sit down quickly and and hide for a while>Sit down"]
        ),
        new Script(
            "Keep position",
            "The spitball dropps quickly. The wind is strong, it disappear in a second. He doesn't even have a chance to observe it and continues his story about this brave messenger. It is gone...",
            ["Continue>Looking for Other Things"]
        ),
        new Script(
            "Sit down",
           "He finds himself feel very curious about how this spitball will go.\n" +
            "\"Will it makes it to the ground?\"\n" +
            "\"Will it hits somebody?\"\n" +
            "\"Will it fly in the wind?\"\n" +
            "He has so much questions about what will happen to the spitball. He can't bear his curiousness anymore and stands up to check it. He finds nothing. The spitball is gone already. He doesn't know where it goes or how it goes...",
           ["Continue>Looking for Other Things"]
        ),
        new Script(
            "Looking for Other Things",
           "He is not frustrated about this quick ending of the second messenger. In fact, he likes the feeling of the excitment and the uncertainly while he dropped the spitball. He wants to drop more and observes.\n" +
            "He starts to think. He need to drop something which can last longer and interesting to watch it falls...\n" +
            "He goes to his desk to searching for something to drop. Then he finds a dozen of origami paper. \n" +
            "\"Aha, I have an idea!\"",
           ["Use origami paper to create a paper airplane>airplane"]
        ),
        new Script(
            "airplane",
            "he folds the origami paper to a sophisticated paper airplane...",
            [],
            "",
            "",
            "",
            "airplane"
        ),
        new Script(
            "ThrowAirplane",
            "He throws the airplane out of the window. The airplane flies stably. It isn’t disturbed by the strong wind. Fly slowly down with a perfect spin. Sometimes it even goes up a little bit. The boy feels happy to see that.\n" +
            "“yo I’m the craftsman of the paper airplane haha” The airplane spins downward and become smaller and smaller. \n" +
            "When it flies closer to the street, some passengers even take a look at that paper airplane. Some of them try to look around to search where this airplane comes from. \n" +
            "The boy laughed at the window. Feeling happy about the objects he throw catches other people's attention and this excitement of hiding...",
            ["Continue>TransitionToEnd"],
            "",
            "",
            "",
            "",
            "Assets/paperAirplane/pathAirplane-13.png"
        ),
        new Script(
            "TransitionToEnd",
            "The boy loves this somehow dangerous activity. He loves the feeling of throwing something anonymously. The anxiety, the fear of being found by other people at the moment of dropping the objects gradually becomes a kind of excitement for him. \n" +
            "After he dropped the object, he enjoyed this uncertainty of the potential consequence the object could cause. He observe the object falling carefully. When it catches someone’s attention makes him feel so satisfied and even proud…",
            ["In the next few days>NextFewDays"]
        ),
        new Script(
            "NextFewDays",
            "He keeps doing it in the next few days...\n" +
            "The he gradually becomes addicted to it and harder to feel satisfied, the normal objects like a paper spitball, airplane, water bottle could not satisfy him. He doesn’t feel anxiety and excitement as he throws these “insignificant” objects anymore. He wants to throw something more “influential”.\n" +
            "One day,he fills a balloon with water, and throws outside the window. He hides himself behind the window and laughs when he hears the sound of the balloon explode on the ground and the people’s shocking sound and cursing. Still nobody found this naughty boy.",
            ["Continue>hisHorribleDecision"]
        ),
        new Script(
            "hisHorribleDecision",
            "However, as the addiction progresses without any limitation, he starts to  feel unsatisfy again. He demands something more interesting and more influential. That's how horrible things could potentially happen...\n" +
            "One day, the boy sitting beside the window felt bored. He's tried everything he wanted. Today, he has no idea what he wants to throw. He wants something even bigger, or even more \"harmful\". He starts to wondering around the house to look for something that fullfills his standard...",
            ["Go to desk>ScrollDriver","Go to living room>Knife"]
        ),
        new Script(
            "ScrollDriver",
            "He goes to the desk and found a scroll driver. “Emmm… this might work”",
            ["Continue>FinalDrop"],
            "",
            "scroll driver",
            "desk"
        ),
        new Script(
            "Knife",
            "He goes to the living room and finds the knife his mom used to shave the apple yesterday night. “Emmm… this might works”",
            ["Continue>FinalDrop"],
            "",
            "knife",
            "living room"
        ),
        new Script(
            "FinalDrop",
            "With the " + weapon + " in hand. He’s thinking… It should be “influential” enough! It could potentially hurt somebody. He seems very satisfied with the object he found. The potential consequence is great enough to ignite his anxiety and excitement again. He walks to the window. Looking down on the street. It’s around 10:00 AM. Not too many people on the street. Most of them are gone to work. It should be fine...",
            ["Open the window>Drop"]
        ),
        new Script(
            "Drop",
            "He opens the window, grabs " + weapon +" and puts it out of the window. His heart beats is speeding up. Feeling nervous and anxious again. He gradually became more and more excited. Feel glad to get these feelings back, it is exactly the feeling he’s looking for. It even gets stronger this time. His hand began to shake, he looked at the opposite building, nobody was there as usual. \n" +
            "“Okay, it will be fine, not so many people there…” \n" +
            "He talks to himself. He doesn’t aim to hurt someone, he just wants to take a greater bet. He loose his hand, he dropped it… ",
            ["Sit down>AfterDrop"]
        ),
        new Script(
            "AfterDrop",
            "He suddenly sat down, laying on the wall. Excited and then scared. He is waiting for the result. Times seem to slow down at this moment. The feeling at this moment he’s never experienced before. It was his first time that felt the sense of achievement and regretness at the same time. He is still eager to know what it may cause...\n" +
            "\"Will it just fall on the ground with everybody safe and sound? \" \n" +
            "\"Who will be that “lucky guy” killed by a bored anonymous boy…\" \n" +
            "\"If that happens, what am I supposed to do?\"  \n" +
            "“Maybe I’m too young to be a murderer...” He doesn’t know what he expects, the hitting sound or the screaming of the victims. However, the truth is neither. He hears nothing. He slowly stands up, and looks down on the street. “That’s strange! At least it should have some sound…” At this moment, all he can hear is his heartbeat. Being Afraid but curious to check out the consequence. However, to his surprise, He sees nothing, passengers walking normally on the street like nothing happened.s",
            ["\"What?\">Unexpected Consequense"]
        ),
        new Script(
            "Unexpected Consequense",
           "This is the consequence he never expected. He goes to the " + destination + " to double check.The " + weapon + " is gone. Sure he did throw it. It is gone. \n" +
            "“How could that happen? No sound, nobody even notices it? It’s impossible”.\n" +
            "He grabs his coat and decides to take a look by himself. Right at the momement He closed the door, an elevator arrived. He runs into it, can’t stop thinking… Still don’t know why. The elevator seems to take a longer time to take him to the ground floor. \n" +
            "“Wait, what if it is trapped? Which tried to capture who did this?” Bing!\n" +
            "The elevator opens. He steps outside slowly and carefully. Everything still looks normal. He sneaks toward the lobby.\n" +
            "He hides himself at the corner and takes a look at the lobby. Literally nothing abnormal, the guards were there and open the door for the people to get in and out, he can still hear the front desk greeting people. Her voice sounds kind as usual. He walks out, the front desk greets him as well and guards open the door for him. He starts looking for the " + weapon + " as soon as he gets out. He goes to the position right under the window of his bedroom and search everywhere it could fall to. However, he found nothing…",
            ["Continue>Final"]
        ),
        new Script(
            "Final",
            "“Emmm… That’s so weird… Whatever, at least I’m not a murder haha.” He looks up, the sunshine falls on his face kindly. “What a beautiful day… Why didn’t I just walk outside more often...”\n" +
            "Then, He noticed there is a window opened, and a black spot is approaching right over his head.  \n" +
            "He suddenly realizes something and tries to run away, but it is too late. " + weapon + " hits the boy’s head, with the accelartion, it hits his head heavily. Blood split on the street. People screaming and running, the apartment guard was shocked and looked up angrily trying to spot the murderer. The knife hit the ground and leaves a cutting mark on the street.",
            ["Continue>Wakeup"]
        ),
        new Script(
            "Wakeup",
            "The boy suddenly woke up from the desk… Okay, It seems like I fall asleep. What a bad dream... Am I still going to throw the " + weapon + " ?",
            ["Throw " + weapon + ">FinalDrop","Throw something else>AnotherHorribleDecision"]
        ),
        new Script(
            "AnotherHorribleDecision",
            "However, as the addiction progresses without any limitation, he starts to  feel unsatisfied again. He demands something more interesting and more influential. That's how horrible things could potentially happen...\n" +
            "One day, the boy sitting beside the window felt bored. He's tried everything he wanted. Today, he has no idea what he wants to throw. He wants something even bigger, or even more \"harmful\". He starts to wondering around the house to look for something that fullfills his standard...",
            ["Go to desk>ScrollDriver","Go to living room>Knife","Throw the phone>phoneEnd"]
        ),
        new Script(
            "phoneEnd",
            "With the phone in hand. He’s thinking… It should be “influential” enough! It could potentially hurt somebody. He seems very satisfied with the object he found. The potential consequence is great enough to ignite his anxiety and excitement. He walks to the window. Looking down on the street. It’s around 10:00 AM. Not too many people on the street. Most of them are gone to work. It should be fine...\n" +
            "\n" +
            "Right at the moment the boy drops the phone, the phone rings. It is his mom...",
            ["Answer the call>mom"],
        ),
        new Script(
            "mom",
            "“Oh honey, thank god I’ve made it!”\n" +
            "\n" +
            "“What are you talking about mom, are you crying? What happened?”\n" +
            "\n" +
            "“You just listen to me honey, I only have limited time. Promise me, don’t do that dangerous thing again okay?. Just listen, don't throw $weapon”\n" +
            "\n" +
            "“What?! How do you know?”\n" +
            "\n" +
            "“And I love you!” his mom isn't listening to him\n" +
            "\n" +
            "“I love you...”\n" +
            "\n" +
            "His mom ends the call\n" +
            "\n" +
            "“Too.”",
            ["Wake up>Wakeup","Start Over>intro"],
        )
    ]
}

function browserScripts(currentS) {

    if(scripts.length!=0){
        for (var i = 0; i < scripts.length; i++ ){
            if(currentS == scripts[i].scriptName){
                return scripts[i];
            }
        }
    }
}

//checking
function checkActivity(query) {
    // console.log("error content: " + query.activity);
    if(query.activity!= null){
        if(query.activity != ""){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function checkWeapon(query) {
    if(query.weapon!= null){
        if(query.weapon != ""){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function checkDestination(query) {
    if(query.destination!= null){
        if(query.destination != ""){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function checkVariable(query) {
    if(checkActivity(query)){
        activity = query.activity;
    }

    if (checkWeapon(query)){
        weapon = query.weapon;
    }

    if (checkDestination(query)){
        destination = query.destination;
    }

    loadScript();
}

function checkImage(query) {
    if(query.scriptName == "ThrowAirplane"){
        console.log(query.image + " : " + query);
    }

    if(query.images!= null){
        if(query.images != ""){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function checkCanvas(query) {
    if(query.canvas != null){
        console.log(query.canvas);
        return query.canvas;
    }
}

function formattingImage(query) {
    if(checkImage(query)){
        console.log("test: " + query.scriptName + " : " + query.image);
        $(".storyBoard").append("<div class='imageContainer'>"+ "<img src='" + query.images +"' id='" + query.scriptName + "'>" +"</div>");
    }else{
        return;
    }
}

function formattingContent(content) {
    //formatting content
    var splitted = content.split("\n");

    if(splitted.length != 0){
        $('.storyBoard').html("<div class='content'></div>");
        for(var i = 0; i < splitted.length; i++){
            $('.content').append("<p class='scripts'>" + splitted[i] + "</p>")
        }

    }else{
        $('.storyBoard').html("<div class='content'>" + "<p class='scripts'>" + content + "</p>" + "</div>");
    }
}

function formattingOptions(options){
    //formating options
    if(options.length!=0 ){
        $('.interaction').html('');
        var getOptions = options;
        for(var i = 0; i<getOptions.length; i++){
            if(getOptions[i].includes(">")){
                var optionQ = getOptions[i].split(">");
                $('.interaction').append("<h2 class='btn' id='" + optionQ[1] + "' onclick='printPassage(this.id)'>" + optionQ[0] + "</h2>");
            }else{
                $('.interaction').append("<h2 class='btn' id='" + getOptions[i] + "' onclick='printPassage(this.id)'>" + getOptions[i] + "</h2>");
            }
        }
    }else{
        $(".interaction").html("");
    }



}
