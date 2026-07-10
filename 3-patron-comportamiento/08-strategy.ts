export {};

// STRATEGY PATTERN
// Ejemplo de métodos de pago

// 1. Strategy
// Definir operación común
interface PaymentStrategy {
  pay(amount: number): void;
}

// 2. Estrategias concretas
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Se pagaron $${amount} con tarjeta de crédito.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Se pagaron $${amount} con PayPal.`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Se pagaron $${amount} con Crypto.`);
  }
}

// 3. Contexto
// Uso de estragetias dinámicamente
class ShoppingCart {
  constructor(private paymentStrategy: PaymentStrategy) {}

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Uso del patrón
const cardPayment = new CreditCardPayment();
const cart1 = new ShoppingCart(cardPayment);
cart1.checkout(100);

const paypalPayment = new PayPalPayment();
const cart2 = new ShoppingCart(paypalPayment);
cart2.checkout(200);

const cryptoPayment = new CryptoPayment();
const cart3 = new ShoppingCart(cryptoPayment);
cart3.checkout(300);

/*
Strategy permite camgiar algoritmos o comportamietnos dinámicamnete

Evitamos muchos if/switch

Diferencias clave entre State y Strategy
- State: El objeto cambia de estado automáticamente (o por eventos internos) y su comportamiento cambia según su "humor" o "condición actual"
- Strategy: El programador o el usuario conscientemente elige y cambia el comportamiento del objeto.
*/
