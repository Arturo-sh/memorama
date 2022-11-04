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
            let contenedor = document.createElement("div");
            contenedor.setAttribute("style", "min-width: 90px !important; max-width: 90px !important; min-height: 90px !important; max-height: 90px !important; margin: 0 auto;");

            let card = document.createElement("img");
            card.setAttribute("src", "./assets/question%20mark.png");
            card.setAttribute("data-id", index);
            card.setAttribute("alt", `image${index}`);
            card.setAttribute("style", "max-width: 90px !important; max-height: 90px !important; margin: 0 auto;");
            card.addEventListener("click", start);

            card.addEventListener("click", flipCard);
            grid.appendChild(contenedor);
            contenedor.appendChild(card);
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
            var infoJuarez = `Benito Pablo Juárez García (1806-1872)
El ex presidente Benito Juárez García nació el 21 de marzo de 1806 en San Pablo Guelatao, Oaxaca. Tuvo una niñez precaria y durante años estudió por sí mismo, hasta que llegó a la ciudad de Oaxaca, donde ingresó al seminario; ahí concluyó estudios de Latín, Filosofía y Teología.
Benito Juárez fue un gobernante que fundó Escuelas Normales, reconstruyo el Palacio de Gobierno y dejó excedentes en la hacienda estatal. Sus inicios en la política datan del año 1831, cuando se desempeñó como Regidor del Ayuntamiento de Oaxaca. En 1833 fue elegido diputado y, en el año 1847, asumió como gobernador de Oaxaca.
Fue un político mexicano indígena y abogado, la vida de Benito Juárez se vuelve relevante al momento de enumerar los muchos logros y empresas que realizó a través de sus días; de origen zapoteca, Juárez llegaría a ocupar la presidencia de México en repetidas ocasiones, y realizaría uno de los hechos más importantes de la vida del país, al proclamar las leyes de reforma, con las que la separación entre los bienes de la iglesia y del Estado se volvería una realidad.
En 1857 fue electo presidente de la Suprema Corte de Justicia, labor que desempeñó hasta diciembre de ese año, cuando se hizo cargo de la Presidencia mexicana. Es el primer y único presidente de origen indígena de México: su mandato duró 5 periodos: de 1857 a 1872.`;
            var infoCuauhtemoc = `Cuauhtémoc (1496-1525)
Cuauhtémoc, cuyo nombre náhuatl significa “Sol que desciende” o “Águila que desciende”, fue el último huey tlatoani o rey-sacerdote azteca, quien tomó el mando para defender a su pueblo en plena conquista española, dirigiendo con gran destreza la defensa de Tenochtitlán en 1521, hasta el momento en que fue capturado por los españoles.
Estuvó prisionero hasta 1526, fue torturado y asesinado el 28 de febrero de ese año por Hernán Cortés al considerarlo conspirador por rumores de un supuesto complot, cuando lo llevaba cautivo durante el viaje a Las Hibueras, Honduras. Así fue como terminó el último Huey Tlatoani mexica.`;
            var infoHidalgo = `Miguel Gregorio Antonio Ignacio Hidalgo y Costilla Gallaga Mandarte y Villaseñor (1753-1811)
Miguel Hidalgo y Costilla fue un insurgente y sacerdote mexicano, nació el 8 de mayo de 1753 en la hacienda de San Diego de Corralejo, Pénjamo, Guanajuato. Cursó estudios en el Colegio de San Nicolás, Valladolid (actual Morelia), del que llegó a ser rector. En 1778, fue ordenado sacerdote y en 1803 se hizo cargo de la parroquia de Dolores, Guanajuato. Se preocupó por mejorar las condiciones de sus feligreses, casi todos indígenas, enseñándoles a cultivar viñedos, la cría de abejas y a dirigir pequeñas industrias de loza y ladrillos.
En 1809 se unió a una sociedad secreta formada en Valladolid, cuyo fin era reunir un congreso para gobernar la Nueva España para obtener la independencia del país. Descubiertos los conjurados, la insurrección se trasladó a Querétaro donde se reunió con Ignacio Allende. El 16 de septiembre de 1810, llevando como estandarte a la virgen de Guadalupe, lanzó el llamado grito de Dolores que inició la gesta independentista y, acompañado de Allende, consiguió reunir un ejército formado por más de cuarenta mil personas. Tomaron Guanajuato y Guadalajara, sin embargo, decidieron no ocupar la ciudad de México.
El 11 de enero de 1811, Hidalgo fue derrotado cerca de Guadalajara por las fuerzas realistas. Escapó hacia el norte, pero fue capturado y condenado a muerte. Su cabeza, junto a la de Allende y a la de otros insurgentes, se exhibió como escarmiento en la alhóndiga de Granaditas de Guanajuato. Tras el establecimiento de la República Mexicana, en 1824, se le reconoció como primer insurgente y Padre de la Patria.`; //En su honor, un estado de la República y la ciudad de Dolores, llevan su nombre. El 16 de septiembre, día en que proclamó su rebelión, se celebra el Día de la Independencia en México.`;
            var infoMorelos = `José María Morelos y Pavón (1765-1815)
José María Morelos y Pavón fue un sacerdote, militar y político novohispano que destacó como el jefe insurgente de la segunda etapa de organización en la Guerra de Independencia de México (1811 a 1815). Hijo de José Manuel Morelos, carpintero y de Juana María Guadalupe Pérez Pavón, criolla hija de un maestro de escuela, nació en la antigua villa mexicana de Valladolid (hoy llamada Morelia en su honor) y estudió durante los primeros años de su vida con su abuelo paterno. Estudió la carrera de sacerdote en el Colegio de San Nicolás y en 1789 entró al seminario de Valladolid, donde se graduó en 1795. En 1799 fue nombrado cura de Carácuaro, donde permaneció hasta 1810.
Fue comisionado por Miguel Hidalgo, el 20 de octubre de 1810 en Charo, Michoacán, como jefe insurgente en el sur de México, encargado de tomar ranchos y ciudades importantes, así como la comunicación con los puertos de Asia, principalmente con Manila, Filipinas, que ese entonces, era parte de la Nueva España. Su principal encomienda fue ocupar el puerto de Acapulco, considerado estratégico para la comunicación de la Nueva España.
Desde 1811 y hasta el inicio de su declive militar en 1814, Morelos, ayudado por muchos lugartenientes, logró conquistar la mayor parte del sur del país y una parte del centro, en la región del actual estado de Morelos, donde se desarrolló, entre el 9 de febrero y el 2 de mayo de 1812, su acción militar más famosa, el Sitio de Cuautla, en la ciudad homónima, que lo convirtió en el principal enemigo del ejército realista.`;
            var infoSorjuana = `Juana Inés de Asbaje Ramírez de Santillana (1648-1695)
Juana Inés de Asbaje Ramírez de Santillananota, más conocida como sor Juana Inés de la Cruz o Juana de Asbaje, fue una religiosa jerónima y escritora novohispana, exponente del Siglo de Oro de la literatura en español. También incorporó el náhuatl clásico a su creación poética.
Considerada por muchos como la décima musa, cultivó la lírica, el auto sacramental y el teatro, así como la prosa. Con muy temprana edad aprendió a leer y a escribir. Perteneció a la corte de Antonio Sebastián de Toledo Molina y Salazar, marqués de Mancera y 25º virrey novohispano. En 1669, por anhelo de conocimiento, ingresó a la vida monástica. Sus más importantes mecenas fueron los virreyes De Mancera, el arzobispo virrey Payo Enríquez de Rivera y los marqueses de la Laguna de Camero Viejo, virreyes también de la Nueva España, quienes publicaron los dos primeros tomos de sus obras en la España peninsular. Gracias a Juan Ignacio María de Castorena Ursúa y Goyeneche, obispo de Yucatán, se conoce la obra que sor Juana tenía inédita cuando fue condenada a destruir sus escritos.
Sor Juana Inés de la Cruz ocupó, junto con Bernardo de Balbuena, Juan Ruiz de Alarcón y Carlos de Sigüenza y Góngora, un destacado lugar en la literatura novohispana. En el campo de la lírica, su trabajo se adscribe a los lineamientos del barroco español en su etapa tardía. La producción lírica de Sor Juana, que supone la mitad de su obra, es un crisol donde convergen la cultura de una Nueva España en apogeo, el culteranismo de Góngora y la obra conceptista de Quevedo y Calderón.
La obra dramática de sor Juana va de lo religioso a lo profano.`; // Sus obras más destacables en este género son Amor es más laberinto, Los empeños de una casa y una serie de autos sacramentales concebidos para representarse en la corte.`; Sor Juana murió a causa de una epidemia el 17 de abril de 1695 en el Convento de San Jerónimo.
            var infoVilla = `José Doroteo Arango Arámbula (1878-1923)
José Doroteo Arango Arámbula, conocido por su seudónimo Francisco Villa o por su hipocorístico Pancho Villa, fue un militar mexicano que se destacó como uno de los principales jefes de la Revolución mexicana reconocido como un icono popular de la cultura de México, cuya actuación militar fue decisiva para la derrota del régimen del entonces presidente Victoriano Huerta. Originario del estado de Durango, nació en la hacienda de Río Grande actualmente La Coyotada, San Juan del Río, el 5 de junio de 1878 y murió asesinado en una emboscada en Hidalgo del Parral (Chihuahua) el 20 de julio de 1923 a manos de Jesús Salas Barraza. Durante la revolución fue conocido como El Centauro del Norte.
Comandante de la División del Norte, fue caudillo en el estado norteño de Chihuahua, el cual, dado su tamaño, riqueza mineral y también la proximidad a los Estados Unidos de América, le proporcionó cuantiosos recursos. Villa fue gobernador provisional de Chihuahua en 1913 y 1914. El dominio de Villa al norte de México terminó en 1915, a través de una serie de derrotas que sufrió en Celaya y Agua Prieta a manos de Álvaro Obregón y Plutarco Elías Calles. Después del ataque de Villa a Columbus, en 1916, el general John J. Pershing trató infructuosamente de capturar a Villa durante un año.
Villa y sus seguidores, conocidos como villistas, expropiaron las tierras de los hacendados para distribuirlas a los campesinos y soldados. Se apoderó de trenes y, como varios generales revolucionarios, usó dinero fiduciario impreso para pagar por su causa.`;

            switch (cardsChoosen[0]) {
                case "juarez":
                    alert(infoJuarez);
                    break;
                case "cuauhtemoc":
                    alert(infoCuauhtemoc);
                    break;
                case "hidalgo":
                    alert(infoHidalgo);
                    break;
                case "morelos":
                    alert(infoMorelos);
                    break;
                case "sorjuana":
                    alert(infoSorjuana);
                    break;
                case "villa":
                    alert(infoVilla);
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
