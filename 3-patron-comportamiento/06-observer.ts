export {};

// OBSERVER PATTERN
// Ejemplo: Canal de youtube

// 1. Obeserver
// Define el método de actualización
interface Subscriber {
  update(videoTitle: string): void;
}

// 2. Subject
// Administrar los observadores
class YouTubeChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  notify(videoTitle: string): void {
    for (const subscribe of this.subscribers) {
      subscribe.update(videoTitle);
    }
  }

  uploadVideo(title: string): void {
    console.log("Nuevo video: " + title);
    this.notify(title);
  }
}

// 3. Observadores concretos
class User implements Subscriber {
  constructor(private name: string) {}

  update(videoTitle: string): void {
    console.log(`Notificación para ${this.name} - Nuevo video: ${videoTitle}`);
  }
}

// 4. Uso del patrón
const channel = new YouTubeChannel();

const carlos = new User("Carlos");
const maria = new User("Maria");

channel.subscribe(carlos);
channel.subscribe(maria);

channel.uploadVideo("Patrón Observer en TypeScript");

/*
Observer crea una relación uno a muchos

Cuando un objeto cambia notifica automáticamente a todos los observadores

Subject (Sujeto): Es el que tiene la información y mantiene la lista de suscriptores
Observer (Observador): Es el que espera la actualización
Relación: Uno a muchos. Un cambio en un objeto avisa a N objetos
*/
