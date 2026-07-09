// FLYWEIGHT PATTERN
// Arboles de un videojuego

// 1. Comparte datos comunes
class TreeType {
  constructor(
    public name: string,
    public color: string,
  ) {}

  draw(x: number, y: number): void {
    console.log(
      `🌳 Drawing ${this.name} at (${x}, ${y}) with color ${this.color}`,
    );
  }
}

// 2. Factory
// Reutilizar objetos existentes
class TreeFactory {
  private static treeTypes: TreeType[] = [];

  static getTreeType(name: string, color: string): TreeType {
    const treeType = this.treeTypes.find(
      (treeType) => treeType.name === name && treeType.color === color,
    );
    if (treeType) {
      return treeType;
    }
    const newTreeType = new TreeType(name, color);
    this.treeTypes.push(newTreeType);
    return newTreeType;
  }
}

// 3. Contexto
// Datos únicos de cada objeto
class Tree {
  constructor(
    public x: number,
    public y: number,
    public treeType: TreeType,
  ) {}

  draw(): void {
    this.treeType.draw(this.x, this.y);
  }
}

// 4 Uso del patrón
const treeType = TreeFactory.getTreeType("Pino", "Verde");

const tree1 = new Tree(1, 2, treeType);
const tree2 = new Tree(3, 4, treeType);

tree1.draw();
tree2.draw();

/*
Comparte objetos para ahorrar memoria
*/
