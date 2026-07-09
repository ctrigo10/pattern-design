export {}; // Evita el error de identificado duplicado

// Patrón Factory Method
// Tenemos dos productos que deben trabajar juntos

// 1. Los productos (interface)
interface IButton {
    render(): void;
}

interface ICheckbox {
    render(): void;
}

// 2. Familia Windows (Implementaciones concretas)
class WindowsButton implements IButton {
    render(): void {
        console.log("Renderizando botón de Windows");
    }
}
class WindowsCheckbox implements ICheckbox {
    render(): void {
        console.log("Renderizando checkbox de Windows");
    }
}

// 3. Familia MAC
class MacButton implements IButton {
    render(): void {
        console.log("Renderizando botón de Mac");
    }
}
class MacCheckbox implements ICheckbox {
    render(): void {
        console.log("Renderizando checkbox de Mac");
    }
}

// 4. La fábrica abstracta
interface IUIFactory {
    createButton(): IButton;
    createCheckbox(): ICheckbox;
}

// 5. Fábricas concretas (cadsa fábrica se encarga de una sola familia)

class WindowsFactory implements IUIFactory {
    createButton(): IButton {
        return new WindowsButton();
    }
    createCheckbox(): ICheckbox {
        return new WindowsCheckbox();
    }
}

class MacFactory implements IUIFactory {
    createButton(): IButton {
        return new MacButton();
    }
    createCheckbox(): ICheckbox {
        return new MacCheckbox();
    }
}

// 6. Cliente (Uso del patrón)
function application(factory: IUIFactory) {
    // Al cliente no le importa si es Mac o Windows
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.render();
    checkbox.render();
}

// --- Ejecución
console.log('---- Ejecutando en Windows ----')
application(new WindowsFactory());

console.log('\n---- Ejecutando en Mac ----')
application(new MacFactory());

