export {};

// STATE PATTERN
// Ejemplo: Semaforo

// 1. State
// Define comportamiento común
interface TrafficLightState {
  next(light: TrafficLight): void;
}

// 2. Estados concretos

class RedState implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("ROJO -> VERDE");
    light.setState(new GreenState());
  }
}

class GreenState implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("VERDE -> AMARILLO");
    light.setState(new YellowState());
  }
}

class YellowState implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("AMARILLO -> ROJO");
    light.setState(new RedState());
  }
}

// 3. Contexto
// Cambia comportamiento según el estado
class TrafficLight {
  constructor(private state: TrafficLightState) {}

  setState(state: TrafficLightState): void {
    this.state = state;
  }

  change(): void {
    this.state.next(this);
  }
}

// 4. Uso del patrón
const trafficLight = new TrafficLight(new RedState());

trafficLight.change();
trafficLight.change();
trafficLight.change();

/*
State permite cambiar el comportamiento de un objeto según su estado interno

Evitamos crear grandes if/switch
*/
