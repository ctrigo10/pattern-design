export {};
// ITERATOR PATTERN
// Ejemplo: recorrer colecci'on de libros

// 1. Iterator
// Define operaciones de recorrido
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// 2. Colecci'on
class BookCollection {
  private books: string[] = [];

  addBook(book: string): void {
    this.books.push(book);
  }

  getBooks(): string[] {
    return this.books;
  }
}

// 3. Iterator concreto
// TODO: type iterator
class BookIterator implements Iterator<string> {
  private index = 0;
  constructor(private books: string[]) {}

  hasNext(): boolean {
    return this.index < this.books.length;
  }

  next(): string {
    return this.books[this.index++];
  }
}

// 4. Uso del patr'on
const bookCollection = new BookCollection();
bookCollection.addBook("Clean Code");
bookCollection.addBook("Desing Patterns");
bookCollection.addBook("Refactoring");

// 5. Crear iterador
const iterator = new BookIterator(bookCollection.getBooks());

// 6. Recorrer colección
while (iterator.hasNext()) {
  console.log(iterator.next());
}

/*
- Iterator permite recorrer una coleccion sin exponer su estructura interna
*/
