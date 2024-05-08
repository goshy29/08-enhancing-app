const products = [];

// 101. Storing Data in a File with the Model
const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");

// 103. Refactoring the File Storage Code
const getProductsFromFile = callback => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callback([]);
        }

        callback(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        //products.push(this);
        
        // 101. Storing Data in a File with the Model
        getProductsFromFile(products => {
            products.push(this); 
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);    
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}