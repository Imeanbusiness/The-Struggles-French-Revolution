var mainmenu = new Audio("Assets/MainMenu.mp3")
var introtheme = new Audio("Assets/IntroTheme.mp3")
var sadtheme = new Audio("Assets/SadEvent.mp3")
var happytheme = new Audio("Assets/HappyEvent.mp3")
var curioustheme = new Audio("Assets/CuriousEvent.mp3")
var newdaytheme = new Audio("Assets/NewDayTheme.mp3")
var moneychange = new Audio("Assets/MoneyChange.mp3")
const documentHTML = document.documentElement;
const body = document.body;
running = false
const monthList = ["January","Febuary","March","April","May","June","July","August", "Spetember", "October", "November", "December"]

difficutyNeg = 5
difficultyMax = 10
income = 250
dif = 2
happiness = 75;
health = 75;
safety = 75;
year = 1888;
month = "January";
trueMonth = 0;
eventHap =0;
bread = 13;
jewel = 20;
ran = false

function Randint(x) {
    return Math.floor(Math.random()*(x+1))
}

function localsave(saveID, item) {
    localStorage.setItem("FrenchRev"+saveID, item)
}


function localload(saveID) {
    return localStorage.getItem("FrenchRev"+saveID)
}


coming = false


function continueStart() {
    try {
        
        money = Number(localload("money"))
        month = localload("month")
        income =  Number(localload("income"))
        bread =  Number(localload("bread"))
        jewel =  Number(localload("jewel"))
        popul =  Number(localload("popul"))
        year =  Number(localload("year"))
        trueMonth =  Number(localload("trueMonth"))
        happiness =  Number(localload("happiness"))
        health =  Number(localload("health"))
        safety =  Number(localload("safety" ))
        eventHap =  Number(localload("eventHap"))
        dif = Number(localload("dif"))
        difficutyNeg = Number(localload("difficultyNeg"))
        difficultyMax = Number(localload("difficultyMax"))
        console.log("continued")
        if (year >= 1789) {
            introFade = setInterval(FadeIn, 10);
            opac = 1
            faded = false;
            function FadeIn() {
                
                if (opac <= 0) {
                    documentHTML.style.backgroundImage = "url(\"Images/Home.jpg\")"
                    clearInterval(introFade);
                    console.log("stopped")
                    faded = true
                    titleScreen = document.getElementById("titleScreen");
            
                    titleScreen.remove();

                } else {
                    opac-=0.0033; 
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                }
            }
            
            mainmenu.pause();
            introtheme.currentTime  = 0;
            introtheme.play();
            introtheme.loop="true";
            ActualGame2()
        } else {
            alert("No game saved!")
            return;
        }
        
    } catch {
        alert("No game saved!")
        return;
    }
    
}


function cutChoose() {
    n = document.getElementById("scholar")
    ba = document.getElementById("noble")
    credits = document.getElementById("business")

    help = document.getElementById("help")


    hard = document.getElementById("hard")
    diffText = document.getElementById("diffText")
    back = document.getElementById("back")


    n.remove()
    ba.remove()
    diffText.remove()
    credits.remove()
    help.remove()
    hard.remove()
    back.remove()





    hah = document.createElement("h2")
    hah.setAttribute("id", "funnyText")
    titleScreen.appendChild(hah);
    document.getElementById("funnyText").innerHTML = "Watch opening cutscene?"



    n = document.createElement('button');
    n.className = "fadeIn continuebutton"
    
    n.setAttribute("id", "yes");
    n.setAttribute("onclick", "cutYes()");
    node = document.createTextNode("Yes");
    n.appendChild(node);

    ba = document.createElement('button');
    ba.className = "fadeIn"
    
    ba.setAttribute("id", "no");
    ba.setAttribute("onclick", "cutNo()");
    node = document.createTextNode("No");
    ba.appendChild(node);


    
    



    





    titleScreen.appendChild(n);
    titleScreen.appendChild(ba);

}
//creddits

function cutYes() {
    Game()
}

function cutNo() {
    ActualGame()
}


function EnterGame() {
    if (coming) {
        introFade3 = setInterval(FadeIn, 10);
        opac = -0
        faded = false;
        function FadeIn() {
            
            if (opac >= 1) {
                
                clearInterval(introFade3);
                console.log("stopped")
                faded = true


            } else {
                opac+=0.0033; 
                documentHTML.style.opacity = opac; 
                console.log("working")
            }
        }        
    }
    coming = false
           
    running = false;
    mainmenu.currentTime = 0;

    mainmenu.play();
    mainmenu.loop="true";
    element = document.getElementById("enter");
    try {
        titleScreen = document.getElementById("titleScreen");
        titleScreen.remove();
    } catch {

    }
    
    try {
        element.remove();
    } catch {

    }
    documentHTML.style.backgroundImage = "url(\"Images/FrenchRev.jpg\")"
   

    titleScreen = document.createElement("div");
    titleScreen.className = ("titleScreen")
    titleScreen.setAttribute("id", "titleScreen");
    body.appendChild(titleScreen);

    head = document.createElement("h1");
    node = document.createTextNode("The Struggles: The French Revolution");
    head.appendChild(node);
    titleScreen.appendChild(head);


    n = document.createElement('button');
    n.className = "fadeIn continuebutton"
    
    n.setAttribute("id", "continue");
    n.setAttribute("onclick", "continueStart()");
    node = document.createTextNode("Continue");
    n.appendChild(node);

    ba = document.createElement('button');
    ba.className = "fadeIn newgamebutton"
    
    ba.setAttribute("id", "start");
    ba.setAttribute("onclick", "start()");
    node = document.createTextNode("Start");
    ba.appendChild(node);

    creditss = document.createElement('button');
    creditss.className = "fadeIn creditsbutton"
    
    creditss.setAttribute("id", "credits");
    creditss.setAttribute("onclick", "Creddits()");
    node = document.createTextNode("Credits");
    creditss.appendChild(node);



    help = document.createElement("button")
    help.setAttribute("id", "help");
    help.setAttribute("onclick", "helpopen()");
    node = document.createTextNode("Help");
    help.appendChild(node);




    titleScreen.appendChild(n);
    titleScreen.appendChild(ba);
    titleScreen.appendChild(creditss);
    titleScreen.append(help)



 

    
}


var device = "null"

const ua = navigator.userAgent

//actualgame
function start() {

    
    n = document.getElementById("continue")
    ba = document.getElementById("start")
    credits = document.getElementById("credits")

    n.remove()
    ba.remove()
    credits.remove()

    diffText = document.createElement("h3")
    diffText.setAttribute("id", "diffText")
    diffText.setAttribute("class", "diffText")
    titleScreen.appendChild(diffText)
    document.getElementById("diffText").innerHTML = "What difficulty will you choose?"
    diffText = document.getElementById("diffText");
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        device = "phone"
    } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        device = "tablet"
    } else {
        device = "dektop"
    }
    if (device == "phone") {
        diffText.remove()
    }
    
    var w = window.innerWidth;
    
    
    if (w<=700) {
        diffText.remove()
    }




    n = document.createElement('button');
    n.className = "fadeIn continuebutton"
    
    n.setAttribute("id", "scholar");
    n.setAttribute("onclick", "scholar()");
    n.setAttribute("onmouseover","scholarHover()")
    n.setAttribute("onmouseout","resetDifText()")
    node = document.createTextNode("Scholar mode");
    n.appendChild(node);

    ba = document.createElement('button');
    ba.className = "fadeIn newgamebutton"
    
    ba.setAttribute("id", "noble");
    ba.setAttribute("onclick", "noble()");
    ba.setAttribute("onmouseover","nobleHover()")
    ba.setAttribute("onmouseout","resetDifText()")
    node = document.createTextNode("Noble mode");
    ba.appendChild(node);

    creditss = document.createElement('button');
    creditss.className = "fadeIn creditssbutton"
    
    creditss.setAttribute("id", "business");
    creditss.setAttribute("onclick", "business()");
    creditss.setAttribute("onmouseover","bgsHover()")
    creditss.setAttribute("onmouseout","resetDifText()")
    node = document.createTextNode("BGS mode");
    creditss.appendChild(node);

    hard = document.createElement('button');
    


    hard.setAttribute("id", "hard");
    hard.setAttribute("onclick", "peasant()");
    hard.setAttribute("onmouseover","peasantHover()")
    hard.setAttribute("onmouseout","resetDifText()")
    node = document.createTextNode("Peasant Mode");
    hard.appendChild(node);

    back = document.createElement('button');
    
    
    back.setAttribute("id", "back");
    back.setAttribute("onclick", "EnterGame()");
    node = document.createTextNode("Back");
    back.appendChild(node);

    help = document.createElement('button');
    
    



    





    titleScreen.appendChild(n);
    titleScreen.appendChild(ba);
    titleScreen.appendChild(creditss);
    titleScreen.appendChild(hard);
    titleScreen.appendChild(back);
    



    
    
}



