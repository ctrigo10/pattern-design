// VISITOR METHOD
// Ej: Productos y cálculo de impuestos

// 1. Visitor
// Define operaciones sobre los elementos
interface Visitor {
  visitBook(book: Book): void;
  visitFurniture(furniture: Furniture): void;
}

// 2. Element
// Define la operación accept
interface Product {
  accept(visitor: Visitor): void;
}

// 3. Concrete Element
class Book implements Product {
  constructor(
    public title: string,
    public price: number,
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }
}

class Furniture implements Product {
  constructor(
    public title: string,
    public price: number,
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitFurniture(this);
  }
}

// 4. Concrete Visitor
class TaxVisitor implements Visitor {
  visitBook(book: Book): void {
    const total = book.price * 1.1;

    console.log(`Libro: ${book.title}, Total con impuesto: $${total}`);
  }

  visitFurniture(furniture: Furniture): void {
    const total = furniture.price * 1.2;

    console.log(`Mueble: ${furniture.title}, Total con impuesto: $${total}`);
  }
}

// 5. Uso del patrón
const products: Product[] = [
  new Book("Clean Code", 100),
  new Furniture("Silla", 50),
];

const taxVisitor = new TaxVisitor();

products.forEach((product) => product.accept(taxVisitor));

/*
  Visitor permite agregar nuevas operaciones sin modificar las clases

  Se separa:
  - Estructura
  - Comportamiento
*/
