// CHAIN OF RESPONSABILITY PATTERN
// Ejemplo: Aprobación de compras

// Paso 1 Handler
// Estructura común

abstract class Approver {
  protected nextApprover?: Approver;

  setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  abstract approve(amount: number): void;
}

// Paso 2 Concrete Handlers

class Supervisor extends Approver {
  approve(amount: number): void {
    if (amount <= 1000) {
      console.log(`Compra aprobada por Supervisor por ${amount}`);
      return;
    }

    this.nextApprover?.approve(amount);
  }
}

class Manager extends Approver {
  approve(amount: number): void {
    if (amount <= 5000) {
      console.log(`Compra aprobada por Manager por ${amount}`);
      return;
    }

    this.nextApprover?.approve(amount);
  }
}

class Director extends Approver {
  approve(amount: number): void {
    if (amount <= 10000) {
      console.log(`Compra aprobada por Director por ${amount}`);
      return;
    }

    console.log("Compra demasiada alta");
  }
}

// paso 3 crear la cadena
const supervisor = new Supervisor();
const manager = new Manager();
const director = new Director();

supervisor.setNext(manager).setNext(director);

// paso 4 uso el patron
supervisor.approve(800);
supervisor.approve(3000);
supervisor.approve(9000);
supervisor.approve(200000);

/*
Envia solicitudes por una cade de objetos
Cada objeto decide
- Procesar
- o pasar al siguiente

los middleware son un eslab'n

el metodo next() siempre devuelve el siguiente 
*/
