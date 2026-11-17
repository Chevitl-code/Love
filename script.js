
/* =========================================
   UNA SORPRESA PARA ESCARLET ♡

   CONFIGURACIÓN PERSONALIZABLE
========================================= */


/* =========================================
   1. RESPUESTAS DEL FORMULARIO
========================================= */

const identity = {
    firstName: "Escarlet",
    lastName: "Zúñiga Farfan",
    age: "15",
    crush: "Benjamin"
};


/* =========================================
   2. MÚSICA
========================================= */

const music = {
    title: "Mi Historia de Amor",
    artist: "Daniel Calveti",

    spotifyEmbed:
        "https://open.spotify.com/embed/track/4Io9nq91YUZNcCeQ0zDcID?utm_source=generator"
};


/* =========================================
   3. FOTOGRAFÍAS

   Coloca tus imágenes dentro de la carpeta
   llamada "imagenes".
========================================= */


const photos = [

    {
        src: "imagenes/foto1.jpeg",
        caption: "Un beso hermoso ♡"
    },

    {
        src: "imagenes/foto2.jpeg",
        caption: "Un momento que nunca olvidaré"
    },

    {
        src: "imagenes/foto3.jpeg",
        caption: "Una de las mejores noches de ftitos"
    },

    {
        src: "imagenes/foto4.jpeg",
        caption: "Del mejor verano su mejor pijama"
    },

    {
        src: "imagenes/foto5.jpeg",
        caption: "Nuestro primer recuerdo juntos que creamos con nuestras manos ♡"
    },

    {
        src: "imagenes/foto6.jpeg",
        caption: "Y Pensar que su padre estaba ahi ♡"
    },

    {
        src: "imagenes/foto7.jpeg",
        caption: "Unos de los dias mas divertidos que pudimos vivir ♡"
    },

    {
        src: "imagenes/foto8.jpeg",
        caption: "Yo la quiero a mi lado de la mano en cada iglesia en el que estemos♡"
    },


    {
        src: "imagenes/foto9.jpeg",
        caption: "Esad dos sombras seran en el futuro unos viejitos, y la sombra quedara guardada ♡"
    },

    {
        src: "imagenes/foto10.jpeg",
        caption: "Rico tutito ♡"
    },

    {
        src: "imagenes/foto11.jpeg",
        caption: "Septiembre 17, el mejor Primer beso, sera la primera y ultima en darle uno lindura ♡"
    }
];



/* =========================================
   4. CARTA PERSONALIZADA

   Escribe aquí lo que quieras dedicarle.
========================================= */

const letter = {

    paragraph1:
        "Aquí comienza la carta que te eh quetido escribir, se por todo lo que hemos pasado y como de dificil fue para usted, sufrio y fue terriblemente quebrantada, perdoneme por no haber actuado de la misma manera que usted queria al obtener mi celular.",

    paragraph2:
        "Pero quiero agradecerle todo, todo en absoluto, gracias por seguir conmigo, por amarme aun, por ser constante, por tener Fe en Dios, gracias porque enverdad aunque se haiga sentido de lo peor aun sigue aca, intentandolo y no rindiendose cm lo pude haver echo yo, soy debil y frajil y cada problema que veo solo veo a un proximo adulto que no estara feliz en su vida, ese es mi miedo, tengo espinas, heridas al igual que usted es por eso que sigo aca, quiero ayudarle y no ser un estorbo.",

    paragraph3:
        "Y se que armo demasiados problemas y en verdad lo siento, algunas veces nisiquiera se porque soy tan malo y solo actuo sin sentimientos, algunas veces mis emociones no estan cm si fuese un robot, no me gusta para nd eso y es por eso que le pido a Dios que me ayude y guarde, y sip, Dios hace de todo, no le echo la culpa porque si el hizo todo eso es por su voluntad y amor, nose exactamente porque fue esto pero se que lo hizo y permitio para lograr mejores cosas.",


    paragraph3:
        "Solo quiero decirle, que en verdad estoy intentando armar al niño quien queria, intento ser mas tranquilo y paciente, acompañarla en sus momentos de estres o triztesas, intento estar siempre para usted, se que no es suficiente y necesita mas de mi como algunas peticiones mas que usted desearia, pero voy a mi ritmo y me gusta ya que siento que de apoco apoco me estoy construyendo y usted me esta ayudando, gracias por absolutamente todo y yo no pienso dejarla ni enamorarme de alguien mas asik tranquilita, Te amo mucho my baby canelita <3.",


    signature:
        "Con mucho cariño ♡"

};


