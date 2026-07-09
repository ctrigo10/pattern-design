export {}; // Evita el error de identificado duplicado
// ADAPTER PATTERN
// Adaptador de enfuche

// interface
interface AmericanPlug {
  conncetAmericanPlug(): void;
}

// clase existen incompatible
class EuropeanPlug {
  connectEuropeanPlug() {
    console.log("Conectando enchufe europeo");
  }
}

// Adapter
class PlugAdapter implements AmericanPlug {
  constructor(private europeanPlug: EuropeanPlug) {}

  conncetAmericanPlug(): void {
    console.log("Adaptando enchufe....");
    this.europeanPlug.connectEuropeanPlug();
  }
}

// Uso del patrón
// Objeto incompatible
const europeanPlug = new EuropeanPlug();

// adaptador
const adapter = new PlugAdapter(europeanPlug);

// El cliente usa la interfaz esperada
adapter.conncetAmericanPlug();
