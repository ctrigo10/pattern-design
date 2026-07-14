export {};

// TEMPLATE METHOD PATTERN
// Ejemplo: Preparar una bebidas

// 1. Clase  abstracta
// Definimos la estructura del algoritmo

abstract class Beverage {
  // Definir los pasos generalse

  prepare(): void {
    this.boilWater();
    this.addMainIngredient();
    this.serve();
  }

  boilWater(): void {
    console.log("Hirviendo agua");
  }

  serve(): void {
    console.log("sirviendo la bebida");
  }

  // Paso que cambiará la subclase
  abstract addMainIngredient(): void;
}

// 2. Implementación concretas
class Coffe extends Beverage {
  addMainIngredient(): void {
    console.log("Agregando café molido");
  }
}

class Tea extends Beverage {
  addMainIngredient(): void {
    console.log("Agregando te");
  }
}

// 3. Uso del patrón
const coffe = new Coffe();
coffe.prepare();

const tea = new Tea();
tea.prepare();

/*
  Define la estructura general del algoritmo

  las subclases modifican solo algunos pasos

  Diferencia con el Strategy:
  - Stragety: Cambia todo el algoritmo usando composición 
  - Template method: Modifica solo algunos pasos usando herencia (subclases)
*/