function resetDifText() {
    document.getElementById("diffText").innerHTML = "What difficulty will you choose?"
}



function scholarHover() {
    try {
        document.getElementById("diffText").innerHTML = "For those who are learning! All canon events are fixed and you cannot die. Your stat loss is 5 and there is no death threshold. Your income starts at 250."
    } catch {

    }
}

function nobleHover() {
    try {
        document.getElementById("diffText").innerHTML = "For those who just want to test the game! Perfect for beginners! Your stat loss is 3 and there is no death threshold. Your income starts at 300."
    } catch {

    }
}

function bgsHover() {
    try {
        document.getElementById("diffText").innerHTML = "For those who want to experience the normal game! Your stat loss is 5 and the death threshold is 10. Your income starts at 250."
    } catch {

    }
}

function peasantHover() {
    try {
        document.getElementById("diffText").innerHTML = "For those who want a huge challenge! Perfect for experienced players! Your stat loss is 7 and the death threshold is 25. Your income starts at 200."
    } catch {

    }
}

//credits
function scholar() {
    if (running == false) {
        running = true
        difficutyNeg = 5
        difficultyMax = 0
        income = 250
        dif = 0
        cutChoose();
        
    }
}


function noble() {
    if (running == false) {
        running = true
        difficutyNeg = 3
        difficultyMax = 0
        income = 300
        dif = 1
        cutChoose();
        
    }
}


function business() {
    if (running == false) {
        running = true
        difficutyNeg = 5
        difficultyMax = 10
        income = 250
        dif = 2
        cutChoose();
        
    }
}

function peasant() {
    if (running == false) {
        running = true
        difficutyNeg = 7
        difficultyMax = 25
        income = 200
        dif = 3
        cutChoose();
        
    }
}

