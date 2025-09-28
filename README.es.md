# 🛍️ Fake Store API CLI

Este proyecto es una interfaz de línea de comandos (CLI) en Node.js que permite interactuar con la [Fake Store API](https://fakestoreapi.com/) para realizar operaciones CRUD sobre productos.

## 📦 Requisitos

- Node.js >= 18.x (por soporte de `fetch`)
- Conexión a Internet

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```
Ejecuta el script usando:

```bash
npm run start <METHOD> <ENDPOINT> [...args]
```
O directamente con Node.js:

```bash
node index.js <METHOD> <ENDPOINT> [...args]
```
📌 Comandos Disponibles
🔍 GET
Obtiene uno o varios productos.

Formato:
bash
Copiar código
npm run start GET products
bash
Copiar código
npm run start GET products/<productId>
Ejemplos:
bash
Copiar código
npm run start GET products
npm run start GET products/2
➕ POST
Crea un nuevo producto.

Formato:
bash
Copiar código
npm run start POST products <title> <price> <category>
Ejemplo:
bash
Copiar código
npm run start POST products "Zapatos de cuero" 59.99 "moda"
📝 PUT
Actualiza un producto existente (solo title y price).

Formato:
bash
Copiar código
npm run start PUT products/<productId> <title> <price>
Ejemplo:
bash
Copiar código
npm run start PUT products/2 "Zapatos actualizados" 69.99
❌ DELETE
Elimina un producto por ID.

Formato:
bash
Copiar código
npm run start DELETE products/<productId>
Ejemplo:
bash
Copiar código
npm run start DELETE products/2
📂 Estructura del Proyecto
index.js — Script principal que procesa los argumentos y realiza llamadas HTTP a la API usando fetch.

⚙️ Lógica Interna
GET → Muestra productos (todos o uno).

POST → Crea un producto con title, price y category.

PUT → Actualiza title y price de un producto existente.

DELETE → Elimina un producto por su ID.

❗ Errores Comunes
Comando no reconocido → Asegúrate de usar GET, POST, PUT, DELETE.

Endpoint mal formado → Sigue los ejemplos indicados para cada comando.

Argumentos insuficientes → Verifica que pasaste todos los datos necesarios para POST o PUT.

📑 Licencia
Este proyecto está bajo la licencia MIT.

🙋‍♀️ Autor
Mónica Andrea Brito
