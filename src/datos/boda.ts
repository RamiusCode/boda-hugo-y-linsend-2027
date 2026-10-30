// src/datos/boda.ts
// Todos los datos de Hugo y Linsend para el diseño "periódico" (la portada
// de "Noticia de último momento"). Los componentes de src/components/
// primicia/ no llevan textos propios del evento: los leen de acá.
//
// Origen: información.txt (novios, padres, fecha, lugares e itinerario)
// y lo que los novios pasaron aparte (regalo, mensaje).

// ── Novios ───────────────────────────────────────────────────
export const novio = "Hugo";
export const novia = "Linsend";

// ── Fecha ────────────────────────────────────────────────────
// La cuenta regresiva apunta a la ceremonia, en hora de Bolivia (-04:00).
export const fecha = {
    diaSemana: "Jueves",
    dia: 21,
    mes: "Enero",
    anio: 2027,
    inicio: "2027-01-21T16:00:00-04:00",
};

// ── Padres ───────────────────────────────────────────────────
export const padresNovia = ["Walter Pérez Coimbra", "Deisy Salces Barba"];
export const padresNovio = ["Zulema Tapia Ibáñez", "Danny Vázquez Banegas"];

// ── Lugares ──────────────────────────────────────────────────
export const ceremonia = {
    titulo: "Ceremonia Religiosa",
    lugar: "Iglesia San Martín de Porres",
    hora: "16:00",
    direccion: "Av. Roca y Coronado entre 2do anillo y 3ro esq. Calle Bermejo.",
    mapa: "https://maps.app.goo.gl/nAYsuzn86rVNa1Ue9",
    foto: "/imagenes/ceremonia.jpeg",
};

export const recepcion = {
    titulo: "Recepción Social",
    lugar: "Ciudad Jardín Salón De Eventos",
    hora: "19:00",
    direccion:
        "Av. Moscú entre 7mo y 8vo anillo esq. calle Rosario.",
    mapa: "https://maps.app.goo.gl/FvEyxYoXjXPrU6QHA",
    foto: "/imagenes/recepcion.webp",
};

// ── Cronograma ───────────────────────────────────────────────
// Va en orden. En pantalla se reparten solos: el 1.º, 3.º, 5.º... a la
// derecha de la línea, y el 2.º, 4.º, 6.º... a la izquierda.
export const cronograma = [
    { nombre: "Ceremonia religiosa", hora: "16:00", icono: "iglesia" },
    { nombre: "Recepción social", hora: "19:00", icono: "entrada" },
    { nombre: "Ceremonia civil", hora: "19:30", icono: "recepcion" },
    { nombre: "Vals y Brindis", hora: "20:00", icono: "brindis" },
    { nombre: "Cena", hora: "20:30", icono: "cena" },
    { nombre: "A bailar", hora: "21:00", icono: "musica" },
];

// ── Vestimenta ───────────────────────────────────────────────
export const vestimenta = {
    estilo: "FORMAL",
    // Pedido especial de los novios, debajo del estilo
    nota: "Con mucho cariño, les pedimos reservar el blanco y el negro para los novios.",
};

// Solo adultos: el recuadro debajo de los lugares. Con false no se dibuja.
export const soloAdultos = {
    mostrar: true,
    texto:
        "Amamos a sus niños y queremos que ustedes disfruten sin parar, por ello es que la invitación es solo para adultos.",
};

// ── Textos ───────────────────────────────────────────────────
// Cada línea arranca renglón nuevo, como en la plantilla
export const mensajeNovios = [
    "Nos conocimos entre risas y miradas cómplices, sin percibir cómo la amistad se transformó en un amor profundo.",
    "Con la bendición de nuestras familias y el corazón rebosante de gratitud, nos unimos ante Dios para celebrar este regalo de vida compartida. Gracias a todos por su apoyo y cariño en este nuevo capítulo que apenas comienza.",
];

export const cartaFamilia = {
    titulo: "Querida familia y Amigos",
    texto:
        "Nos emociona profundamente compartir este momento sagrado con ustedes y hacer de este día un recuerdo inolvidable. Los esperamos con toda la alegría y energía, con ganas de disfrutar y crear recuerdos que permanezcan en nuestros corazones. Su compañía iluminará nuestra celebración.",
};

// ── Regalo ───────────────────────────────────────────────────
export const regalo = {
    // Redacción de los novios, tal cual. Cada línea es un párrafo.
    texto: [
        "Nuestro hogar ya cuenta con lo necesario, pero siendo sinceros… ¡nos falta el Ferrari! 😂🏎🟀 Si desean bendecirnos con un detalle y ayudarnos con ese pequeño sueño, hemos preparado una cuenta para recibirlo con mucho cariño. ❤️",
        "Si desean hacernos un regalo en efectivo, será bienvenido el día del evento.",
        "Lo más importante para nosotros es contar con su compañía y buenos deseos en esta nueva etapa. 💍",
    ],
    qr: "/imagenes/qr.png",
    // Tal cual figuran en el QR
    titular: "PEREZ SALCES LINSEND JOHANNA",
    cuenta: "1021010921",
    concepto: "HUGO Y LINSEND",
};

// ── Fotos y música ───────────────────────────────────────────
// Una foto de los novios para cada lugar, en orden:
//   portada   → la grande con los nombres
//   mensaje   → al lado del "Mensaje de los novios"
//   exclusiva → la que pasa sola junto a los padres
//   cierre    → la grande del final, junto a la confirmación y el regalo
// Para que una galería pase varias fotos, se agregan más a su lista.
const foto1 = "/imagenes/foto1.jpeg";
const foto2 = "/imagenes/foto2.jpeg";
const foto3 = "/imagenes/foto3.jpeg";
const foto4 = "/imagenes/foto4.jpeg";
export const fotos = {
    portada: foto1,
    mensaje: foto2,
    // Las dos galerías que pasan solas, con zoom lento
    exclusiva: [foto4],
    cierre: [foto3],
};

export const cancion = "/musica/cancion.mp3";

// ── Pases ────────────────────────────────────────────────────
// La única función que arma la frase de los pases: la usan la tarjeta del
// invitado y cualquier otro lugar que lo necesite.
export function textoPases(cantidad: number): string {
    return `${cantidad} ${cantidad === 1 ? "pase" : "pases"}`;
}