/* =========================================
   5. PREMIOS DE LA RULETA

   Puedes agregar o quitar premios.
========================================= */

const prizes = [

    "Una fotito de lo que quiera de mi ♡",
    "Un dibujo de cualquier flor que me pida",
    "Una sorpresita",
    "cada dia por 7 dias levantarnos dandole un mensaje lindo",
    "Un Poema mejorado",
    "Doble apuesta para mi",
    "Doble apuesta para usted",
    "Una llamada de 10 minutos para hablar de lo que quiera",
    "Un mensaje de voz de lo que quiera",
    "Un video de lo que quiera",
    "Un dibujo de lo que quiera",
    "citarle en audio el poema que decida o yo quiera",
    
];


/* =========================================
   FIN DE PERSONALIZACIÓN

   NO NECESITAS MODIFICAR LO DE ABAJO.
========================================= */



/* =========================================
   6. FORMULARIO
========================================= */

const form = document.getElementById("identityForm");

const formScreen = document.getElementById("formScreen");
const treasureScreen = document.getElementById("treasureScreen");
const formMessage = document.getElementById("formMessage");


function normalize(value) {

    return String(value)
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

}


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const crush = document.getElementById("crush").value;

    const correct =

        normalize(firstName) === normalize(identity.firstName) &&

        normalize(lastName) === normalize(identity.lastName) &&

        normalize(age) === normalize(identity.age) &&

        normalize(crush) === normalize(identity.crush);


    if (correct) {

        formMessage.textContent =
            "¡Lo sabía! Esta sorpresa es para ti ♡";

        setTimeout(() => {

            formScreen.classList.add("hidden");

            treasureScreen.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    } else {

        formMessage.textContent =
            "Mmm... parece que alguna respuesta no coincide. Inténtalo otra vez ♡";

    }

});



/* =========================================
   7. APERTURA DE LOS SOBRES
========================================= */

const envelopeCards =
    document.querySelectorAll(".envelope-card");

const modals =
    document.querySelectorAll(".modal");

const closeButtons =
    document.querySelectorAll(".close");


envelopeCards.forEach(card => {

    card.addEventListener("click", () => {

        const modalId = card.dataset.modal;

        const modal = document.getElementById(modalId);

        if (modal) {

            modal.classList.remove("hidden");

            document.body.style.overflow = "hidden";

            if (modalId === "wheelModal") {

                drawWheel();

            }

        }

    });

});
function closeModal(modal) {

    modal.classList.add("hidden");

    document.body.style.overflow = "";

}


closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        closeModal(button.closest(".modal"));

    });

});


/* Cerrar al pulsar fuera del contenido */

modals.forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal(modal);

        }

    });

});


/* Cerrar con ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modals.forEach(modal => {

            if (!modal.classList.contains("hidden")) {

                closeModal(modal);

            }

        });

    }

});



/* =========================================
   8. CONFIGURAR LA MÚSICA
========================================= */


const spotifyEmbed =
    document.getElementById("spotifyEmbed");


if (music.spotifyEmbed.trim() !== "") {

    const iframe = document.createElement("iframe");

    iframe.src = music.spotifyEmbed;

    iframe.width = "100%";

    iframe.height = "152";

    iframe.title = "Reproductor de Spotify";

    iframe.allow =
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

    iframe.loading = "lazy";

    iframe.setAttribute("frameborder", "0");

    iframe.setAttribute("allowfullscreen", "");

    spotifyEmbed.appendChild(iframe);

}






/* =========================================
   9. GALERÍA DE FOTOGRAFÍAS
========================================= */

const photoGallery =
    document.getElementById("photoGallery");


photos.forEach(photo => {

    const figure = document.createElement("figure");

    const img = document.createElement("img");

    img.src = photo.src;

    img.alt = photo.caption;

    img.loading = "lazy";

    const caption = document.createElement("figcaption");

    caption.textContent = photo.caption;

    img.onerror = () => {

        img.alt = "No se pudo cargar esta fotografía";

    };

    figure.appendChild(img);

    figure.appendChild(caption);

    photoGallery.appendChild(figure);

});



/* =========================================
   10. CONFIGURAR LA CARTA
========================================= */

