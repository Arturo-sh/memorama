/*let level = document.getElementById("level_number").getAttribute('value');
function submit(){
  alert('your level is ' + level);
}*/
const information = document.querySelector(".information");
let openClose = 0;
const info = async() => {
    if (openClose % 2 == 0) information.classList.replace("closed", "open");
    else information.classList.replace("open", "closed");

    openClose++;
};
async function refresh() {
    history.go(0);
}
let x;
let startstop = 0;
async function start() {
    if (startstop === 0) {
        x = setInterval(timer, 1000);
        document.getElementById("start").innerHTML = "Reiniciar";
        startstop++;
    }
} /* Start */
function stop() {
    clearInterval(x);
} /* Stop */

let sec = 0; /* holds incrementing value */
let min = 0;

/* Contains and outputs returned value of  function checkTime */

let secOut = 0;
let minOut = 0;

/* Output variable End */

function timer() {
    /* Main Timer */

    sec++;
    secOut = checkTime(sec);
    minOut = checkTime(min);
    if (sec == 60) {
        min = ++min;
        sec = 0;
    }

    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
document.addEventListener("DOMContentLoaded", () => {
    //timer
    //CARD
    let cardArray = [{
            name: "juarez",
            img: "./assets/juarez.png",
        },
        {
            name: "juarez",
            img: "./assets/juarez.png",
        },
        {
            name: "cuauhtemoc",
            img: "./assets/cuauhtemoc.jpg",
        },
        {
            name: "cuauhtemoc",
            img: "./assets/cuauhtemoc.jpg",
        },
        {
            name: "hidalgo",
            img: "./assets/hidalgo.jpg",
        },
        {
            name: "hidalgo",
            img: "./assets/hidalgo.jpg",
        },
        {
            name: "morelos",
            img: "./assets/morelos.jpg",
        },
        {
            name: "morelos",
            img: "./assets/morelos.jpg",
        },
        {
            name: "sorjuana",
            img: "./assets/sorjuana.webp",
        },
        {
            name: "sorjuana",
            img: "./assets/sorjuana.webp",
        },
        {
            name: "villa",
            img: "./assets/villa.jpg",
        },
        {
            name: "villa",
            img: "./assets/villa.jpg",
        },
    ];

    cardArray.sort(() => 0.5 - Math.random()); //to randomly put the cards
    let stopVar = 0;
    const grid = document.querySelector(".grid");
    const headline = document.querySelector("#headline");
    const resultDisplay = document.querySelector("#result");
    let cardsChoosen = [];
    let cardsChoosenID = [];
    let cardsWon = [];
    //create a board

    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement("img");
            card.setAttribute("src", "./assets/question%20mark.png");
            card.setAttribute("data-id", index);
            card.setAttribute("alt", `image${index}`);
            card.setAttribute("style", "max-width: 90px !important; max-height: 90px !important; margin: 0 auto;");
            card.addEventListener("click", start);

            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }
    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll("img");
        const optionOneId = cardsChoosenID[0];
        const optionTwoId = cardsChoosenID[1];
        if (cardsChoosen[0] === cardsChoosen[1]) {
            headline.textContent = "😄 Has encontrado un par +10";
            cards[optionOneId].setAttribute("src", "./assets/blank.png");
            cards[optionTwoId].setAttribute("src", "./assets/blank.png");
            cardsWon.push(cardsChoosen);

            // Dentro de los siguientes alert va la informacion de cada personaje historico
            var infoJuarez = "Aqui va la informacion ...";
            var infoCuauhtemoc = "";
            var infoHidalgo = "";
            var infoMorelos = "";
            var infoSorjuana = "";
            var infoVilla = "";

            switch (cardsChoosen[0]) {
                case "juarez":
                    alert(infoJuarez);
                    break;
                case "cuauhtemoc":
                    alert();
                    break;
                case "hidalgo":
                    alert();
                    break;
                case "morelos":
                    alert();
                    break;
                case "sorjuana":
                    alert();
                    break;
                case "villa":
                    alert();
                    break;
                default:
                    alert("No se encontro el nombre");
            }
            // Fin de la informacion de cada personaje historico
            sec -= 1;

        } else {
            cards[optionOneId].setAttribute("src", "./assets/question mark.png");
            cards[optionTwoId].setAttribute("src", "./assets/question mark.png");
            headline.textContent = "😞 Lo siento, intentalo de nuevo";
        }
        //for claering the cardsChoosen array
        cardsChoosen = [];
        cardsChoosenID = [];
        resultDisplay.textContent = cardsWon.length * 10 - sec - min * 60;
        if (cardsWon.length === cardArray.length / 2) {
            headline.textContent = "😄Felicidades has ganado!🔥🔥🔥";
            stop();
            stopVar++;
        }
    }
    // flip your card

    function flipCard() {
        if (stopVar == 0) {
            //console.log(cardsChoosen);
            let cardID = this.getAttribute("data-id");
            cardsChoosen.push(cardArray[cardID].name);
            cardsChoosenID.push(cardID);
            this.setAttribute("src", cardArray[cardID].img);
            if (cardsChoosen.length === 2) {
                setTimeout(checkForMatch, 400);
            }
        }
    }

    //main event

    createBoard();
});