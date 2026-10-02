const productService = require("../services/productService");
const {
    setCache,
    clearCache
} = require("../middleware/cacheMiddleware");


async function getProducts(req, res) {
    try {
        const data = await productService.getAllProducts();

        setCache(req.originalUrl, data);

        res.json(data);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error reading products"
        });
    }
}


async function getProductById(req, res) {
    try {
        const productId = Number(req.params.id);

        const product = await productService.getProductById(productId);

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        setCache(req.originalUrl, product);

        res.json(product);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error reading product"
        });
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error creating product"
        });
    }
}


async function updateProduct(req, res) {
    try {
        const productId = Number(req.params.id);

        const product = await productService.updateProduct(
            productId,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error updating product"
        });
    }
}

async function patchProduct(req, res) {
    try {
        const productId = Number(req.params.id);

        const product = await productService.updateProduct(
            productId,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error updating product"
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const productId = Number(req.params.id);

        const product = await productService.deleteProduct(productId);

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        clearCache();

        res.json(product);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Error deleting product"
        });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
};