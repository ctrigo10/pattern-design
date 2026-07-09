export {}; // Evita el error de identificado duplicado
// 1. Crear interface Protoype

interface Protoype {
  clone(): Protoype;
}

// 2. Crear clase Zombie
class Zombie implements Protoype {
  constructor(
    public type: string,
    public health: number,
  ) {}

  clone(): Zombie {
    return new Zombie(this.type, this.health);
  }
}

// 1. Crear zombie original
const originalZombie = new Zombie("Zombie Básico", 100);

// 2. Clonar zombie
const zombieCopy = originalZombie.clone();

// 3. Modificar la copia
zombieCopy.health = 50;

// 4. Mostrar resultados
console.log(`Zombie Original: ${originalZombie.health}`);
console.log(`Zombie Copia: ${zombieCopy.health}`);
