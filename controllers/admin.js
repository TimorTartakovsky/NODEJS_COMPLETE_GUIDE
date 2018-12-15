const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
	  pageTitle: 'Add Product',
	  path: '/admin/add-product',
	  formsCSS: true,
	  productCSS: true,
	  activeAddProduct: true
	});
};

exports.postAddProduct = (req, res, next) => {
	const {title, imageUrl, description, price} = req.body;
	const product = new Product(title, imageUrl, description, price);
	product.save();
	res.redirect('/shop/product-list');
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll((allProducts) => {
		res.render('shop/products', {
			prods: allProducts,
			pageTitle: 'Admin Products',
			path: '/admin/products',
		});
	});
};
