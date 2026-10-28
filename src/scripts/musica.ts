// src/scripts/musica.ts
// Un solo reproductor para toda la invitación: lo arranca el botón de la
// portada del periódico y lo pausa o reanuda el botón flotante. Los dos
// importan este módulo, así que comparten el mismo audio.
import { cancion } from "../datos/boda";

let audio: HTMLAudioElement | null = null;

function obtener(): HTMLAudioElement {
    if (!audio) {
        audio = new Audio(cancion);
        audio.loop = true;
    }
    return audio;
}

export function reproducir() {
    obtener()
        .play()
        .catch(() => {
            // El navegador puede negarse si no hubo toque; no es un error
        });
}

/** Pausa o reanuda. Devuelve true si quedó sonando. */
export function alternar(): boolean {
    const a = obtener();
    if (a.paused) {
        reproducir();
        return true;
    }
    a.pause();
    return false;
}
