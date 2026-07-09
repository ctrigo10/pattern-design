export {}; // Evita el error de identificado duplicado

// Patrón Factory Method
// Sistema de notificación multicanal

// 1. El contrato (interfaz)
// Define qué deben saber hacer todos los productos que cree la fabrica

interface INotification {
  send(message: string): void;
}

// 2. Los productos concretos
// Clases que implementan el contrato, cada uno tiene su propia lógica
class EmailNotification implements INotification {
  send(message: string): void {
    console.log('[Email] Enviando correo con el mensaje:', message);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log('[SMS] Enviando SMS con el mensaje:', message);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log('[Push] Enviando notificación push con el mensaje:', message);
  }
}

// 3. La fábrica (The creator)
type NotificationType = 'email' | 'sms' | 'push';

class NotificationFactory {
  public static create(type: NotificationType): INotification {
    switch (type) {
      case 'email':
        return new EmailNotification();
      case 'sms':
        return new SMSNotification();
      case 'push':
        return new PushNotification();
      default:
        throw new Error('Tipo de notificación no válido');
    }
  }
}

// 4. El cliente (uso del patrón)
function main() {
  console.log('---Iniciando sistema de notificaciones---');

  // Ejemplo 1: Creación dinámia
  const myNotifier = NotificationFactory.create('email');
  myNotifier.send('Hola, este es un ejemplo de Factory Mehod');

  // Ejemplo 2: procesar una lista de diferentes tipos
  const deliverTo: NotificationType[] = ['email', 'sms', 'push'];

  deliverTo.forEach((type) => {
    const service = NotificationFactory.create(type);
    service.send('Alerta del sistema');
  });
}

main();
