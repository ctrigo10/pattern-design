// COMPOSITE PATTERN
// Carpeta y archivos

// 1. Componente
export {};

interface FileSystemItem {
  show(indent?: string): void;
}

// 2 Hoja
class File implements FileSystemItem {
  constructor(private name: string) {}

  show(indent: string = ""): void {
    console.log(`${indent} 📄 ${this.name}`);
  }
}

// 3 Composite
// Puede contener otros elmentos
class Folder implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.items.push(item);
  }

  show(indent: string = ""): void {
    console.log(`${indent} 📁 ${this.name}`);

    for (const item of this.items) {
      item.show(`${indent}    `);
    }
  }
}

// 4 Uso del patrón
const file1 = new File("Documento.pdf");
const file2 = new File("foto.png");

const folder1 = new Folder("Mis Archivos");
const folder2 = new Folder("Imagenes");

folder2.add(file2);
folder1.add(file1);
folder1.add(folder2);

folder1.show();

// EJEMPLO: DOM del HTML
