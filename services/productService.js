const database = require("../database/productDatabase");

async function getAllProducts() {
    return await database.delayReadFile();
}


async function getProductById(id) {
    const products = await database.delayReadFile();

    const product = products.find((p) => p.id === id);

    return product;
}

async function createProduct(product) {
    const products = await database.readData();

    products.push(product);

    await database.writeData(products);

    return product;
}

async function updateProduct(id, updatedData) {
    const products = await database.readData();

    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData,
        id: id
    };

    await database.writeData(products);

    return products[index];
}


async function deleteProduct(id) {
    const products = await database.readData();

    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return null;
    }

    const deletedProduct = products[index];

    products.splice(index, 1);

    await database.writeData(products);

    return deletedProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};