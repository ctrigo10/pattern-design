export {};

// MEMENTO PATTERN
// Ejemplo: Editor de texto

// 1. Mmento (Guarda el estado del objeto)
class TextMemento {
  constructor(public content: string) {}
}

// 2. Originator (Objetco cuyo estado cambia)
class TextEditor {
  private content = "";

  write(text: string): void {
    this.content += text;
  }

  save(): TextMemento {
    return new TextMemento(this.content);
  }

  restore(memento: TextMemento): void {
    this.content = memento.content;
  }

  show(): void {
    console.log(this.content);
  }
}

// 3. Caretaker
// Guardar historial
class History {
  private history: TextMemento[] = [];

  push(memento: TextMemento): void {
    this.history.push(memento);
  }

  pop(): TextMemento | undefined {
    return this.history.pop();
  }
}

// 4. Uso del patrón
const editor = new TextEditor();
const history = new History();

editor.write("Hola ");
history.push(editor.save());

editor.write("Mundo");
editor.show();

const lastState = history.pop();

if (lastState) {
  editor.restore(lastState);
}

editor.show();

/*
Memento Pattern
Guarda estados de un objeto para poder restaurarlos

Muy usado en
- undo/redo
- historial
- snapshots
*/
