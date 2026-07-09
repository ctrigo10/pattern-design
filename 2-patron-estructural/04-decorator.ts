export {};

// DECORATOR PATTERN
// café con extras

// 1. Define el componente
interface Coffe {
  getDescription(): string;
  getPrice(): number;
}

// 2. Componente concreto
class SimpleCoffee implements Coffe {
  getDescription(): string {
    return "Café simple";
  }
  getPrice(): number {
    return 10;
  }
}

// 3. Decorador base
class CoffeDecorator implements Coffe {
  constructor(protected coffe: Coffe) {}

  getDescription(): string {
    return this.coffe.getDescription();
  }
  getPrice(): number {
    return this.coffe.getPrice();
  }
}

// 4. Decoradores concretos
class MilkDecorator extends CoffeDecorator {
  getDescription(): string {
    return super.getDescription() + " + leche";
  }
  getPrice(): number {
    return super.getPrice() + 2;
  }
}

class SugarDecorator extends CoffeDecorator {
  getDescription(): string {
    return super.getDescription() + " + azúcar";
  }
  getPrice(): number {
    return super.getPrice() + 1;
  }
}

// 5. Uso del patrón
let myCoffee: Coffe = new SimpleCoffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
console.log(
  `
  Descripción: ${myCoffee.getDescription()}
  Precio: $${myCoffee.getPrice()}
  `,
);
