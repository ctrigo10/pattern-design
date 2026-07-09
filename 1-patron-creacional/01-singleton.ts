export {}; // Evita el error de identificado duplicado

// Patrón Singleton
// Gestión de una conexión única a la base de datos

class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private readonly connectionId: number;

  // 1. El constructor debe ser privado
  private constructor() {
    this.connectionId = Math.random();
    console.log(`Nueva conexión establecida: ${this.connectionId}`);
  }

  // 2. El método estático de acceso
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`[ID]: ${this.connectionId}] Ejecutando: ${sql}`);
  }
}

// --- USO DEL PATRON ---
function main() {
  //const dbErr = new DatabaseConnection() // ERROR
  const db1 = DatabaseConnection.getInstance();
  const db2 = DatabaseConnection.getInstance();
  const db3 = DatabaseConnection.getInstance();

  db1.query('SELECT * FROM users');
  db2.query('SELECT * FROM products');
  db3.query('SELECT * FROM persons');

  console.log('¿Son la misma instancia?', db1 === db2 && db2 === db3)
}

main();