function ActualGame() {

    introFade = setInterval(FadeIn, 10);
    opac = 1
    faded = false;
    function FadeIn() {
        
        if (opac <= 0) {
            documentHTML.style.backgroundImage = "url(\"Images/Home.jpg\")"
            clearInterval(introFade);
            console.log("stopped")
            faded = true
            titleScreen = document.getElementById("titleScreen");
    
            titleScreen.remove();
            

        } else {
            opac-=0.0033; 
            documentHTML.style.opacity = opac; 
            console.log("working")
        }
    }
    
    mainmenu.pause();
    introtheme.currentTime  = 0;
    introtheme.play();
    introtheme.loop="true";



    happiness = 75;
    health = 75;
    safety = 75;
    year = 1789;
    popul = 0;
    jewel = 20;
    bread = 13;
    eventHap = 0;
    money = income;
    month = "January";
    trueMonth = 0

    introFadeIn = setInterval(FadingIn, 10);
    valueFade = false
    function FadingIn() {
        

        if (opac >= 1) {
            alertDiv = document.createElement("div")
            alertDiv.setAttribute("class", "alertdiv" )
            alertDiv.setAttribute("id", "alertdiv")
            node = document.createTextNode("Dear player,\nWelcome to the French revolution game! We are delighted to have you here. This is a quick game help to help you play. At this time, You wil gain "+income+" sous every month. A loaf of bread costs 13 sous. Your income and bread price will fluctuate based on certain events. You need at least 15 bread in a month, or you will lose "+difficutyNeg+" health per bread missing. If your health drops below 0, you die in the next month. You can keep yourself happy by spending money on yourself, such as purchasing jewelery. You lose "+difficutyNeg+" happiness a month. If happiness drops to 0, you will kill yoursef in the next month. Safety will go down or up by choices made in monthly events. Dropping below 0 will result in being executed or murdered. If any of your stats drop below "+difficultyMax+", you have a chance to die. The lower it is, the higher the chance.")

            alertDiv.appendChild(node);
            document.body.style.textAlign = "center";
            body.append(alertDiv)
            back = document.createElement('button');
            
            
            back.setAttribute("id", "yes");
            back.setAttribute("onclick", "ActualGame2()");
            node = document.createTextNode("Understood!");
            back.appendChild(node);
            alertDiv = document.getElementById("alertdiv")
            alertDiv.appendChild(back);
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }
    try {
        introTextDiv = document.getElementById("introDiv");
    
        introTextDiv.remove();

    } catch {

    }

    






}


function suiDeath() {
    sadtheme.play()
    sadtheme.loop = "true";
    documentHTML.style.backgroundImage = "url(\"Images/Grave.jpg\")"
    introTextDiv = document.createElement("div");
    introTextDiv.setAttribute("id","introDiv")
    
    

    body.appendChild(introTextDiv)

    document.getElementById("introDiv").style.padding = "3em";
    introFadeIn = setInterval(FadingIn, 10);
    introText = document.createElement("p");
    introText.setAttribute("id", "introText")
    
    body.appendChild(introTextDiv);
    function FadingIn() {
        
        if (faded == true && valueFade == false) {
            
            node = document.createTextNode("Maximilien Robespierre: 6 May 1758 - "+month+" "+year+"\nAn honourable man who ended his life by suicide. He was depicted to have very little happiness and ended himself with a gun. He is remembered for his genius with words.");
            introText.appendChild(node);
            introTextDiv = document.getElementById("introDiv");
            introTextDiv.appendChild(introText);
            introText = document.getElementById("introText")
            introText.style.color = "white";
            valueFade = true
            opac = 0
            
        }
        if (opac >= 1) {
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }
    introTextDiv = document.getElementById("introDiv");
    setTimeout(() => {
        introTextDiv.remove();
        sadtheme.pause()
        
    
        
        
        introTextDiv = document.createElement("div");
        introTextDiv.setAttribute("id","introDiv")
        
        
    
        body.appendChild(introTextDiv)
    
        document.getElementById("introDiv").style.padding = "3em";
    
        
        introText = document.createElement("p");
        introText.setAttribute("id", "introText")
    
    
        introFade2In = setInterval(FadingIn, 10);
        valueFade = false
        function FadingIn() {
            
            if (faded == true && valueFade == false) {
                introTextDiv.remove()
                EnterGame()
            }
            if (opac >= 1) {
                clearInterval(introFade2In);
                console.log("stopped")
                
            } else if (faded == true) {
                opac+=0.0033;
                documentHTML.style.opacity = opac; 
                console.log("working");
                
            }
        }
    }, 20000);


}


function sickDeath() {
    sadtheme.play()
    sadtheme.loop = "true";
    documentHTML.style.backgroundImage = "url(\"Images/Grave.jpg\")"
    introTextDiv = document.createElement("div");
    introTextDiv.setAttribute("id","introDiv")
    
    

    body.appendChild(introTextDiv)

    document.getElementById("introDiv").style.padding = "3em";
    introFadeIn = setInterval(FadingIn, 10);
    introText = document.createElement("p");
    introText.setAttribute("id", "introText")
    
    body.appendChild(introTextDiv);
    function FadingIn() {
        
        if (faded == true && valueFade == false) {
            
            node = document.createTextNode("Maximilien Robespierre: 6 May 1758 - "+month+" "+year+"\nAn honourable man who suffered from smallpox. He died hungry, sick, and suffering in his bed. He is remembered for his genius with words.");
            introText.appendChild(node);
            introTextDiv = document.getElementById("introDiv");
            introTextDiv.appendChild(introText);
            introText = document.getElementById("introText")
            introText.style.color = "white";
            valueFade = true
            opac = 0
            
        }
        if (opac >= 1) {
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }
    introTextDiv = document.getElementById("introDiv");
    setTimeout(() => {
        introTextDiv.remove();
        sadtheme.pause()
        
    
        
        
        introTextDiv = document.createElement("div");
        introTextDiv.setAttribute("id","introDiv")
        
        
    
        body.appendChild(introTextDiv)
    
        document.getElementById("introDiv").style.padding = "3em";
    
        
        introText = document.createElement("p");
        introText.setAttribute("id", "introText")
    
    
        introFade2In = setInterval(FadingIn, 10);
        valueFade = false
        function FadingIn() {
            
            if (faded == true && valueFade == false) {
                introTextDiv.remove()
                EnterGame()
            }
            if (opac >= 1) {
                clearInterval(introFade2In);
                console.log("stopped")
                
            } else if (faded == true) {
                opac+=0.0033;
                documentHTML.style.opacity = opac; 
                console.log("working");
                
            }
        }
    }, 20000);


}

function murderDeath() {
    sadtheme.currentTime = 0
    sadtheme.play()
    sadtheme.loop = "true";
    documentHTML.style.backgroundImage = "url(\"Images/Grave.jpg\")"
    introTextDiv = document.createElement("div");
    introTextDiv.setAttribute("id","introDiv")
    
    

    body.appendChild(introTextDiv)

    document.getElementById("introDiv").style.padding = "3em";
    introFadeIn = setInterval(FadingIn, 10);
    introText = document.createElement("p");
    introText.setAttribute("id", "introText")
    
    body.appendChild(introTextDiv);
    function FadingIn() {
        
        if (faded == true && valueFade == false) {
            
            node = document.createTextNode("Maximilien Robespierre: 6 May 1758 - "+month+" "+year+"\nAn honourable man who led a very risky life. He was brutally murdered by a starving person looking for food. He is remembered for his genius with words.");
            introText.appendChild(node);
            introTextDiv = document.getElementById("introDiv");
            introTextDiv.appendChild(introText);
            introText = document.getElementById("introText")
            introText.style.color = "white";
            valueFade = true
            opac = 0
            
        }
        if (opac >= 1) {
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }
    introTextDiv = document.getElementById("introDiv");
    setTimeout(() => {
        introTextDiv.remove();
        sadtheme.pause()
        
    
        
        
        introTextDiv = document.createElement("div");
        introTextDiv.setAttribute("id","introDiv")
        
        
    
        body.appendChild(introTextDiv)
    
        document.getElementById("introDiv").style.padding = "3em";
    
        
        introText = document.createElement("p");
        introText.setAttribute("id", "introText")
    
    
        introFade2In = setInterval(FadingIn, 10);
        valueFade = false
        function FadingIn() {
            
            if (faded == true && valueFade == false) {
                introTextDiv.remove()
                EnterGame()
            }
            if (opac >= 1) {
                clearInterval(introFade2In);
                console.log("stopped")
                
            } else if (faded == true) {
                opac+=0.0033;
                documentHTML.style.opacity = opac; 
                console.log("working");
                
            }
        }
    }, 20000);


}




eventNom = Randint(8);
   
    EventList = ["You got robbed! Your money was halved.", "Assulted! Your safety was halved. You have a bigger target on your back.", "Disease inflicted! Your health was halved. Be careful out there.", "A man on the street looks weak and frail. Rob him?", "A knock on the door. It is a merchantman. He offers a pearl, which will give 10 happiness for only 20 sous! Purchase it?","You are offered a gun for free. It will increase safety by 10. Take it or no?", "You stole some bread from the store and got away! Your health increased by 15!","You managed to earn some extra money. You got 100 sous!","You made a new friend! You gained 10 happiness!"]
    badEvents = [0,1,2]
    curiEvents = [3,4,5]
    goodEvents = [6,7,8]




function yes() {
    alertDiv.remove();
    chance = Randint(1);
    alertDiv = document.createElement("div")
    alertDiv.setAttribute("class", "alertdiv" )
    alertDiv.setAttribute("id", "alertdiv")
    back = document.createElement('button')
    back.setAttribute("id", "yes");
    back.setAttribute("onclick", "cutscene()");
    node = document.createTextNode("Understood!");
    back.appendChild(node);
    body.appendChild(alertDiv);
    alertDiv = document.getElementById("alertdiv")
    
    
    document.body.style.textAlign = "center";
    
    if (eventNom == 3) {
        if (chance == 1) {
                money+=100;
                document.getElementById("alertdiv").innerHTML = "Success! You earned 100 sous.";
                
        } else {
                popul-=5;
                safety-=10;
                document.getElementById("alertdiv").innerHTML = "Failure! For your poor descision, you lost 5 popularity and 10 safety.";

        }
    } else if (eventNom == 4) {
        
            if (chance == 1 && money>=20) {
                    money-=20;
                    happiness+=10;
                    document.getElementById("alertdiv").innerHTML = "Success! You paid 20 sous and gained 10 happiness";
                    
            } else {
                    money = money/2
                    document.getElementById("alertdiv").innerHTML = "The merchantman is scammed you and stole half your money!";

            }
        
    } else if (eventNom == 5) {
        
            if (chance == 1) {
                    
                    safety+=10;
                    document.getElementById("alertdiv").innerHTML = "Success! You got the gun for free and got 10 safety.";
                    
            } else {
                    health = health/2;
                    document.getElementById("alertdiv").innerHTML = "You ran into a crazy person! He shot you with his gun. Your health was halved!";

            }
        
    }
    alertDiv.appendChild(back);

}


function no() {
    alertDiv.remove();
                chance = Randint(1);
                alertDiv = document.createElement("div")
                alertDiv.setAttribute("class", "alertdiv" )
                alertDiv.setAttribute("id", "alertdiv")
                back = document.createElement('button')
                back.setAttribute("id", "yes");
                back.setAttribute("onclick", "cutscene()");
                node = document.createTextNode("Understood!");
                back.appendChild(node);
                body.appendChild(alertDiv);
                alertDiv = document.getElementById("alertdiv")
           
                
                document.body.style.textAlign = "center";
                
                document.getElementById("alertdiv").innerHTML = "How boring, you earned nothing.";
                alertDiv.appendChild(back);
}







function Creddits() {
    alert("Made by Dominic Koh.\nMusic from Super Metroid\nImages from Google\nCurrent Version: Beta v1.0.4\nThanks for playing!")
}



faded = false;


function ActualGame2() {
    try {
        alertDiv = document.getElementById("alertdiv")
        alertDiv.remove();
    } catch {

    }
    
    introtheme.pause();

    valueFade = false
    dead = false
    randomVar = Randint(difficultyMax)
    console.log(randomVar);
    if (randomVar >= happiness && dif!=0) {
        suiDeath();
        return;
    }   else     if (randomVar >= safety && dif!=0) {
        murderDeath();
        return;
    }   else     if (randomVar >= health && dif!=0) {
        sickDeath();
        return;
    } else {

        eventNom = Randint(11);
       
        EventList = ["You got robbed! Your money was halved.", "Assulted! Your safety was halved. You have a bigger target on your back.", "Disease inflicted! Your health was halved. Be careful out there.", "A man on the street looks weak and frail. Rob him?", "A knock on the door. It is a merchantman. He offers a pearl, which will give 10 happiness for only 20 sous! Purchase it?","You are offered a gun for free. It will increase safety by 10. Take it or no?", "You stole some bread from the store and got away! Your health increased by 15!","You managed to earn some extra money. You got 100 sous!","You made a new friend! You gained 10 happiness!", "Price spike! Bread price was doubled!", "Price Spike! Jewel price was doubled!", "Heavy taxes! Income was halved!"]
        badEvents = [0,1,2]
        curiEvents = [3,4,5]
        goodEvents = [6,7,8]
        moneyEvents = [9,10,11]
        function eventHappen() {
            alertDiv = document.createElement("div")
            alertDiv.setAttribute("class", "alertdiv" )
            alertDiv.setAttribute("id", "alertdiv")
            node = document.createTextNode("New alert for the month: "+EventList[eventNom])
    
            alertDiv.appendChild(node);
            document.body.style.textAlign = "center";
            body.append(alertDiv)
            back = document.createElement('button');
            
            if (badEvents.includes(eventNom)) {
                sadtheme.currentTime = 0;
                sadtheme.play();
                sadtheme.loop="true";
                if (eventNom == 0) {
                    money = money/2
    
                } else if (eventNom == 1) {
                    safety = safety/2
                } else if (eventNom == 2) {
                    health = health/2
                }
                back.setAttribute("id", "yes");
                back.setAttribute("onclick", "cutscene()");
                node = document.createTextNode("Understood!");
                back.appendChild(node);
                alertDiv = document.getElementById("alertdiv")
                alertDiv.appendChild(back);
    
    
            } else if (curiEvents.includes(eventNom)) {
    
                back.setAttribute("id", "yes");
                back.setAttribute("onclick","yes()")
                curioustheme.currentTime = 0;
                curioustheme.play();
                curioustheme.loop="true";
                node = document.createTextNode("Yes");
                back.appendChild(node);
                alertDiv = document.getElementById("alertdiv")
                alertDiv.appendChild(back);
    
    
                nope = document.createElement("button")
                nope.setAttribute("id", "no");
                nope.setAttribute("onclick","no()")
                node = document.createTextNode("No");
            
                nope.appendChild(node);
                alertDiv.appendChild(nope)
                document.getElementById("no").style.top = "100px";
                document.getElementById("yes").style.top = "100px";
                
    
    
    
            } else if (goodEvents.includes(eventNom)) {
                happytheme.currentTime = 0;
                happytheme.play();
                happytheme.loop="true";
                if (eventNom == 6) {
                    health+=15
    
                } else if (eventNom == 7) {
                    money+=100
                } else if (eventNom == 8) {
                    happiness+=10
                }
                back.setAttribute("id", "yes");
                back.setAttribute("onclick", "cutscene()");
                node = document.createTextNode("Understood!");
                back.appendChild(node);
                alertDiv = document.getElementById("alertdiv")
                alertDiv.appendChild(back);
            } else {
                moneychange.currentTime = 0;
                moneychange.play();
                moneychange.loop="true";
                if (eventNom == 9) {
                    bread = bread*2
    
                } else if (eventNom == 10) {
                    jewel = jewel*2
                } else if (eventNom == 11) {
                    income = income/2
                    if (income <= 75) {
                        income += 25
                    }
                }
                back.setAttribute("id", "yes");
                back.setAttribute("onclick", "cutscene()");
                node = document.createTextNode("Understood!");
                back.appendChild(node);
                alertDiv = document.getElementById("alertdiv")
                alertDiv.appendChild(back);
            }
        } 
    

        
    }
    
    
    
    
    
    
    introFadeIn = setInterval(FadingIn, 10);
    valueFade = false
    
    opac = 0
    function FadingIn() {
        
        if (faded == true && valueFade == false) {
            valueFade = true
            opac = 0
           
            
        }
        if (opac >= 1) {
            eventHappen()
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }

}
//gamegame
//diff


function cutscene() {
    try {
        happytheme.pause()
    } catch {

    }
    try {
        sadtheme.pause()
    } catch {

    }
    try {
        curioustheme.pause()
    } catch {

    }

    try {
        moneychange.pause()
    } catch {

    }
    
    try {
        alertDiv = document.getElementById("alertdiv")
        alertDiv.remove();
    } catch {

    }
    introText = document.createElement("h1");
    valueFade = false
    introTextDiv = document.createElement("div");
    introTextDiv.setAttribute("id", "CutDiv")
    fell = false
    body.appendChild(introTextDiv)
    if (dif == 0) {
        if (trueMonth == 4 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Estate.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Wtih the current state of the country Louis XVI finally calls up the estates general. There are 3 estates: The clergy being the 1st estate, aristocrats in the second, and common people in the 3rd. This was a very unfair representation of what people wanted.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 5 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/NationalAssembly.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": After being locked out of their regular meeting hall, the 3rd estate occupy the king's Tennis Court, and create the Tennis Court oath, creating National Assembly.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (trueMonth == 6 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Bastille.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": After a bloody battle, the Bastille falls, a torture prison. The guards are beheaded and their heads are paraded through the city. LEt's make that the king's head.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (trueMonth == 7 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Declaration.jpeg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": The Declaration of Rights of Man is made to treate everybody fairly. However, the king rejects the Declaration.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }   else if (trueMonth == 8 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/AmiPeople.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": L'Ami de People was made, and was directed by John Paul Marat. It was a newspaper filled with angry rants from Marat.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 9 && year == 1789) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/WomenMarch.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": In a fit of rage, the women of Paris start an uprisign! Angrily, they march to Versailles, hungry and wanting change. They decimated and killed everything in their way. The king was forced to relocate in Paris");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 5 && year == 1791) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/LouisRuns.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Louis attempts to flee! He makes a run with his family to try and get out of the country, but was quickly captured by the people. He is now under the people's control.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 1 && year == 1792) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/FranceAustria.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Austria, Prussia and Britain declare war on France. ");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }

                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (trueMonth == 3 && year == 1792) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Gull.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": The guilliotine is introduced as France's new national razor.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 0 && year == 1793) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/LouisDeath.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": King Louis the XVI is finally executed.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 9 && year == 1793) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/MarieDies.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Marie Antoinette is executed");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (trueMonth == 0 && year == 1794) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/RobesDeath.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Alas, the end! The man behind the terror: you, are executed. That concludes the reign of terror and our end of the revolution. YOU WON!");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }

            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        CutsDiv = document.getElementById("CutDiv");
                
                        CutsDiv.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                 
                coming = true

                EnterGame()    
            }, 25000);
        } else {
            fell = true
            GameGame()
        }

    } else {
        introText = document.createElement("h1");
        if (popul>=150 && eventHap==0) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Estate.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Wtih the current state of the country Louis XVI finally calls up the estates general. There are 3 estates: The clergy being the 1st estate, aristocrats in the second, and common people in the 3rd. This was a very unfair representation of what people wanted.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                    
            GameGame()}, 25000);
            
        } else if (popul>=250 && eventHap==1) {
            eventHap++;
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/NationalAssembly.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": After being locked out of their regular meeting hall, the 3rd estate occupy the king's Tennis Court, and create the Tennis Court oath, creating National Assembly.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (popul>=350 && eventHap==2) {
            eventHap++;
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Bastille.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": After a bloody battle, the Bastille falls, a torture prison. The guards are beheaded and their heads are paraded through the city. LEt's make that the king's head.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
               
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (popul>=450 && eventHap == 3) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Declaration.jpeg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": The Declaration of Rights of Man is made to treate everybody fairly. However, the king rejects the Declaration.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }   else if (popul>=550 && eventHap==4) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/AmiPeople.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": L'Ami de People was made, and was directed by John Paul Marat. It was a newspaper filled with angry rants from Marat.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (popul>=650 && eventHap==5) {
            eventHap++;
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/WomenMarch.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": In a fit of rage, the women of Paris start an uprisign! Angrily, they march to Versailles, hungry and wanting change. They decimated and killed everything in their way. The king was forced to relocate in Paris");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (popul>=1500 && eventHap==6) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/LouisRuns.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Louis attempts to flee! He makes a run with his family to try and get out of the country, but was quickly captured by the people. He is now under the people's control.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (popul >= 2200 && eventHap==7) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/FranceAustria.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Austria, Prussia and Britain declare war on France. ");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (popul >= 2400 && eventHap==8) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/Gull.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": The guilliotine is introduced as France's new national razor.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (popul >= 3000 && eventHap==9) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/LouisDeath.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": King Louis the XVI is finally executed.");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        } else if (popul >= 3500 && eventHap==10) {
            eventHap++
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/MarieDies.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    node = document.createTextNode(month+" "+year+": Marie Antoinette is executed");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        titleScreen = document.getElementById("CutDiv");
                
                        titleScreen.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                                   
            GameGame()}, 25000);
        }  else if (popul >= 4000 && eventHap==11) {
            mainmenu.currentTime = 0;
            mainmenu.play();
            
            documentHTML.style.backgroundImage = "url(\"Images/RobesDeath.jpg\")"
            introFading = setInterval(FadingIn, 10);
            
            function FadingIn() {
            
                if (faded == true && valueFade == false) {
                    valueFade = true
                    opac = 0
                    yearstook = year-1789;
                    monthstook = trueMonth+yearstook*12;
                    node = document.createTextNode(month+" "+year+": Alas, the end! The man behind the terror: you, are executed. That concludes the reign of terror and our end of the revolution. YOU WON! It only took you "+monthstook+" months to revolutionize France!");
                    introText.appendChild(node);
                    introTextDiv = document.getElementById("CutDiv");
                    introTextDiv.appendChild(introText);
                }
                faded = true;
                if (opac >= 1) {
                    clearInterval(introFading);
                    console.log("stopped")
                    
                } else if (faded == true) {
                    opac+=0.0033;
                    documentHTML.style.opacity = opac; 
                    console.log("working")
                    
                }
                
            }
            setTimeout(() => {
                introFade2 = setInterval(FadeIn, 10);
                opac = 1
                faded = false;
                function FadeIn() {
                    
                    if (opac <= 0) {
                        
                        clearInterval(introFade2);
                        console.log("stopped")
                        faded = true
                        CutsDiv = document.getElementById("CutDiv");
                
                        CutsDiv.remove();
            
                    } else {
                        opac-=0.0033; 
                        documentHTML.style.opacity = opac; 
                        console.log("working")
                    }
                }
                 
                coming = true

                EnterGame()    
            }, 25000);

        } else {
            fell = true
            GameGame()
        }

        

        try {
            introTextDiv = document.getElementById("introDiv");
            introDiv.remove()
        } catch {
    
        }
    }
}

