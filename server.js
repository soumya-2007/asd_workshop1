// const express = require("express");
// const fs = require("fs");
// const app = express();
// const path = require("path");
// const port = 3000;
// const filePath = path.join(__dirname, "db.json");

// const cache = {};

// async function readData(){
//     let products = await fs.readFileSync(filePath, "utf-8");
//     console.log(products);
//     return JSON.parse(products);
// }

// async function delayReadFile(){
//     await new Promise((resolve) => {
//         setTimeout(resolve , 1500);
//     });
//     return await readData();
// }

// app.get("/products", async (req, res) => {
//     try{
//         const key = req.url;

//         if (cache[key]) {
//             return res.json(cache[key]);
//         }

//         let data = await delayReadFile();

//         cache[key] = data;

//         res.json(data);
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ error: "Error reading file" });
//     }
// });

// app.get("/products/:id", async (req, res) => {
//     try{
//         const key = req.url;

//         if (cache[key]) {
//             return res.json(cache[key]);
//         }

//         let data = await delayReadFile();
//         const productId = Number(req.params.id);
//         const product = data.find((p) => p.id === productId);

//         if (!product) {
//             return res.status(404).json({ error: "Product not found" });
//         }

//         cache[key] = product;

//         res.json(product);
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ error: "Error reading file" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// // const express = require("express");
// // const fs = require("fs");
// // const app = express();
// // const path = require("path");
// // const port = 3000;
// // const filePath = path.join(__dirname, "db.json");

// // async function readData(){
// //     let products = await fs.readFileSync(filePath, "utf-8");
// //     console.log(products);
// //     return JSON.parse(products);
// // }

// // async function delayReadFile(){
// //     await new Promise((resolve) => {
// //         setTimeout(resolve , 1500);
// //     });
// //     return await readData();
// // }

// // app.get("/products", async (req, res) => {
// //     try{
// //         let data = await delayReadFile();
// //         res.json(data);
// //     }catch(err){
// //         console.error(err);
// //         res.status(500).json({ error: "Error reading file" });
// //     }
// // });

// // app.get("/products/:id", async (req, res) => {
// //     try{
// //         let data = await delayReadFile();
// //         const productId = Number(req.params.id);
// //         const product = data.find((p) => p.id === productId);
// //         if (!product) {
// //             return res.status(404).json({ error: "Product not found" });
// //         }
// //         res.json(product);
// //     }catch(err){
// //         console.error(err);
// //         res.status(500).json({ error: "Error reading file" });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server running on port ${port}`);
// // });
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products", productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});