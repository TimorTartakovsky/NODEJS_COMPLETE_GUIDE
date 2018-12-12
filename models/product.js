const fs = require('fs');
const path = require('path');
const dirPath = require('../utils/path');

const getProductsFromFile = callback => {
	const createdPath = path.join(dirPath, 'data', 'products.json');
	return fs.readFile(createdPath, (error, fileContent) => {
		if (error) {
			return callback([]);
		}
		return callback(JSON.parse(fileContent));
	});
}

module.exports = class Product {

	constructor(title) {
		this.title = title;
	}

	save() {
		getProductsFromFile(allProducts => {
			allProducts.push(this);
			const createdPath = path.join(dirPath, 'data', 'products.json');
			fs.writeFile(createdPath, JSON.stringify(allProducts), err => console.log(err));
		});
	}

	static fetchAll(callback) {
		return getProductsFromFile(callback)
	}
}