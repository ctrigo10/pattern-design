// FACADE PATTERN
// Encender sistema de cine

// 1. Susbistemas
// Clases completas del sistema

class TV {
  on(): void {
    console.log("TV encendida");
  }
}

class SoundSystem {
  on(): void {
    console.log("Sistema de sonido encendido");
  }
}

class DVDPlayer {
  on(): void {
    console.log("DVD player encendido");
  }
  play(): void {
    console.log("Reproduciendo película");
  }
}

// 2. El facade (fachada)
// Clase que conoce y coordina a los subsistemas
// Simplifica el uso del sistema
class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private soundSystem: SoundSystem,
    private dvdPlayer: DVDPlayer,
  ) {}

  // Métodos simples para el cliente
  watchMovie(): void {
    this.tv.on();
    this.soundSystem.on();
    this.dvdPlayer.on();
    this.dvdPlayer.play();
  }
}

// 3. Uso del patrón
const tv = new TV();
const soundSystem = new SoundSystem();
const dvdPlayer = new DVDPlayer();

const homeTheaterFacade = new HomeTheaterFacade(tv, soundSystem, dvdPlayer);
homeTheaterFacade.watchMovie();

/*
Facade proporciona una interfaz simple para usar un sistema complejo
*/
