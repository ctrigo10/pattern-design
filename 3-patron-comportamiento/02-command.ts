export {};
// COMMAND PATTERN
// Ejemplo: control remoto

// 1. Receiver
// Objeto que realiza la accion

class Ligth {
  turnOn(): void {
    console.log("Luz encendida");
  }
  turnOff(): void {
    console.log("Luz apagada");
  }
}

// 2. Command
// Definir operaci'on com'un
interface Command {
  execute(): void;
}

// 3. Commands concretos
class TurnOnCommand implements Command {
  constructor(private ligth: Ligth) {}

  execute(): void {
    this.ligth.turnOn();
  }
}

class TurnOffCommand implements Command {
  constructor(private ligth: Ligth) {}

  execute(): void {
    this.ligth.turnOff();
  }
}

// 4. Invoker (Solicitante)
// Ejecuta comandos
class RemoteControl {
  submit(command: Command): void {
    command.execute();
  }
}

// 5. Uso del patr'on
const ligth = new Ligth();
const turnOn = new TurnOnCommand(ligth);
const turnOff = new TurnOffCommand(ligth);
const remote = new RemoteControl();

remote.submit(turnOn);
remote.submit(turnOff);

// IDEA
/*
Command convierte solicitudes en objetos

Permite:
- Desacoplar
- Guardar comandos
- Deshacer acciones
- Colas
- Historial
*/