difficultyNegMax = 0

function GameGame() {
    if (dif==0) {
        difficultyNegMax = 5
    } else if (dif==1) {
        difficultyNegMax = 3
    }  else if (dif==2) {
        difficultyNegMax = 5
    }  else if (dif==3) {
        difficultyNegMax = 7
    } 
    try {
        mainmenu.pause()
    } catch {

    }
    riot = false;
    newdaytheme.currentTime = 0;
    newdaytheme.play();
    newdaytheme.loop="true";
    documentHTML.style.backgroundImage = "url(\"Images/Home.jpg\")"
    if (safety > 100) {
        safety = 100;
    }
    if (health > 100) {
        health = 100;
    }
    if (happiness > 100) {
        health = 100;
    }
    if (safety < 0) {
        safety = 0;
    }
    if (health < 0) {
        health = 0;
    }
    if (happiness < 0) {
        health = 0;
    }
    if (popul < 0) {
        popul = 0
    }
    dated = month+" "+year;
    try {
        introTextDiv = document.getElementById("introDiv");
        introDiv.remove()
    } catch {

    }


    introFading = setInterval(FadingIn, 10);
    
    function FadingIn() {
        preaching = false
    
        if (faded == true && valueFade == false) {
            valueFade = true
            opac = 0

        }
        if (opac >= 1) {
            clearInterval(introFading);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }



    populpack = false
    dateHead = document.createElement("h1");
    dateHead.setAttribute("id", "dateHead")
    node = document.createTextNode(dated)
    dateHead.appendChild(node)
    body.appendChild(dateHead)
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("id", "gameDiv");
    gameDiv.setAttribute("class", "gameDiv");
    body.appendChild(gameDiv)
    gameDiv = document.getElementById("gameDiv")



    foodDiv = document.createElement("div");
    foodDiv.setAttribute("id", "foodDiv");
    gameDiv.appendChild(foodDiv);

    foodText = document.createElement("h3")
    foodText.setAttribute("id", "foodText")
    foodDiv.appendChild(foodText);
    document.getElementById("foodText").innerHTML = "Purchase bread amount:"


    foodDiv = document.getElementById("foodDiv");
    foodInput = document.createElement("input")
    foodInput.setAttribute("id","foodinput");
    foodInput.setAttribute("type", "number")
    foodDiv.appendChild(foodInput);

    foodprice = document.createElement("h4")
    foodprice.setAttribute("id", "foodprice")
    foodDiv.appendChild(foodprice);
    document.getElementById("foodprice").innerHTML = "Price: "+bread+ " sous";

    jewDiv = document.createElement("div");
    jewDiv.setAttribute("id", "jewDiv");
    gameDiv.appendChild(jewDiv);

    jewText = document.createElement("h3")
    jewText.setAttribute("id", "jewText")
    jewDiv.appendChild(jewText);
    document.getElementById("jewText").innerHTML = "Purchase jewelery amount:"


    jewDiv = document.getElementById("jewDiv");
    jewInput = document.createElement("input")
    jewInput.setAttribute("id","jewinput");
    jewInput.setAttribute("type", "number")
    jewDiv.appendChild(jewInput);

    jewprice = document.createElement("h4")
    jewprice.setAttribute("id", "jewprice")
    jewDiv.appendChild(jewprice);
    document.getElementById("jewprice").innerHTML = "Price: "+jewel+ " sous";



    if (popul >= 2000) {
        enfDiv = document.createElement("div");
        enfDiv.setAttribute("id", "enfDiv");
        gameDiv.appendChild(enfDiv);


        enfText = document.createElement("h3")
        enfText.setAttribute("id", "enfText")
        enfDiv.appendChild(enfText);
        document.getElementById("enfText").innerHTML = "Enforcement: Trade 1 popularity for 2 sous:"


        enfDiv = document.getElementById("enfDiv");
        enfInput = document.createElement("input")
        enfInput.setAttribute("id","enfinput");
        enfInput.setAttribute("type", "number")
        enfDiv.appendChild(enfInput);

        enfprice = document.createElement("h4")
        enfprice.setAttribute("id", "enfprice")
        enfDiv.appendChild(enfprice);
        document.getElementById("enfprice").innerHTML = "Rate: 0.5 popularity/sous";
    } else {
            enfDiv = document.createElement("div");
            enfDiv.setAttribute("id", "enfDiv");
            gameDiv.appendChild(enfDiv);

            enfText = document.createElement("h3")
            enfText.setAttribute("id", "enfText")
            enfDiv.appendChild(enfText);
            document.getElementById("enfText").innerHTML = "Enforcement: Unlocks at 2000 popularity"
    
    
            enfDiv = document.getElementById("enfDiv");
            enfInput = document.createElement("h2")
            enfInput.setAttribute("id","enfinput");

            enfDiv.appendChild(enfInput);
            document.getElementById("enfinput").innerHTML = "Locked";
    
            enfprice = document.createElement("h4")
            enfprice.setAttribute("id", "enfprice")
            enfDiv.appendChild(enfprice);
            document.getElementById("enfprice").innerHTML = "Rate: 0.5 popularity/sous";
        
    }
    jourDiv = document.createElement("div");
    jourDiv.setAttribute("id", "jourDiv");
    gameDiv.appendChild(jourDiv);

    jourText = document.createElement("h3")
    jourText.setAttribute("id", "jourText")
    jourDiv.appendChild(jourText);
    document.getElementById("jourText").innerHTML = "Journal:"




    jourprice = document.createElement("h4")
    jourprice.setAttribute("id", "journal")
    jourDiv.appendChild(jourprice);
    document.getElementById("journal").innerHTML = "Results from recent actions will apear here!";


    preachDiv = document.createElement("div");
    preachDiv.setAttribute("id", "preachDiv");
    gameDiv.appendChild(preachDiv);


    preachText = document.createElement("h3")
    preachText.setAttribute("id", "preachText")
    preachDiv.appendChild(preachText);
    document.getElementById("preachText").innerHTML = "Preach: Gain some random stuff, good or bad"


    preachDiv = document.getElementById("preachDiv");
    preachInput = document.createElement("button")
    preachInput.setAttribute("id","preachinput");
    preachInput.setAttribute("type", "number")
    preachInput.setAttribute("onclick", "Preach()")
    preachDiv.appendChild(preachInput);
    document.getElementById("preachinput").innerHTML = "Preach";





    if (popul >= 500) {
        riotDiv = document.createElement("div");
        riotDiv.setAttribute("id", "riotDiv");
        gameDiv.appendChild(riotDiv);


        riotText = document.createElement("h3")
        riotText.setAttribute("id", "riotText")
        riotDiv.appendChild(riotText);
        document.getElementById("riotText").innerHTML = "Riot: Gains 25 popularity for a random trait*10"


        riotDiv = document.getElementById("riotDiv");
        riotInput = document.createElement("button")
        riotInput.setAttribute("id","riotinput");
        
        riotInput.setAttribute("onclick", "Riot()")
        riotDiv.appendChild(riotInput);
        document.getElementById("riotinput").innerHTML = "Riot";


    } else {
            riotDiv = document.createElement("div");
            riotDiv.setAttribute("id", "riotDiv");
            gameDiv.appendChild(riotDiv);

            riotText = document.createElement("h3")
            riotText.setAttribute("id", "riotText")
            riotDiv.appendChild(riotText);
            document.getElementById("riotText").innerHTML = "Riot: Unlocks at 500 popularity"
    
    
            riotDiv = document.getElementById("riotDiv");
            riotInput = document.createElement("h2")
            riotInput.setAttribute("id","riotinput");

            riotDiv.appendChild(riotInput);
            document.getElementById("riotinput").innerHTML = "Locked";
    

        
    }
    StatsDiv = document.createElement("div");
    StatsDiv.setAttribute("id", "StatsDiv");
    gameDiv.appendChild(StatsDiv);

    StatsText = document.createElement("h3")
    StatsText.setAttribute("id", "Money")
    StatsDiv.appendChild(StatsText);
    document.getElementById("Money").innerHTML = "Money: "+money+"sous"




    Statsprice = document.createElement("h3")
    Statsprice.setAttribute("id", "Income")
    StatsDiv.appendChild(Statsprice);
    document.getElementById("Income").innerHTML = "This month's income: "+income+" sous";

    StatsText = document.createElement("h3")
    StatsText.setAttribute("id", "Popul")
    StatsDiv.appendChild(StatsText);
    document.getElementById("Popul").innerHTML = "Popularity: "+popul;


    MoreStatsDiv = document.createElement("div");
    MoreStatsDiv.setAttribute("id", "MoreStatsDiv");
    gameDiv.appendChild(MoreStatsDiv);

    MoreStatsText = document.createElement("h3")
    MoreStatsText.setAttribute("id", "Happiness")
    MoreStatsDiv.appendChild(MoreStatsText);
    if (happiness < 26) {
        document.getElementById("Happiness").innerHTML = "Happiness (LOW!): "+happiness+"/100"
    } else {
        document.getElementById("Happiness").innerHTML = "Happiness: "+happiness+"/100"
    }
    




    MoreStatsprice = document.createElement("h3")
    MoreStatsprice.setAttribute("id", "Safety")
    MoreStatsDiv.appendChild(MoreStatsprice);
    if (safety < 26) {
        document.getElementById("Safety").innerHTML = "This month's safety (LOW!): "+safety+"/100";
    } else {
        document.getElementById("Safety").innerHTML = "This month's safety: "+safety+"/100";
    }
    

    MoreStatsText = document.createElement("h3")
    MoreStatsText.setAttribute("id", "Health")
    MoreStatsDiv.appendChild(MoreStatsText);
    if (health < 26) {
        document.getElementById("Health").innerHTML = "Health: (LOW!)"+health+"/100";
    } else {
        document.getElementById("Health").innerHTML = "Health: "+health+"/100";
    }
    
    MoreButton = document.createElement("button");
    MoreButton.setAttribute("id", "NextTurn")
    MoreButton.setAttribute("onclick", "NextTurn()")
    MoreStatsDiv.appendChild(MoreButton);
    document.getElementById("NextTurn").innerHTML = "End Month";



    if (difficultyNegMax-difficutyNeg == 0) {
        shop1Div = document.createElement("div");
        shop1Div.setAttribute("id", "shop1Div");
        gameDiv.appendChild(shop1Div);


        shop1Text = document.createElement("h3")
        shop1Text.setAttribute("id", "shop1Text")
        shop1Div.appendChild(shop1Text);
        document.getElementById("shop1Text").innerHTML = "Shop:"

        shop1Text2 = document.createElement("h4")
        shop1Text2.setAttribute("id", "shop1Text2")
        shop1Div.appendChild(shop1Text2);
        document.getElementById("shop1Text2").innerHTML = "Herb of power: 1000 sous, Lose less stats! "
        
        shop1Div = document.getElementById("shop1Div");
        shop1Input = document.createElement("button")
        shop1Input.setAttribute("id","shop1input");
        
        shop1Input.setAttribute("onclick", "shop1()")
        shop1Div.appendChild(shop1Input);
        document.getElementById("shop1input").innerHTML = "Buy";


    } else {
            shop1Div = document.createElement("div");
            shop1Div.setAttribute("id", "shop1Div");
            gameDiv.appendChild(shop1Div);

            shop1Text = document.createElement("h3")
            shop1Text.setAttribute("id", "shop1Text")
            shop1Div.appendChild(shop1Text);
            document.getElementById("shop1Text").innerHTML = "Shop:"

            shop1Text2 = document.createElement("h4")
            shop1Text2.setAttribute("id", "shop1Text2")
            shop1Div.appendChild(shop1Text2);
            document.getElementById("shop1Text2").innerHTML = "Herb of power: 1000 sous, Lose less stats! (You have purchased the maximum amount)"
    
    
            shop1Div = document.getElementById("shop1Div");
            shop1Input = document.createElement("h2")
            shop1Input.setAttribute("id","shop1input");

            shop1Div.appendChild(shop1Input);
            document.getElementById("shop1input").innerHTML = "Out Of Stock";
    }
 
    shop2Div = document.createElement("div");
    shop2Div.setAttribute("id", "shop2Div");
    gameDiv.appendChild(shop2Div);



    shop2Text2 = document.createElement("h4")
    shop2Text2.setAttribute("id", "shop2Text2")
    shop2Div.appendChild(shop2Text2);
    document.getElementById("shop2Text2").innerHTML = "Survival Value Pack: 300 sous, Almost about to die? Gain 25 of each stat! "
    
    shop2Div = document.getElementById("shop2Div");
    shop2Input = document.createElement("button")
    shop2Input.setAttribute("id","shop2input");
    
    shop2Input.setAttribute("onclick", "shop2()")
    shop2Div.appendChild(shop2Input);
    document.getElementById("shop2input").innerHTML = "Buy";

    
    if (!populpack) {
        shop3Div = document.createElement("div");
        shop3Div.setAttribute("id", "shop3Div");
        gameDiv.appendChild(shop3Div);


        shop3Text = document.createElement("h3")
        shop3Text.setAttribute("id", "shop3Text")
        shop3Div.appendChild(shop3Text);
        document.getElementById("shop3Text").innerHTML = "Shop:"

        shop3Text2 = document.createElement("h4")
        shop3Text2.setAttribute("id", "shop3Text2")
        shop3Div.appendChild(shop3Text2);
        document.getElementById("shop3Text2").innerHTML = "Poster Pack: 50 sous, gain 25 popularity! "
        
        shop3Div = document.getElementById("shop3Div");
        shop3Input = document.createElement("button")
        shop3Input.setAttribute("id","shop3input");
        
        shop3Input.setAttribute("onclick", "shop3()")
        shop3Div.appendChild(shop3Input);
        document.getElementById("shop3input").innerHTML = "Buy";


    } else {
            shop3Div = document.createElement("div");
            shop3Div.setAttribute("id", "shop3Div");
            gameDiv.appendChild(shop3Div);

            shop3Text = document.createElement("h3")
            shop3Text.setAttribute("id", "shop3Text")
            shop3Div.appendChild(shop3Text);
            document.getElementById("shop3Text").innerHTML = "shop3"

            shop3Text2 = document.createElement("h4")
            shop3Text2.setAttribute("id", "shop3Text2")
            shop3Div.appendChild(shop3Text2);
            document.getElementById("shop3Text2").innerHTML = "Poster Pack: 50 sous, gain 25 popularity! (You have purchased the maximum amount)"
    
    
            shop3Div = document.getElementById("shop3Div");
            shop3Input = document.createElement("h2")
            shop3Input.setAttribute("id","shop3input");

            shop3Div.appendChild(shop3Input);
            document.getElementById("shop3input").innerHTML = "Out Of Stock";
    }



    shop4Div = document.createElement("div");
    shop4Div.setAttribute("id", "shop4Div");
    gameDiv.appendChild(shop4Div);



    shop4Text2 = document.createElement("h4")
    shop4Text2.setAttribute("id", "shop4Text2")
    shop4Div.appendChild(shop4Text2);
    incprice = Math.floor(income*1.5)
    document.getElementById("shop4Text2").innerHTML = "Better Facilities: "+incprice+" sous, Not making enough money? Upgrade your facilities!"
    
    shop4Div = document.getElementById("shop4Div");
    shop4Input = document.createElement("button")
    shop4Input.setAttribute("id","shop4input");
    
    shop4Input.setAttribute("onclick", "shop4()")
    shop4Div.appendChild(shop4Input);
    document.getElementById("shop4input").innerHTML = "Buy";




}






populpack = false




preaching = false;
function Preach() {
    if (preaching == false) {
        preaching = true;
        chance = Randint(20) 
        if (chance == 0) {
            popul += 100
            document.getElementById("journal").innerHTML = "You spoke wise words. You gained 100 popularity!";
            updateStats()
        } else if (chance ==1) {
            popul -= 25
            document.getElementById("journal").innerHTML = "Your words are revered!. You lost 25 popularity!";
            updateStats()
        } else if (chance >=2 && chance <=5) {
            popul += 75;
            document.getElementById("journal").innerHTML = "You spoke good words. You gained 75 popularity!";
            updateStats()
        } else if (chance >6 && chance <=9) {
            popul -= 10;
            document.getElementById("journal").innerHTML = "Your words are offensive! You lost 10 popularity!";
            updateStats()
        } else if (chance >=10 && chance <=12) {
            money+=25;
            document.getElementById("journal").innerHTML = "Great words! You were tipped 25 sous."
            updateStats()
        } else if (chance >=13 && chance <=16) {
            money-=10;
            document.getElementById("journal").innerHTML = "Are you stupid!? An angry mob stole 10 sous from you."
            updateStats()
        } else if (chance >=17 && chance <=18) {
            money+=10;
            document.getElementById("journal").innerHTML = "Good efforts! You were tipped 10 sous."
            updateStats()
        } else if (chance >=19 && chance <=20) {
            money-=5;
            document.getElementById("journal").innerHTML = "What? An upset group stole 5 sous from you."
            updateStats()
        }
        
    }
}


riot = false;


function Riot() {
    if (riot == false) {
        riot = true;
        chance = Randint(3); 
        if (chance == 0) {
            popul += 25
            happiness-=10
            document.getElementById("journal").innerHTML = "You rioted and lost 10 happiness. You gained 100 popularity!";
            updateStats()
        } else if (chance ==1) {
            popul += 25
            safety-=10
            document.getElementById("journal").innerHTML = "You rioted and lost 10 safety. You gained 100 popularity!";
            updateStats()
        } else if (chance ==2) {
            popul += 25
            health-=10
            document.getElementById("journal").innerHTML = "You rioted and lost 10 health. You gained 100 popularity!";
       
            updateStats()
        } else if (chance == 3) {
            popul += 25
            money-=50
            document.getElementById("journal").innerHTML = "You rioted and lost 50 sous. You gained 100 popularity!";
            updateStats()
        }
        
    }
}


function shop1() {
    if (money>=1000) {
        difficutyNeg-=1
        money-=1000
        document.getElementById("journal").innerHTML  = "Purchased Herb of Power! Your life should be easier now."
        updateStats()
    } else {
        document.getElementById("journal").innerHTML  = "You don't have the money to purchase that!"
    }
}
 

function shop2() {
    if (money>=300) {
        health+=25
        happiness+=25
        safety+=25
        money-=300

        document.getElementById("journal").innerHTML  = "Purchased Survival Value Pack! Your stats have increased by 25!"
        
        updateStats()
    } else {
        document.getElementById("journal").innerHTML  = "You don't have the money to purchase that!"
    }
}

function shop3() {
    
    if (money>=50) {
        populpack = true
        popul+=25
        money-=50

        document.getElementById("journal").innerHTML = "Purchased Poster Pack! Your popularity rose by 25!"
        updateStats()
    } else {
        document.getElementById("journal") = "You don't have the money to purchase that!"
    }
    
}

function shop4() {

    incprice = Math.floor(income*1.5)
    if (money>=incprice) {
      
        income+=50
        money-=incprice

        document.getElementById("journal").innerHTML  = "Purchased Better Facilities! You now earn 50 sous more per month!"
        updateStats()
    } else {
        document.getElementById("journal").innerHTML  = "You don't have the money to purchase that!"
    }
}


function updateStats() {
    
    if (health < 0) {
        health = 0
    }
    if (happiness <0) {
        happiness = 0
    } 
    if (safety <0) {
        safety = 0
    }

    if (money < 0) {
        money = 0
    }

    if (popul < 0) {
        popul = 0
    }
    StatsDiv  = document.getElementById("StatsDiv")
    StatsDiv.remove()
    MoreStatsDiv = document.getElementById("MoreStatsDiv")
    MoreStatsDiv.remove()
    shop1Div = document.getElementById("shop1Div")
    shop1Div.remove()
    shop2Div = document.getElementById("shop2Div")
    shop2Div.remove()
    shop3Div = document.getElementById("shop3Div")
    shop3Div.remove()
    shop4Div = document.getElementById("shop4Div")
    shop4Div.remove()


    StatsDiv = document.createElement("div");
    StatsDiv.setAttribute("id", "StatsDiv");
    gameDiv.appendChild(StatsDiv);

    StatsText = document.createElement("h3")
    StatsText.setAttribute("id", "Money")
    StatsDiv.appendChild(StatsText);
    document.getElementById("Money").innerHTML = "Money: "+money+"sous"
 



    Statsprice = document.createElement("h3")
    Statsprice.setAttribute("id", "Income")
    StatsDiv.appendChild(Statsprice);
    document.getElementById("Income").innerHTML = "This month's income: "+income+" sous";

    StatsText = document.createElement("h3")
    StatsText.setAttribute("id", "Popul")
    StatsDiv.appendChild(StatsText);
    document.getElementById("Popul").innerHTML = "Popularity: "+popul;


    MoreStatsDiv = document.createElement("div");
    MoreStatsDiv.setAttribute("id", "MoreStatsDiv");
    gameDiv.appendChild(MoreStatsDiv);

    MoreStatsText = document.createElement("h3")
    MoreStatsText.setAttribute("id", "Happiness")
    MoreStatsDiv.appendChild(MoreStatsText);
    if (happiness < 26) {
        document.getElementById("Happiness").innerHTML = "Happiness (LOW!): "+happiness+"/100"
    } else {
        document.getElementById("Happiness").innerHTML = "Happiness: "+happiness+"/100"
    }
    




    MoreStatsprice = document.createElement("h3")
    MoreStatsprice.setAttribute("id", "Safety")
    MoreStatsDiv.appendChild(MoreStatsprice);
    if (safety < 26) {
        document.getElementById("Safety").innerHTML = "This month's safety (LOW!): "+safety+"/100";
    } else {
        document.getElementById("Safety").innerHTML = "This month's safety: "+safety+"/100";
    }
    

    MoreStatsText = document.createElement("h3")
    MoreStatsText.setAttribute("id", "Health")
    MoreStatsDiv.appendChild(MoreStatsText);
    if (health < 26) {
        document.getElementById("Health").innerHTML = "Health: (LOW!)"+health+"/100";
    } else {
        document.getElementById("Health").innerHTML = "Health: "+health+"/100";
    }
    
    MoreButton = document.createElement("button");
    MoreButton.setAttribute("id", "NextTurn")
    MoreButton.setAttribute("onclick", "NextTurn()")
    MoreStatsDiv.appendChild(MoreButton);
    document.getElementById("NextTurn").innerHTML = "End Month";



    if (difficultyNegMax-difficutyNeg == 0) {
        shop1Div = document.createElement("div");
        shop1Div.setAttribute("id", "shop1Div");
        gameDiv.appendChild(shop1Div);


        shop1Text = document.createElement("h3")
        shop1Text.setAttribute("id", "shop1Text")
        shop1Div.appendChild(shop1Text);
        document.getElementById("shop1Text").innerHTML = "Shop:"

        shop1Text2 = document.createElement("h4")
        shop1Text2.setAttribute("id", "shop1Text2")
        shop1Div.appendChild(shop1Text2);
        document.getElementById("shop1Text2").innerHTML = "Herb of power: 1000 sous, Lose less stats! "
        
        shop1Div = document.getElementById("shop1Div");
        shop1Input = document.createElement("button")
        shop1Input.setAttribute("id","shop1input");
        
        shop1Input.setAttribute("onclick", "shop1()")
        shop1Div.appendChild(shop1Input);
        document.getElementById("shop1input").innerHTML = "Buy";


    } else {
            shop1Div = document.createElement("div");
            shop1Div.setAttribute("id", "shop1Div");
            gameDiv.appendChild(shop1Div);

            shop1Text = document.createElement("h3")
            shop1Text.setAttribute("id", "shop1Text")
            shop1Div.appendChild(shop1Text);
            document.getElementById("shop1Text").innerHTML = "Shop:"

            shop1Text2 = document.createElement("h4")
            shop1Text2.setAttribute("id", "shop1Text2")
            shop1Div.appendChild(shop1Text2);
            document.getElementById("shop1Text2").innerHTML = "Herb of power: 1000 sous, Lose less stats! (You have purchased the maximum amount)"
    
    
            shop1Div = document.getElementById("shop1Div");
            shop1Input = document.createElement("h2")
            shop1Input.setAttribute("id","shop1input");

            shop1Div.appendChild(shop1Input);
            document.getElementById("shop1input").innerHTML = "Out Of Stock";
    }
 
    shop2Div = document.createElement("div");
    shop2Div.setAttribute("id", "shop2Div");
    gameDiv.appendChild(shop2Div);



    shop2Text2 = document.createElement("h4")
    shop2Text2.setAttribute("id", "shop2Text2")
    shop2Div.appendChild(shop2Text2);
    document.getElementById("shop2Text2").innerHTML = "Survival Value Pack: 300 sous, Almost about to die? Gain 25 of each stat! "
    
    shop2Div = document.getElementById("shop2Div");
    shop2Input = document.createElement("button")
    shop2Input.setAttribute("id","shop2input");
    
    shop2Input.setAttribute("onclick", "shop2()")
    shop2Div.appendChild(shop2Input);
    document.getElementById("shop2input").innerHTML = "Buy";

    
    if (!populpack) {
        shop3Div = document.createElement("div");
        shop3Div.setAttribute("id", "shop3Div");
        gameDiv.appendChild(shop3Div);



        shop3Text2 = document.createElement("h4")
        shop3Text2.setAttribute("id", "shop3Text2")
        shop3Div.appendChild(shop3Text2);
        document.getElementById("shop3Text2").innerHTML = "Poster Pack: 50 sous, gain 25 popularity! "
        
        shop3Div = document.getElementById("shop3Div");
        shop3Input = document.createElement("button")
        shop3Input.setAttribute("id","shop3input");
        
        shop3Input.setAttribute("onclick", "shop3()")
        shop3Div.appendChild(shop3Input);
        document.getElementById("shop3input").innerHTML = "Buy";


    } else {
            shop3Div = document.createElement("div");
            shop3Div.setAttribute("id", "shop3Div");
            gameDiv.appendChild(shop3Div);



            shop3Text2 = document.createElement("h4")
            shop3Text2.setAttribute("id", "shop3Text2")
            shop3Div.appendChild(shop3Text2);
            document.getElementById("shop3Text2").innerHTML = "Poster Pack: 50 sous, gain 25 popularity! (You have purchased the maximum amount)"
    
    
            shop3Div = document.getElementById("shop3Div");
            shop3Input = document.createElement("h2")
            shop3Input.setAttribute("id","shop3input");

            shop3Div.appendChild(shop3Input);
            document.getElementById("shop3input").innerHTML = "Out Of Stock";
    }



    shop4Div = document.createElement("div");
    shop4Div.setAttribute("id", "shop4Div");
    gameDiv.appendChild(shop4Div);



    shop4Text2 = document.createElement("h4")
    shop4Text2.setAttribute("id", "shop4Text2")
    shop4Div.appendChild(shop4Text2);
    incprice = Math.floor(income*1.5)
    document.getElementById("shop4Text2").innerHTML = "Better Facilities: "+incprice+" sous, Not making enough money? Upgrade your facilities!"
    
    shop4Div = document.getElementById("shop4Div");
    shop4Input = document.createElement("button")
    shop4Input.setAttribute("id","shop4input");
    
    shop4Input.setAttribute("onclick", "shop4()")
    shop4Div.appendChild(shop4Input);
    document.getElementById("shop4input").innerHTML = "Buy";    
}









function NextTurn() {
    
    breadStock = 0;
    jewelStock = 0;
    enforcement = 0;
    try {
        breadStock = document.getElementById("foodinput").value;
        console.log(breadStock)
        jewelStock = document.getElementById("jewinput").value;
        if (money < (jewelStock*jewel)+(breadStock*bread)) {
            alert("Error: You don't have enough money to pay for your expenses!")
            return;
        }

        
    } catch {
        alert("Error: One of your inputs was invalid.")
        return;
    }


    try {
        enforcement = document.getElementById("").value;
        if (popul < enforcement) {
            alert("Error: You don't have enough population to enforce that!")
            return;
        }

        
    } catch {
        enforcement = 0;
    }
    dateHead = document.getElementById("dateHead");
    dateHead.remove()
    gameDiv = document.getElementById("gameDiv");
    gameDiv.remove()
    newdaytheme.pause()
    

    money-= (jewelStock*jewel)
    money-= (breadStock*bread)
    happiness += 5*jewelStock
    console.log(breadStock)
    health += (breadStock-15)*difficutyNeg;
    console.log(health)
    money+=enforcement*2;
    popul-=enforcement;


    inflationOp = Randint(1);
    inflation1 = Randint(10)+5;
    inflation2 = Randint(10)+5;
    if (inflation1 >= inflation2) {
        inflation3 = inflation2-Randint(5);
    } else {
        inflation3 = inflation1-Randint(5);
    }
    inflation1 = inflation1/100;
    inflation2 = inflation2/100;
    inflation3 = inflation3/100;
    console.log(inflationOp+"inflation Op, 0 = -")
    if (inflationOp==0) {
        income = Math.floor(income*(1-inflation1))
        bread = Math.floor(bread*(1-(inflation2/2)))
        jewel = Math.floor(jewel *(1-(inflation3/2)))
    } else {
        income = Math.floor(income*(1+inflation1))
        bread = Math.floor(bread*(1+inflation2))
        jewel = Math.floor(jewel *(1+inflation3))
    }
    trueMonth++
    if (trueMonth > 11) {
        trueMonth = 0
        year++
    } 
    month = monthList[trueMonth]
    happiness-=difficutyNeg;
    money+=income
    safety+=10-difficutyNeg

    if (bread <= 5) {
        bread++
    }
    if (jewel <= 7) {
        jewel++
    }
    if (income <= 75) {
        income+=25
    }
    localsave("money", money);
    localsave("month", month);
    localsave("income",income);
    localsave("bread", bread);
    localsave("jewel", jewel);
    localsave("popul",popul);
    localsave("year", year);
    localsave("trueMonth", trueMonth);
    localsave("happiness", happiness);
    localsave("health",health);
    localsave("safety", safety);
    localsave("eventHap", eventHap);
    localsave("dif",dif)
    localsave("difficultyNeg", difficutyNeg)
    localsave("difficultyMax", difficultyMax)
    ActualGame2();
}

















//actualGame

function Game() {
    
    introFade = setInterval(FadeIn, 10);
    opac = 1
    faded = false;
    function FadeIn() {
        
        if (opac <= 0) {
            documentHTML.style.backgroundImage = "url(\"Images/poverty.jpg\")"
            clearInterval(introFade);
            console.log("stopped")
            faded = true
            titleScreen = document.getElementById("titleScreen");
    
            titleScreen.remove();

        } else {
            opac-=0.0033; 
            documentHTML.style.opacity = opac; 
            console.log("working")
        }
    }
    
    mainmenu.pause();
    introtheme.currentTime  = 0;
    introtheme.play();
    introtheme.loop="true";
    

    
    
    introTextDiv = document.createElement("div");
    introTextDiv.setAttribute("id","introDiv")
    
    
    body.appendChild(introTextDiv)

    document.getElementById("introDiv").style.padding = "3em";

    
    introText = document.createElement("p");
    introText.setAttribute("id", "introText")


    introFadeIn = setInterval(FadingIn, 10);
    valueFade = false
    function FadingIn() {
        
        if (faded == true && valueFade == false) {
            valueFade = true
            opac = 0
            node = document.createTextNode("The year is 1789. The people of France are starving, poor, fatigued and uneducated. The price for food had been jacked up, and many were barely survivng. The nobility and rich were prioritized over the common people. Almost everyone in France is extremely unhappy. The majority of the population use 88% of their income on basic food, such as bread. They pray everyday that their lives will one day be better...");
            introText.appendChild(node);
            introTextDiv = document.getElementById("introDiv");
            introTextDiv.appendChild(introText);
        }
        if (opac >= 1) {
            clearInterval(introFadeIn);
            console.log("stopped")
            
        } else if (faded == true) {
            opac+=0.0033;
            documentHTML.style.opacity = opac; 
            console.log("working")
            
        }
    }

    setTimeout(() => {
        introFade2 = setInterval(FadeIn, 10);
        opac = 1
        faded = false;
        function FadeIn() {
            
            if (opac <= 0) {
                documentHTML.style.backgroundImage = "url(\"Images/Louis.jpg\")"
                clearInterval(introFade2);
                console.log("stopped")
                faded = true
                titleScreen = document.getElementById("titleScreen");
        
                titleScreen.remove();
    
            } else {
                opac-=0.0033; 
                documentHTML.style.opacity = opac; 
                console.log("working")
            }
        }
        
        mainmenu.pause();
        introtheme.play();
        introtheme.loop="true";

        introTextDiv = document.getElementById("introDiv");

        introTextDiv.remove();
        
    
        
        
        introTextDiv = document.createElement("div");
        introTextDiv.setAttribute("id","introDiv")
        
        
    
        body.appendChild(introTextDiv)
    
        document.getElementById("introDiv").style.padding = "3em";
    
        
        introText = document.createElement("p");
        introText.setAttribute("id", "introText")
    
    
        introFade2In = setInterval(FadingIn, 10);
        valueFade = false
        function FadingIn() {
            
            if (faded == true && valueFade == false) {
                valueFade = true
                opac = 0
                node = document.createTextNode("Meanwhile, the king, Louis XVI, and his Austrian wife live in luxury, without care for the people below them. The people up above have little to no care about the people living under them. As those people continue to suffer, the monarchy, the nobles, and rich continue to spend their money in ignorance of the poor. Marie Antoinette, Louis XVI's wife, spends half of France's money on fashion. Meanwhile, nothing changes...");
                introText.appendChild(node);
                introTextDiv = document.getElementById("introDiv");
                introTextDiv.appendChild(introText);
                document.getElementById("introText").style.color = "#ffffff";
            }
            if (opac >= 1) {
                clearInterval(introFade2In);
                console.log("stopped")
                
            } else if (faded == true) {
                opac+=0.0033;
                documentHTML.style.opacity = opac; 
                console.log("working")
                
            }
        }
      }, 25000);

      setTimeout(() => {
        introFade3 = setInterval(FadeIn, 10);
        opac = 1
        faded = false;
        function FadeIn() {
            
            if (opac <= 0) {
                documentHTML.style.backgroundImage = "url(\"Images/FranceFames.jpg\")"
                clearInterval(introFade3);
                console.log("stopped")
                faded = true

    
            } else {
                opac-=0.0033; 
                documentHTML.style.opacity = opac; 
                console.log("working")
            }
        }
        
        mainmenu.pause();
        introtheme.play();
        introtheme.loop="true";

        introTextDiv = document.getElementById("introDiv");

        introTextDiv.remove();
        
    
        
        
        introTextDiv = document.createElement("div");
        introTextDiv.setAttribute("id","introDiv")
        
        
    
        body.appendChild(introTextDiv)
    
        document.getElementById("introDiv").style.padding = "3em";
    
        
        introText = document.createElement("p");
        introText.setAttribute("id", "introText")
    
    
        introFade3In = setInterval(FadingIn, 10);
        valueFade = false
        function FadingIn() {
            
            if (faded == true && valueFade == false) {
                valueFade = true
                opac = 0
                node = document.createTextNode("And soon, as the people become more and more unhappy, change is bound to come. Inspired by the age of Elightenment, a new era will soon begin... Little did anyone expect, that a young lawyer by the name of Maximilien Robespierre would step up...");
                introText.appendChild(node);
                introTextDiv = document.getElementById("introDiv");
                introTextDiv.appendChild(introText);
                document.getElementById("introText").style.color = "#ffffff";
            }
            if (opac >= 1) {
                clearInterval(introFade3In);
                console.log("stopped")
                
            } else if (faded == true) {
                opac+=0.0033;
                documentHTML.style.opacity = opac; 
                console.log("working")
                
            }
        }
      }, 50000);
      setTimeout(() => {
        alert("Before you start:\nRation your food intake well. You never know when it could be stolen.\nKeep your happiness up or you willl commit suicide\nKeep safety up or you wil be murdered\nKeep health up or you will fall ill and die.\nRandom events can happen every month.")
        ActualGame();
        

      }, 62500)

}



/*function ContinueGame() {
    try {

    }


}*/
function removehlp() {
    window.close()
}

function helpopen() {
    window.open("help.html")
}