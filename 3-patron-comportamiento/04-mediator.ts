export {};
// MEDIATOR PATTERN
// Ejemplo: chat grupal

// 1. Mediador
// Define la comunicaci'on centralizada

interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

//2. Mediator concreto
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receive(message);
      }
    });
  }
}

// 3. Colleague
class User {
  constructor(
    private name: string,
    private chatMediator: ChatMediator,
  ) {}

  send(message: string): void {
    console.log(`${this.name} envia un mensaje: ${message}`);
    this.chatMediator.sendMessage(message, this);
  }

  receive(message: string): void {
    console.log(`${this.name} recibe el mensaje: ${message}`);
  }
}

// Uso del patr'on
const chatRoom = new ChatRoom();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

alice.send("¡Hola a todos!");

/*
  Mediador centraliza la comunicaci'on entre objetos
  Los objetos no se comunican directamente entre si
*/
