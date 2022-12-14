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
            headline.textContent = "???? Has encontrado un par +10";
            cards[optionOneId].setAttribute("src", "./assets/blank.png");
            cards[optionTwoId].setAttribute("src", "./assets/blank.png");
            cardsWon.push(cardsChoosen);

            // Dentro de los siguientes alert va la informacion de cada personaje historico
            var infoJuarez = `Benito Pablo Ju??rez Garc??a (1806-1872)
El ex presidente Benito Ju??rez Garc??a naci?? el 21 de marzo de 1806 en San Pablo Guelatao, Oaxaca. Tuvo una ni??ez precaria y durante a??os estudi?? por s?? mismo, hasta que lleg?? a la ciudad de Oaxaca, donde ingres?? al seminario; ah?? concluy?? estudios de Lat??n, Filosof??a y Teolog??a.
Benito Ju??rez fue un gobernante que fund?? Escuelas Normales, reconstruyo el Palacio de Gobierno y dej?? excedentes en la hacienda estatal. Sus inicios en la pol??tica datan del a??o 1831, cuando se desempe???? como Regidor del Ayuntamiento de Oaxaca. En 1833 fue elegido diputado y, en el a??o 1847, asumi?? como gobernador de Oaxaca.
Fue un pol??tico mexicano ind??gena y abogado, la vida de Benito Ju??rez se vuelve relevante al momento de enumerar los muchos logros y empresas que realiz?? a trav??s de sus d??as; de origen zapoteca, Ju??rez llegar??a a ocupar la presidencia de M??xico en repetidas ocasiones, y realizar??a uno de los hechos m??s importantes de la vida del pa??s, al proclamar las leyes de reforma, con las que la separaci??n entre los bienes de la iglesia y del Estado se volver??a una realidad.
En 1857 fue electo presidente de la Suprema Corte de Justicia, labor que desempe???? hasta diciembre de ese a??o, cuando se hizo cargo de la Presidencia mexicana. Es el primer y ??nico presidente de origen ind??gena de M??xico: su mandato dur?? 5 periodos: de 1857 a 1872.`;
            var infoCuauhtemoc = `Cuauht??moc (1496-1525)
Cuauht??moc, cuyo nombre n??huatl significa ???Sol que desciende??? o ?????guila que desciende???, fue el ??ltimo huey tlatoani o rey-sacerdote azteca, quien tom?? el mando para defender a su pueblo en plena conquista espa??ola, dirigiendo con gran destreza la defensa de Tenochtitl??n en 1521, hasta el momento en que fue capturado por los espa??oles.
Estuv?? prisionero hasta 1526, fue torturado y asesinado el 28 de febrero de ese a??o por Hern??n Cort??s al considerarlo conspirador por rumores de un supuesto complot, cuando lo llevaba cautivo durante el viaje a Las Hibueras, Honduras. As?? fue como termin?? el ??ltimo Huey Tlatoani mexica.`;
            var infoHidalgo = `Miguel Gregorio Antonio Ignacio Hidalgo y Costilla Gallaga Mandarte y Villase??or (1753-1811)
Miguel Hidalgo y Costilla fue un insurgente y sacerdote mexicano, naci?? el 8 de mayo de 1753 en la hacienda de San Diego de Corralejo, P??njamo, Guanajuato. Curs?? estudios en el Colegio de San Nicol??s, Valladolid (actual Morelia), del que lleg?? a ser rector. En 1778, fue ordenado sacerdote y en 1803 se hizo cargo de la parroquia de Dolores, Guanajuato. Se preocup?? por mejorar las condiciones de sus feligreses, casi todos ind??genas, ense????ndoles a cultivar vi??edos, la cr??a de abejas y a dirigir peque??as industrias de loza y ladrillos.
En 1809 se uni?? a una sociedad secreta formada en Valladolid, cuyo fin era reunir un congreso para gobernar la Nueva Espa??a para obtener la independencia del pa??s. Descubiertos los conjurados, la insurrecci??n se traslad?? a Quer??taro donde se reuni?? con Ignacio Allende. El 16 de septiembre de 1810, llevando como estandarte a la virgen de Guadalupe, lanz?? el llamado grito de Dolores que inici?? la gesta independentista y, acompa??ado de Allende, consigui?? reunir un ej??rcito formado por m??s de cuarenta mil personas. Tomaron Guanajuato y Guadalajara, sin embargo, decidieron no ocupar la ciudad de M??xico.
El 11 de enero de 1811, Hidalgo fue derrotado cerca de Guadalajara por las fuerzas realistas. Escap?? hacia el norte, pero fue capturado y condenado a muerte. Su cabeza, junto a la de Allende y a la de otros insurgentes, se exhibi?? como escarmiento en la alh??ndiga de Granaditas de Guanajuato. Tras el establecimiento de la Rep??blica Mexicana, en 1824, se le reconoci?? como primer insurgente y Padre de la Patria.`; //En su honor, un estado de la Rep??blica y la ciudad de Dolores, llevan su nombre. El 16 de septiembre, d??a en que proclam?? su rebeli??n, se celebra el D??a de la Independencia en M??xico.`;
            var infoMorelos = `Jos?? Mar??a Morelos y Pav??n (1765-1815)
Jos?? Mar??a Morelos y Pav??n fue un sacerdote, militar y pol??tico novohispano que destac?? como el jefe insurgente de la segunda etapa de organizaci??n en la Guerra de Independencia de M??xico (1811 a 1815). Hijo de Jos?? Manuel Morelos, carpintero y de Juana Mar??a Guadalupe P??rez Pav??n, criolla hija de un maestro de escuela, naci?? en la antigua villa mexicana de Valladolid (hoy llamada Morelia en su honor) y estudi?? durante los primeros a??os de su vida con su abuelo paterno. Estudi?? la carrera de sacerdote en el Colegio de San Nicol??s y en 1789 entr?? al seminario de Valladolid, donde se gradu?? en 1795. En 1799 fue nombrado cura de Car??cuaro, donde permaneci?? hasta 1810.
Fue comisionado por Miguel Hidalgo, el 20 de octubre de 1810 en Charo, Michoac??n, como jefe insurgente en el sur de M??xico, encargado de tomar ranchos y ciudades importantes, as?? como la comunicaci??n con los puertos de Asia, principalmente con Manila, Filipinas, que ese entonces, era parte de la Nueva Espa??a. Su principal encomienda fue ocupar el puerto de Acapulco, considerado estrat??gico para la comunicaci??n de la Nueva Espa??a.
Desde 1811 y hasta el inicio de su declive militar en 1814, Morelos, ayudado por muchos lugartenientes, logr?? conquistar la mayor parte del sur del pa??s y una parte del centro, en la regi??n del actual estado de Morelos, donde se desarroll??, entre el 9 de febrero y el 2 de mayo de 1812, su acci??n militar m??s famosa, el Sitio de Cuautla, en la ciudad hom??nima, que lo convirti?? en el principal enemigo del ej??rcito realista.`;
            var infoSorjuana = `Juana In??s de Asbaje Ram??rez de Santillana (1648-1695)
Juana In??s de Asbaje Ram??rez de Santillananota, m??s conocida como sor Juana In??s de la Cruz o Juana de Asbaje, fue una religiosa jer??nima y escritora novohispana, exponente del Siglo de Oro de la literatura en espa??ol. Tambi??n incorpor?? el n??huatl cl??sico a su creaci??n po??tica.
Considerada por muchos como la d??cima musa, cultiv?? la l??rica, el auto sacramental y el teatro, as?? como la prosa. Con muy temprana edad aprendi?? a leer y a escribir. Perteneci?? a la corte de Antonio Sebasti??n de Toledo Molina y Salazar, marqu??s de Mancera y 25?? virrey novohispano. En 1669, por anhelo de conocimiento, ingres?? a la vida mon??stica. Sus m??s importantes mecenas fueron los virreyes De Mancera, el arzobispo virrey Payo Enr??quez de Rivera y los marqueses de la Laguna de Camero Viejo, virreyes tambi??n de la Nueva Espa??a, quienes publicaron los dos primeros tomos de sus obras en la Espa??a peninsular. Gracias a Juan Ignacio Mar??a de Castorena Urs??a y Goyeneche, obispo de Yucat??n, se conoce la obra que sor Juana ten??a in??dita cuando fue condenada a destruir sus escritos.
Sor Juana In??s de la Cruz ocup??, junto con Bernardo de Balbuena, Juan Ruiz de Alarc??n y Carlos de Sig??enza y G??ngora, un destacado lugar en la literatura novohispana. En el campo de la l??rica, su trabajo se adscribe a los lineamientos del barroco espa??ol en su etapa tard??a. La producci??n l??rica de Sor Juana, que supone la mitad de su obra, es un crisol donde convergen la cultura de una Nueva Espa??a en apogeo, el culteranismo de G??ngora y la obra conceptista de Quevedo y Calder??n.
La obra dram??tica de sor Juana va de lo religioso a lo profano.`; // Sus obras m??s destacables en este g??nero son Amor es m??s laberinto, Los empe??os de una casa y una serie de autos sacramentales concebidos para representarse en la corte.`; Sor Juana muri?? a causa de una epidemia el 17 de abril de 1695 en el Convento de San Jer??nimo.
            var infoVilla = `Jos?? Doroteo Arango Ar??mbula (1878-1923)
Jos?? Doroteo Arango Ar??mbula, conocido por su seud??nimo Francisco Villa o por su hipocor??stico Pancho Villa, fue un militar mexicano que se destac?? como uno de los principales jefes de la Revoluci??n mexicana reconocido como un icono popular de la cultura de M??xico, cuya actuaci??n militar fue decisiva para la derrota del r??gimen del entonces presidente Victoriano Huerta. Originario del estado de Durango, naci?? en la hacienda de R??o Grande actualmente La Coyotada, San Juan del R??o, el 5 de junio de 1878 y muri?? asesinado en una emboscada en Hidalgo del Parral (Chihuahua) el 20 de julio de 1923 a manos de Jes??s Salas Barraza. Durante la revoluci??n fue conocido como El Centauro del Norte.
Comandante de la Divisi??n del Norte, fue caudillo en el estado norte??o de Chihuahua, el cual, dado su tama??o, riqueza mineral y tambi??n la proximidad a los Estados Unidos de Am??rica, le proporcion?? cuantiosos recursos. Villa fue gobernador provisional de Chihuahua en 1913 y 1914. El dominio de Villa al norte de M??xico termin?? en 1915, a trav??s de una serie de derrotas que sufri?? en Celaya y Agua Prieta a manos de ??lvaro Obreg??n y Plutarco El??as Calles. Despu??s del ataque de Villa a Columbus, en 1916, el general John J. Pershing trat?? infructuosamente de capturar a Villa durante un a??o.
Villa y sus seguidores, conocidos como villistas, expropiaron las tierras de los hacendados para distribuirlas a los campesinos y soldados. Se apoder?? de trenes y, como varios generales revolucionarios, us?? dinero fiduciario impreso para pagar por su causa.`;

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
            headline.textContent = "???? Lo siento, intentalo de nuevo";
        }
        //for claering the cardsChoosen array
        cardsChoosen = [];
        cardsChoosenID = [];
        resultDisplay.textContent = cardsWon.length * 10 - sec - min * 60;
        if (cardsWon.length === cardArray.length / 2) {
            headline.textContent = "????Felicidades has ganado!????????????";
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