document.getElementById("letterParagraph1").textContent =
    letter.paragraph1;

document.getElementById("letterParagraph2").textContent =
    letter.paragraph2;

document.getElementById("letterParagraph3").textContent =
    letter.paragraph3;

document.getElementById("signature").textContent =
    letter.signature;



/* =========================================
   11. RULETA DE PREMIOS
========================================= */

const canvas = document.getElementById("wheel");

const ctx = canvas.getContext("2d");

const spinButton =
    document.getElementById("spinButton");

const wheelResult =
    document.getElementById("wheelResult");


const colors = [

    "#b96e78",
    "#e6b7b3",
    "#d5b17d",
    "#885866",
    "#d99a9d",
    "#c38a70",
    "#a97582",
    "#ead3c5"

];


let rotation = 0;

let spinning = false;



/* DIBUJAR RULETA */

function drawWheel() {

    const total = prizes.length;

    if (total < 2) return;

    const center = canvas.width / 2;

    const radius = center - 5;

    const slice = (Math.PI * 2) / total;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.save();

    ctx.translate(center, center);

    ctx.rotate(rotation);


    for (let i = 0; i < total; i++) {

        const start = -Math.PI / 2 + i * slice;

        const end = start + slice;


        // Dibujar sector

        ctx.beginPath();

        ctx.moveTo(0, 0);

        ctx.arc(
            0,
            0,
            radius,
            start,
            end
        );

        ctx.closePath();

        ctx.fillStyle = colors[i % colors.length];

        ctx.fill();

        ctx.strokeStyle = "#fff8f3";

        ctx.lineWidth = 5;

        ctx.stroke();


        // Dibujar texto

        ctx.save();

        ctx.rotate(start + slice / 2);

        ctx.textAlign = "right";

        ctx.textBaseline = "middle";

        ctx.fillStyle = "#ffffff";

        ctx.font = "bold 24px DM Sans, sans-serif";


        let label = prizes[i];

        if (label.length > 17) {

            label = label.substring(0, 15) + "...";

        }

        ctx.fillText(
            label,
            radius - 25,
            0
        );

        ctx.restore();

    }


    // Centro de la ruleta

    ctx.beginPath();

    ctx.arc(
        0,
        0,
        38,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#fffdfb";

    ctx.fill();

    ctx.strokeStyle = "#c9a66b";

    ctx.lineWidth = 5;

    ctx.stroke();

    ctx.fillStyle = "#774653";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.font = "30px Georgia";

    ctx.fillText("♡", 0, 2);

    ctx.restore();

}



/* CALCULAR PREMIO GANADOR */

function getWinner() {

    const slice = (Math.PI * 2) / prizes.length;

    const normalizedRotation =

        ((-rotation % (Math.PI * 2)) + Math.PI * 2) %
        (Math.PI * 2);

    const index = Math.floor(
        normalizedRotation / slice
    );

    return prizes[index];

}



/* ANIMACIÓN DE GIRO */

function spinWheel() {

    if (spinning || prizes.length < 2) return;

    spinning = true;

    spinButton.disabled = true;

    spinButton.textContent = "Girando... ♡";

    wheelResult.textContent = "";


    const extraTurns = 6 + Math.random() * 4;

    const randomAngle = Math.random() * Math.PI * 2;

    const startRotation = rotation;

    const targetRotation =

        startRotation +
        extraTurns * Math.PI * 2 +
        randomAngle;


    const duration = 5000;

    const startTime = performance.now();


    function animate(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(
            elapsed / duration,
            1
        );


        // Desaceleración suave

        const ease = 1 - Math.pow(
            1 - progress,
            5
        );


        rotation =

            startRotation +
            (targetRotation - startRotation) * ease;


        drawWheel();


        if (progress < 1) {

            requestAnimationFrame(animate);

        } else {

            rotation = rotation % (Math.PI * 2);

            drawWheel();


            const winner = getWinner();

            wheelResult.textContent =
                "¡Te ha tocado: " + winner + "! ♡";


            spinButton.disabled = false;

            spinButton.textContent =
                "Girar otra vez ✧";

            spinning = false;

        }

    }


    requestAnimationFrame(animate);

}


spinButton.addEventListener("click", spinWheel);


/* Dibujar ruleta al iniciar */

drawWheel();


/* =========================================
   FIN DEL PROYECTO ♡
========================================= */
