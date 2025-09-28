// Ignoramos los dos primeros elementos con slice
const args = process.argv.slice(2);

const urlApi = 'https://fakestoreapi.com/'
const endpoint = args[1];

if (args[0] === 'GET') {
    if (endpoint === "products" || /^products\/\d+$/.test(endpoint)) {
        var urlGet = urlApi + endpoint
    } else {
        console.log('Error: Use npm run start GET products ó products/<productId>')
        process.exit(1)
    }
    console.log('Buscando productos ...')
    getProducts(urlGet)
} else if (args[0] === 'POST') {
    if (endpoint === 'products' && args.length === 5) {
        var urlPost = urlApi + endpoint
    } else {
        console.log('Error: Use npm run start POST products <title> <price> <category>')
        process.exit(1)
    }
    const titl = args[2];
    const pric = args[3];
    const categ = args[4];
    const product = { title: titl, price: pric, category: categ };
    console.log(`Agregando el Producto: ${product.title} a $${product.price} en ${product.category} ...`);
    postProducts(urlPost, product)
} else if (args[0] === 'PUT') {
    if (/^products\/\d+$/.test(endpoint) && args.length === 4) {
        var urlPut = urlApi + endpoint
    } else {
        console.log('Error: Use npm run start PUT products/<productId> <title> <price>')
        process.exit(1)
    }
    const titl = args[2];
    const pric = args[3];
    const product = { title: titl, price: pric };
    console.log('Actualizando producto ...');
    putProducts(urlPut, product)
} else if (args[0] === 'DELETE') {
    if (/^products\/\d+$/.test(endpoint)) {
        var urlDel = urlApi + endpoint
    } else {
        console.log('Error: Use npm run start DELETE products/<productId>')
        process.exit(1)
    }
    console.log('Elminando producto ...')
    delProducts(urlDel)
}
else {
    console.log('Comando no reconocido. Use "GET", "POST", "PUT" o "DELETE".');
}

// Obtener productos
function getProducts(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Fin GET'));
}

// Agregar productos
function postProducts(url, product) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => {
            console.log(`Producto ${data.id} agregado correctamente`)
            console.log(data)
        })
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Fin POST'));
}

// Modificar productos
function putProducts(url, product) {
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => {
            console.log(`Producto ${data.id} actualizado correctamente`)
            console.log(data)
        })
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Fin PUT'));
}

// Eliminar productos
function delProducts(url) {
    fetch(url, {
        method: 'DELETE'
    })
        .then(response => {
            console.log(`Respuesta DELETE: ${response.status} (${response.statusText})`)
            return response.json()
        })
        .then(data => console.log(`Producto ${data.id} (${data.title}) eliminado correctamente`))
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Fin DELETE'));
}