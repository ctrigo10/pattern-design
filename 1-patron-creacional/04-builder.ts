export {}; // Evita el error de identificado duplicado

// 1. El producto
// la clase compleja que queremos construir

class Usuario {
  public nombre: string = "";
  public apellido: string = "";
  public email: string = "";
  public telefono: string = "";
  public direccion: string = "";

  // El métodos de ayuda para ver el resultado

  mostrarInfo() {
    console.log(`
    Usuario: ${this.nombre} ${this.apellido},
    Email: ${this.email},
    Telefono: ${this.telefono},
    Direccion: ${this.direccion}
    `);
  }
}

// 2. El builder
class UsuarioBuilder {
  private usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }
  //Métodos encadenados para crear el usuario

  setNombre(nombre: string): UsuarioBuilder {
    this.usuario.nombre = nombre;
    return this; // Para poder encadenar métodos
  }

  setApellido(apellido: string): UsuarioBuilder {
    this.usuario.apellido = apellido;
    return this; // Para poder encadenar métodos
  }

  setEmail(email: string): UsuarioBuilder {
    this.usuario.email = email;
    return this; // Para poder encadenar métodos
  }

  setTelefono(telefono: string): UsuarioBuilder {
    this.usuario.telefono = telefono;
    return this; // Para poder encadenar métodos
  }

  setDireccion(direccion: string): UsuarioBuilder {
    this.usuario.direccion = direccion;
    return this; // Para poder encadenar métodos
  }

  // 3. Método final (Build)
  // devolver el objeto terminado
  build(): Usuario {
    return this.usuario;
  }
}

// Usar el patrón
// Ejemplo: construcción fluida
const miUsuario = new UsuarioBuilder()
  .setNombre("Carlos")
  .setApellido("Trigo")
  .setEmail("carlos@gmail.com")
  .build();

miUsuario.mostrarInfo();
