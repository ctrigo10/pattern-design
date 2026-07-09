export {}; // Evita el error de identificado duplicado
// BRIDGE PATTERN
// Control remoto y televisores

// 1. Creamos la interface

interface Device {
  turnOn(): void;
  turnOff(): void;
}

// 2 Implementaciones concretas
class SamsungTv implements Device {
  turnOn(): void {
    console.log("Samsung Tv encendida");
  }
  turnOff(): void {
    console.log("Samsung Tv apagada");
  }
}

class LGTV implements Device {
  turnOn(): void {
    console.log("LG Tv encendida");
  }
  turnOff(): void {
    console.log("LG Tv apagada");
  }
}

// 3 Abstracción
// El control remoto trabaja con la interfaz Device y no con marcas concretas
class RemoteControl {
  constructor(protected device: Device) {}

  on(): void {
    this.device.turnOn();
  }

  off(): void {
    this.device.turnOff();
  }
}

// 4 Uso del patrón

// Samsung
const samsung = new SamsungTv();
const samsungRemote = new RemoteControl(samsung);

samsungRemote.on();
samsungRemote.off();

// LG
const lg = new LGTV();
const lgRemote = new RemoteControl(lg);

lgRemote.on();
lgRemote.off();

// Ventaja: si creamos una nueva marca, no tocamos el control remoto
/*
    Bridge separa:
    - La abstracción -> control remoto
    - de la implementación -> Tvs
*/
