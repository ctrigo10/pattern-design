// PROXY PATTERN
// Accesso a página web

// 1. Define operación común
interface Internet {
  connect(url: string): void;
}

// 2. Objeto real
class RealInternet implements Internet {
  connect(url: string): void {
    console.log(`Conectando a ${url}`);
  }
}

// 3. Proxy
// Controla acceso al objeto real
class ProxyInternet implements Internet {
  private realInternet = new RealInternet();

  private bannedSites: string[] = ["facebook.com", "twitter.com"];

  connect(url: string): void {
    if (this.bannedSites.includes(url)) {
      console.log(`Acceso denegado a ${url}`);
      return;
    } else {
      this.realInternet.connect(url);
    }
  }
}

// 4 Uso del patrón
const proxy = new ProxyInternet();
proxy.connect("google.com");
proxy.connect("facebook.com");

/*
Proxy controla el acceso a un objeto real

Puede:
- Validar
- Bloquear
- Cachear
- Proteger
- Registrar accesos
*/
